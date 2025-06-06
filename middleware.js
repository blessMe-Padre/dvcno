// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const lang = request.cookies.get('language')?.value;

    if (!lang) {
        const response = NextResponse.next();
        response.cookies.set('language', 'ru', {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 год
        });
        return response;
    }

    return NextResponse.next();
}
