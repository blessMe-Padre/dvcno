
const getNewsBySlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/news/`);
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        const news = result.data.find(news => news.slug === slug);
        return news;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getNewsBySlug;