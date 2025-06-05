const getAllEventSlugs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/events/`);
    const result = await res.json();
    const events = result.data.map(event => event.slug);
    return events;
}
export default getAllEventSlugs;