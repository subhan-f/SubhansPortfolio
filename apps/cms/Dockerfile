FROM node:alpine AS base
RUN apt-get update && apt-get upgrade -y --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@11.1.1

# ── Build stage ────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm rebuild @swc/core sharp esbuild

COPY . .
RUN pnpm run build

# ── Production stage ───────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts
RUN pnpm rebuild sharp

COPY src ./src
COPY --from=builder /app/dist ./dist
COPY database ./database
COPY public ./public
RUN echo '{"compilerOptions":{"outDir":"dist"}}' > tsconfig.json

EXPOSE 1337

CMD ["pnpm", "start"]
