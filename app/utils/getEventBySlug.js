const getEventsBySlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/`);

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