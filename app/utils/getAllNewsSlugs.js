
const getAllNewsBySlug = async (slug) => {
    try {
        const res = await fetch('http://localhost:3000/api/news/');
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        const event = result.data.find(event => event.title === title);
        return event;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getAllNewsBySlug;