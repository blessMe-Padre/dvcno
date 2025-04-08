import { NextResponse } from 'next/server'
import { getDefaultLanguage } from '@/app/utils/translations'

export function middleware(request) {
    const response = NextResponse.next()
    
    // Получаем язык из cookie
    const userLang = request.cookies.get('language')?.value || getDefaultLanguage()
    
    // Добавляем язык в заголовки
    response.headers.set('x-user-language', userLang)
    
    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 