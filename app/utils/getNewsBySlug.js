
const getNewsBySlug = async (slug) => {
    // try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/news/`);
    //     if (!res.ok) {
    //         throw new Error(`Ошибка HTTP: ${res.status}`);
    //     }
    //     const result = await res.json();
    //     const news = result.data.find(news => news.slug === slug);
    //     return news;
    // } catch (error) {
    //     console.error("Ошибка при загрузке:", error);
    //     return [];
    // }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/news/${slug}`,
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

export default getNewsBySlug;