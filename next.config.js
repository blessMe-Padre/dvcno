/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // Отключаем встроенную i18n, так как будем управлять языками сами
    i18n: false
}

module.exports = nextConfig 