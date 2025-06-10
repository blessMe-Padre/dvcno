// Эта функция для получение данных с сервера http://134.0.118.139/api/v1/...

const fetchApiServerData = async (route) => {
  try {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_SERVER}/api/v1`;

    const res = await fetch(`${baseUrl}/${route}`, {
      next: { revalidate: 600 },
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

export default fetchApiServerData;