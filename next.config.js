/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['https://avatars.githubusercontent.com']
  }
}


module.exports = nextConfig
