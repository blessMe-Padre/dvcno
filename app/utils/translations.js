import { dictionary } from './testData'

// Функция для получения перевода
export function getTranslation(key, lang = 'ru', section = 'headers_pages') {
    if (!dictionary?.data?.[section]?.[key]) {
        return key
    }
    return dictionary.data[section][key][lang] || dictionary.data[section][key]['ru'] || key
}

// Функция для получения всех переводов для определенного языка
export function getTranslations(lang = 'ru') {
    return dictionary.data
}

// Функция для получения списка доступных языков
export function getAvailableLanguages() {
    return ['ru', 'en', 'ch']
}

// Функция для получения дефолтного языка
export function getDefaultLanguage() {
    return 'ru'
} 