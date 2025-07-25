const getEvents = async (count, enabled) => {
    count = count ? `items_per_page=${count}&` : '';
    enabled = enabled === 'true' ? 'false' : 'true';

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/?${count}only_active=${enabled}`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

export default getEvents;
