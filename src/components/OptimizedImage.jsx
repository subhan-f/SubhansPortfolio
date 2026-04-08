import { motion } from "framer-motion";
export function OptimizedImage({ src, alt, className, ...props }) {
  // In development, skip <picture> and serve the original image
  return <motion.img src={src} alt={alt} className={className} loading="lazy" {...props} />;
  if (import.meta.env.DEV) {
  }

  // Production: use modern formats
  const base = src.replace(/\.(png|jpe?g)$/, '');
  return (
    <picture>
      <source srcSet={`${base}.avif`} type="image/avif" />
      <source srcSet={`${base}.webp`} type="image/webp" />
      <motion.img src={src} alt={alt} className={className} loading="lazy" {...props} />
    </picture>
    
  );
}