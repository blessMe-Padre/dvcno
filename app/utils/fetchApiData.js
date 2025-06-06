const fetchApiData = async (route) => {
  const apiVersion = '';
  // const apiVersion = 'v1';
  try {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/${apiVersion}`;

    const res = await fetch(`${baseUrl}/${route}`, {
      next: { revalidate: 60 },
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

export default fetchApiData;