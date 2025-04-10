// Кэш для хранения переводов
let translationsCache = null;

// Функция для получения переводов с API
async function fetchTranslations() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_API_PATH}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    translationsCache = data;
    return data;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return null;
  }
}

// Функция для обновления переводов
export async function updateTranslations() {
  translationsCache = null;
  await fetchTranslations();
}

// Функция для получения перевода
export async function getTranslation(
  key,
  lang = "ru",
  section = "headers_pages"
) {
  if (!translationsCache) {
    await fetchTranslations();
  }

  if (!translationsCache?.data?.[section]?.[key]) {
    return key;
  }

  return (
    translationsCache.data[section][key][lang] ||
    translationsCache.data[section][key]["ru"] ||
    key
  );
}

// Функция для получения всех переводов для определенного языка
export async function getTranslations(lang = "ru") {
  if (!translationsCache) {
    await fetchTranslations();
  }
  return translationsCache?.data || {};
}

// Функция для получения списка доступных языков
export function getAvailableLanguages() {
  return ["ru", "en", "ch"];
}

// Функция для получения дефолтного языка
export function getDefaultLanguage() {
  return "ru";
}
