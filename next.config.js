const { experimental_taintObjectReference } = require('react')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    }
}


module.exports = nextConfig
