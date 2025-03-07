const getAwards = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/awards/`, {
            next: { revalidate: 10 }
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default getAwards;