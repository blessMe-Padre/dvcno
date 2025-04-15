import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Хардкодный адрес API для тестирования
const BASE_API_URL = "http://134.0.118.139/api/v1/dictionaries/headers_pages";
// const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_API_PATH}`;

// Типы секций для переводов
const TRANSLATION_SECTIONS = {
  HEADERS: "headers_pages",
  BUTTONS: "buttons_pages",
};

const useTranslationsStore = create(
  persist(
    (set, get) => ({
      translations: {}, // Объект для хранения переводов всех секций
      isLoading: false,
      error: null,
      currentLang: "ru",
      isHydrated: false,

      setLanguage: (lang) => {
        set({ currentLang: lang });
        document.cookie = `language=${lang}; path=/; max-age=31536000`;
        document.documentElement.lang = lang;
      },

      fetchTranslations: async () => {
        try {
          // Если все необходимые переводы уже загружены, возвращаем их
          const currentTranslations = get().translations;
          if (Object.keys(currentTranslations).length > 0) {
            return currentTranslations;
          }

          set({ isLoading: true, error: null });

          // Для тестирования делаем запрос только к одному эндпоинту
          const response = await fetch(BASE_API_URL, {
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          });

          if (!response.ok) {
            throw new Error("Failed to fetch translations");
          }

          const data = await response.json();

          // Формируем объект с переводами
          const translationsObject = {
            [TRANSLATION_SECTIONS.HEADERS]: data,
          };

          set({
            translations: translationsObject,
            isLoading: false,
          });

          return translationsObject;
        } catch (error) {
          console.error("Error fetching translations:", error);
          set({ error: error.message, isLoading: false });
          return null;
        }
      },

      // Универсальная функция получения перевода
      getTranslation: (key, section) => {
        const state = get();
        const { translations, currentLang } = state;

        if (!translations?.[section]?.data?.[key]) {
          return key;
        }

        const translation =
          translations[section].data[key][currentLang] ||
          translations[section].data[key]["ru"] ||
          key;

        return translation;
      },

      initialize: (initialData) => {
        set({
          translations: initialData.translations || {},
          currentLang: initialData.currentLang,
          isHydrated: true,
        });
      },

      clearCache: () => {
        set({ translations: {} });
      },
    }),
    {
      name: "translations-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        translations: state.translations,
        currentLang: state.currentLang,
      }),
    }
  )
);

// Экспортируем store и типы секций
export { TRANSLATION_SECTIONS };
export default useTranslationsStore;
