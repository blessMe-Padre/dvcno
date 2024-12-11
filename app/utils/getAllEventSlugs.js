const getAllEventSlugs = async () => {
    const res = await fetch('http://localhost:3000/api/events/');
    const result = await res.json();
    const events = result.data.map(event => event.slug);
    return events;
}
export default getAllEventSlugs;