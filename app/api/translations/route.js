import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Здесь должна быть логика получения переводов из вашего источника данных
        // Например, из базы данных или внешнего API
        const translations = {
            data: {
                headers_pages: {
                    home: {
                        ru: 'Главная',
                        en: 'Home',
                        ch: '主页'
                    },
                    about: {
                        ru: 'О нас',
                        en: 'About',
                        ch: '关于我们'
                    },
                    // ... другие переводы
                },
                system_messages: {
                    error: {
                        ru: 'Ошибка',
                        en: 'Error',
                        ch: '错误'
                    },
                    // ... другие системные сообщения
                },
                // ... другие секции
            }
        };

        return NextResponse.json(translations);
    } catch (error) {
        console.error('Error fetching translations:', error);
        return NextResponse.json(
            { error: 'Failed to fetch translations' },
            { status: 500 }
        );
    }
} 