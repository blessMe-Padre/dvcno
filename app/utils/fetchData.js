const fetchData = async (route) => {
  try {
    // const baseUrl =
    //   process.env.NEXT_PUBLIC_URL_FRONT || 'https://inside-dev.ru';
    const baseUrl =
      process.env.NEXT_PUBLIC_API_DOMAIN || 'https://inside-dev.ru';
    const res = await fetch(`${baseUrl}/api/${route}/`, {
      next: { revalidate: 10 },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      if (res.status === 502) {
        console.error('Сервер временно недоступен');
        return [];
      }
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Ошибка при загрузке:', error);
    return [];
  }
};

export default fetchData;