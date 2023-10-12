/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        domains: ['res.cloudinary.com', '127.0.0.1','backendcam-64bo4zjn.b4a.run']
    },
}

module.exports = nextConfig
