const getMainSliders = async () => {
    try {
        const res = await fetch('https://inside-dev.ru/api/main-sliders', {
            next: { revalidate: 10 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getMainSliders;