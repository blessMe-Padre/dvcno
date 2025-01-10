const getMenu = async () => {
    try {
        // http://localhost:3000/api/menu/
        const res = await fetch('http://134.0.118.139/api/v1/menus/menu_header?lang=ru', {
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