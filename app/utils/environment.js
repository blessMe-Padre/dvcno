export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const getApiUrl = () => {
    if (isDevelopment) {
        return process.env.NEXT_PUBLIC_URL_FRONT || 'http://localhost:3000';
    }
    return process.env.NEXT_PUBLIC_URL_FRONT || 'https://89.104.67.34';
};

export const getEnvironmentName = () => process.env.NODE_ENV; 