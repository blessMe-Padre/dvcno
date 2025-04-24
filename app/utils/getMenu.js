import { getApiUrl, isDevelopment } from './environment';

const getMenu = async () => {
    try {
        const apiUrl = getApiUrl();
        
        const res = await fetch(`${apiUrl}/api/menu`, {
            next: { revalidate: 10 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

export default getMenu;