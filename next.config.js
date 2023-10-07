/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        domains: ['res.cloudinary.com', '127.0.0.1']
    },
}

module.exports = nextConfig
