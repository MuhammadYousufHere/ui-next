/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/material', '@mui/icons-material'],
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
      preventFullImport: true
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
      preventFullImport: true
    }
  },
  webpack: config => {
    config.resolve.alias.canvas = false
    return config
  },
  images: {
    domains: ['localhost:3000'],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig
