import React from 'react';

const ALLOWED_TAGS = new Set([
    'div', 'span', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'img',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
]);

const ALLOWED_ATTRS = new Set(['href', 'src', 'alt', 'title', 'class', 'style']);

/**
 * Простая функция парсинга CSS-строки в объект стилей для React
 */
function parseStyleString(styleString) {
    return styleString.split(';').reduce((styleObj, declaration) => {
        const [property, value] = declaration.split(':').map(str => str.trim());
        if (!property || !value) return styleObj;
        const camelCased = property.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        styleObj[camelCased] = value;
        return styleObj;
    }, {});
}

/**
 * Безопасно конвертирует HTML-строку в React-элементы.
 * При SSR возвращает пустой массив, чтобы избежать ошибок "document not defined".
 */
export function insertSafeContent(html) {
    // На сервере DOM недоступен
    if (typeof document === 'undefined') {
        return [];
    }

    const template = document.createElement('template');
    template.innerHTML = html || '';

    // Удаляем опасные теги
    template.content.querySelectorAll('script,style,iframe').forEach(el => el.remove());

    const convertNode = (node, key) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node;
            const tag = el.tagName.toLowerCase();

            // Если тег не из белого списка — рендерим только детей
            if (!ALLOWED_TAGS.has(tag)) {
                return Array.from(el.childNodes)
                    .flatMap((child, i) => convertNode(child, `${key}-${i}`));
            }

            // Собираем пропсы из разрешённых атрибутов
            const props = { key };
            Array.from(el.attributes).forEach(attr => {
                const name = attr.name;
                if (!ALLOWED_ATTRS.has(name)) return;

                if (name === 'class') {
                    props.className = attr.value;
                } else if (name === 'style') {
                    try {
                        props.style = parseStyleString(attr.value);
                    } catch (e) {
                        console.warn('Ошибка парсинга стиля:', attr.value, e);
                    }
                } else {
                    props[name] = attr.value;
                }
            });

            // Конвертируем детей
            const children = Array.from(el.childNodes).map((child, i) =>
                convertNode(child, `${key}-${i}`)
            );

            return React.createElement(tag, props, children);
        }
        return null;
    };

    return Array.from(template.content.childNodes).map((node, i) => convertNode(node, i));
}
