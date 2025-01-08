const getAllEventSlugs = async () => {
    const res = await fetch(`${process.env.NEXT_LOCAL_DOMEN}/api/events/`);
    const result = await res.json();
    const events = result.data.map(event => event.slug);
    return events;
}
export default getAllEventSlugs;