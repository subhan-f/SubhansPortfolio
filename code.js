import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';


const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Parse .gitignore file
function parseGitignore(gitignorePath) {
  const ignorePatterns = [];
  
  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, 'utf8');
    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        ignorePatterns.push(trimmed);
      }
    }
  }
  
  return ignorePatterns;
}

// Check if a file/directory should be ignored
function shouldIgnore(filePath, ignorePatterns, rootPath) {
  const relativePath = path.relative(rootPath, filePath);
  const relativePathNormalized = relativePath.replace(/\\/g, '/');
  
  for (const pattern of ignorePatterns) {
    // Handle directory patterns (ending with /)
    if (pattern.endsWith('/')) {
      const dirPattern = pattern.slice(0, -1);
      if (relativePathNormalized === dirPattern || 
          relativePathNormalized.startsWith(dirPattern + '/')) {
        return true;
      }
    }
    
    // Handle wildcard patterns
    if (pattern.includes('*')) {
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');
      const regex = new RegExp(`^${regexPattern}$|^${regexPattern}/|/${regexPattern}`);
      if (regex.test(relativePathNormalized)) {
        return true;
      }
    }
    
    // Exact match or starts with pattern/
    if (relativePathNormalized === pattern || 
        relativePathNormalized.startsWith(pattern + '/')) {
      return true;
    }
  }
  
  return false;
}

// Default files/folders to ignore (common in React projects)
function getDefaultIgnores() {
  return [
    'practice/',
    'code.js',
    'project-files-export.json',
    '.git/',
    'node_modules/',
    'build/',
    'dist/',
    '.env',
    '.env.local',
    '.env.development',
    '.env.production',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    '*.log',
    '.DS_Store',
    'coverage/',
    '.vscode/',
    '.idea/',
    '*.swp',
    '*.swo',
    '*.tmp',
    '*.temp',
    'Thumbs.db',
    '.next/',
    'out/',
    '.cache/',
    '.parcel-cache/',
    '.vercel/',
    '*.tsbuildinfo',
    '.qodo/',
    '.react-router/',
  ];
}

// Get all files recursively
async function getAllFiles(dirPath, ignorePatterns, rootPath, filesList = []) {
  try {
    const entries = await readdir(dirPath);
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      const relativePath = path.relative(rootPath, fullPath);
      
      // Check if should ignore
      if (shouldIgnore(fullPath, ignorePatterns, rootPath)) {
        continue;
      }
      
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await getAllFiles(fullPath, ignorePatterns, rootPath, filesList);
      } else if (stats.isFile()) {
        // Check file extensions to include (React relevant files)
        const ext = path.extname(entry).toLowerCase();
        const includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', 
                                   '.less', '.html', '.json', '.md', '.svg', '.png', '.jpg', 
                                   '.jpeg', '.gif', '.webp', '.txt', '.env.example'];
        
        // Always include if no extension or if extension is in include list
        if (!ext || includeExtensions.includes(ext)) {
          filesList.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return filesList;
}

// Read file content (handle different file types)
async function readFileContent(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const binaryExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.svg'];
  
  if (binaryExtensions.includes(ext)) {
    // For binary files, return metadata without content or base64 encoded
    const stats = await stat(filePath);
    return {
      type: 'binary',
      size: stats.size,
      extension: ext,
      content: null
    };
  } else {
    // For text files, read as string
    try {
      const content = await readFile(filePath, 'utf8');
      return {
        type: 'text',
        size: content.length,
        extension: ext,
        content: content
      };
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
      return {
        type: 'error',
        error: error.message,
        content: null
      };
    }
  }
}

// Main function
async function exportProjectFiles(projectPath, outputPath = 'project-files-export.json') {
  console.log('Starting project files export...');
  console.log(`Project path: ${projectPath}`);
  
  // Check if project path exists
  if (!fs.existsSync(projectPath)) {
    console.error(`Error: Path ${projectPath} does not exist.`);
    return;
  }
  
  // Parse .gitignore if exists
  const gitignorePath = path.join(projectPath, '.gitignore');
  const gitignorePatterns = parseGitignore(gitignorePath);
  const defaultIgnores = getDefaultIgnores();
  const allIgnorePatterns = [...defaultIgnores, ...gitignorePatterns];
  
  console.log(`Ignore patterns: ${allIgnorePatterns.length} patterns`);
  
  // Get all files
  console.log('Scanning files...');
  const allFiles = await getAllFiles(projectPath, allIgnorePatterns, projectPath);
  console.log(`Found ${allFiles.length} files to process`);
  
  // Process each file
  const filesData = {};
  let processedCount = 0;
  
  for (const filePath of allFiles) {
    const relativePath = path.relative(projectPath, filePath);
    console.log(`Processing: ${relativePath} (${processedCount + 1}/${allFiles.length})`);
    
    const content = await readFileContent(filePath);
    filesData[relativePath] = content;
    processedCount++;
  }
  
  // Create the output object
  const output = {
    metadata: {
      projectPath: projectPath,
      exportDate: new Date().toISOString(),
      totalFiles: allFiles.length,
      ignorePatterns: allIgnorePatterns,
      fileTypes: {
        text: Object.values(filesData).filter(f => f.type === 'text').length,
        binary: Object.values(filesData).filter(f => f.type === 'binary').length,
        error: Object.values(filesData).filter(f => f.type === 'error').length
      }
    },
    files: filesData
  };
  
  // Save to JSON file
  try {
    const jsonString = JSON.stringify(output, null, 2);
    await writeFile(outputPath, jsonString, 'utf8');
    console.log(`\n✅ Success! Export saved to: ${outputPath}`);
    console.log(`📊 Statistics:`);
    console.log(`   - Total files: ${output.metadata.totalFiles}`);
    console.log(`   - Text files: ${output.metadata.fileTypes.text}`);
    console.log(`   - Binary files: ${output.metadata.fileTypes.binary}`);
    console.log(`   - Errors: ${output.metadata.fileTypes.error}`);
    console.log(`   - File size: ${(jsonString.length / 1024 / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error('Error saving JSON file:', error.message);
  }
}

const __filename = fileURLToPath(import.meta.url);

if (process.argv[1] === __filename) {
  const args = process.argv.slice(2);
  let projectPath = process.cwd();
  let outputPath = 'project-files-export.json';

  if (args[0]) {
    projectPath = path.resolve(args[0]);
  }

  if (args[1]) {
    outputPath = args[1];
  }

  exportProjectFiles(projectPath, outputPath);
}

export { exportProjectFiles, parseGitignore, shouldIgnore };