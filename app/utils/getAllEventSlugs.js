const getAllEventSlugs = async () => {
    const res = await fetch('https://localhost:3000/api/events/');
    const result = await res.json();
    const events = result.data.map(event => event.slug);
    return events;
}
export default getAllEventSlugs;