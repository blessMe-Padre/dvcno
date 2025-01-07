const getEventsBySlug = async (slug) => {
    try {
        const res = await fetch('https://localhost:3000/api/events/');
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        const event = result.data.find(event => event.slug === slug);
        return event;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getEventsBySlug;