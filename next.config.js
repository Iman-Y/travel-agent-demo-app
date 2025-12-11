/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  // Only enable static export for GitHub Pages deployment
  ...(isGithubActions && {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
  }),
  
  images: {
    // Only disable optimization for static export
    unoptimized: isGithubActions,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  
  // Configure base path only for GitHub Pages
  basePath: isGithubActions ? '/travel-agent-demo-app' : '',
  assetPrefix: isGithubActions ? '/travel-agent-demo-app/' : '',
}

module.exports = nextConfig
