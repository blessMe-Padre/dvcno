const getEventsBySlug = async (slug) => {
    // try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/`);

    //     if (!res.ok) {
    //         throw new Error(`Ошибка HTTP: ${res.status}`);
    //     }
    //     const result = await res.json();
    //     const event = result.data.find(event => event.slug === slug);
    //     return event;
    // } catch (error) {
    //     console.error("Ошибка при загрузке:", error);
    //     return [];
    // }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/${slug}`,
            { next: { revalidate: 60 } } // Кеширование на 60 сек
        );

        if (!res.ok) {
            throw new Error(`Событие не найдено (HTTP ${res.status})`);
        }

        const result = await res.json();

        // Проверяем, что данные есть и они в ожидаемом формате
        if (!result.data) {
            throw new Error("Некорректный формат данных события");
        }

        return result.data;
    } catch (error) {
        console.error("Ошибка при загрузке события:", error);
        return null; // Возвращаем null вместо undefined или []
    }
};

export default getEventsBySlug;