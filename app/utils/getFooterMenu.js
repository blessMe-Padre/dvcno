const getFooterMenu = async () => {
    try {
        // https://inside-dev.ru/api/popup-menu/
        const res = await fetch('https://inside-dev.ru/api/popup-menu/', {
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

export default getFooterMenu;