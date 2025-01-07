const getPartners = async () => {
    try {
        const res = await fetch('https://localhost:3000/api/partners/', {
            next: { revalidate: 10 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке партнеров:", error);
        return [];
    }
};

export default getPartners;
