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

// Временные данные для переводов
const initialTranslations = {
  [TRANSLATION_SECTIONS.HEADERS]: {
    data: {
      "about": {
        "ru": "О центре"
      },
      "activities": {
        "ru": "Деятельность"
      },
      "additional_education": {
        "ru": "Дополнительное образование"
      },
      "additional_programs_list": {
        "ru": "Перечень реализуемых дополнительных программ"
      },
      "anpoo_dvcno": {
        "ru": "АНПОО «ДВЦНО»"
      },
      "contacts": {
        "ru": "Контакты"
      },
      "departments": {
        "ru": "Структурные подразделения"
      },
      "documents_to_enter": {
        "ru": "Документы, необходимые для поступления"
      },
      "dvcno_awards": {
        "ru": "Награды ДВЦНО"
      },
      "dvcno_is": {
        "ru": "Дальневосточный центр непрерывного образования - это"
      },
      "events": {
        "ru": "События"
      },
      "gallery": {
        "ru": "Галерея"
      },
      "high_school": {
        "ru": "Отделение Лицейских классов"
      },
      "info_about_organization": {
        "ru": "Сведения об образовательной организации"
      },
      "info_security": {
        "ru": "Информационная безопасность"
      },
      "local_regulations": {
        "ru": "Локальные акты"
      },
      "lyceum_department": {
        "ru": "Отделение Лицейских классов"
      },
      "main_goals": {
        "ru": "Главные цели и задачи"
      },
      "news": {
        "ru": "Новости"
      },
      "partners": {
        "ru": "Наши партнеры"
      },
      "preschool_groups": {
        "ru": "Дошкольные группы"
      },
      "primary_school": {
        "ru": "Начальное общее образование"
      },
      "reception_class": {
        "ru": "Подготовительный класс"
      },
      "reception_of_documents": {
        "ru": "Прием документов начинается"
      },
      "strategy": {
        "ru": "Стратегия развития"
      },
      "vocational_education_signup": {
        "ru": "Производит прием на обучение"
      },
      "why_choose_us": {
        "ru": "Почему выбирают нас"
      }
    }
  }
};

const useTranslationsStore = create(
  persist(
    (set, get) => ({
      translations: initialTranslations, // Используем начальные данные
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
          return initialTranslations; // В случае ошибки возвращаем начальные данные
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
          translations: initialData.translations || initialTranslations,
          currentLang: initialData.currentLang || "ru",
          isHydrated: true,
        });
      },

      clearCache: () => {
        set({ translations: initialTranslations });
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
