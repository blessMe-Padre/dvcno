const getMenu = async () => {
  try {
    // const apiUrl = getApiUrl();
    const apiUrl = process.env.NEXT_PUBLIC_API_SERVER;
    const res = await fetch(`${apiUrl}/api/v1/menus/`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Ошибка при загрузке меню:', error);
    return [];
  }
};

export default getMenu;
