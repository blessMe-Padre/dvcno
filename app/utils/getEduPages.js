const getEduPages = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/edu-pages/`, {
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

export default getEduPages;