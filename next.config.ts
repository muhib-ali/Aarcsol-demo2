// next.config.ts
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Aarcsol-demo' : '', // ← Dev mein blank
  images: {
    unoptimized: true,
  },
}

export default nextConfig
