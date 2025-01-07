const getAllNewsSlug = async () => {
    const res = await fetch('https://localhost:3000/api/news/');
    const result = await res.json();
    const events = result.data.map(news => news.slug);
    return events;
}
export default getAllNewsSlug;