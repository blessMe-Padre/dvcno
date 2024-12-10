const getAwards = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/awards/', {
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