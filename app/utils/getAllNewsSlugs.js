const getAllNewsSlug = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/news/`);
    const result = await res.json();
    const events = result.data.map(news => news.slug);
    return events;
}
export default getAllNewsSlug;