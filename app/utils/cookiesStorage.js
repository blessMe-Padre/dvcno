
const UTCDate = new Date(new Date().setMonth(new Date().getMonth() + 1)).toUTCString();

export const cookiesStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value};expires=${UTCDate}`;
    }
}