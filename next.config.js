const nextConfig = {
    images: {
        remotePatterns: [
            // Для локальной разработки
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            // Для продакшена
            {
                protocol: 'http',
                hostname: '89.104.67.34',
            },
            // Для API
            {
                protocol: 'http',
                hostname: '134.0.118.139',
            }
        ],
    },
};

export default nextConfig;