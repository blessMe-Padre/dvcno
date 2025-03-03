const getAllNewsSlug = async () => {
    const res = await fetch('https://inside-dev.ru/api/news/');
    const result = await res.json();
    const events = result.data.map(news => news.slug);
    return events;
}
export default getAllNewsSlug;