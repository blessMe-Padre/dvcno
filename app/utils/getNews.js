const getNews = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/news/`, {
            next: { revalidate: 10 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result.data;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getNews;