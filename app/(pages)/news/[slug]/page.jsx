import getNewsBySlug from '@/app/utils/getNewsBySlug';
import PageContent from './PageContent';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getNewsBySlug(slug);

  if (!page) return notFound();

  // Получаем основное изображение для OG
  const ogImage = page.images && page.images.length > 0
    ? `${process.env.NEXT_PUBLIC_API_SERVER}${page.images[0].slide}`
    : '/placeholder/placeholder.svg';

  // Формируем описание из контента
  const description = page.content?.ru
    ? page.content.ru.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
    : 'Новости ДВЦНО - актуальная информация о событиях и достижениях центра';

  // Форматируем дату для OG
  const publishedTime = page.date_event?.date_iso || page.date_from;

  return {
    title: `ДВЦНО | ${page.title?.ru || page.title}`,
    description: description,

    // Open Graph мета-теги
    openGraph: {
      title: page.title?.ru || page.title,
      description: description,
      type: 'article',
      url: `/news/${slug}`,
      siteName: 'ДВЦНО',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title?.ru || page.title,
        },
      ],
      publishedTime: publishedTime,
      modifiedTime: page.updated_at || publishedTime,
      authors: ['ДВЦНО'],
      section: 'Новости',
      tags: page.subtitle ? [page.subtitle] : ['Новости', 'ДВЦНО'],
    },

    // Дополнительные мета-теги
    keywords: ['ДВЦНО', 'новости', 'образование', page.subtitle].filter(Boolean).join(', '),
    authors: [{ name: 'ДВЦНО' }],
    category: 'Новости',

    // Структурированные данные для поисковых систем
    alternates: {
      canonical: `/news/${slug}`,
    },
  };
}

export default async function NewsPage({ params }) {

  const { slug } = await params;
  const page = await getNewsBySlug(slug);

  return (
    <PageContent page={page} />
  );
}


export async function generateStaticParams() {
  try {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/news/`, {
      next: { revalidate: 10 } // Кешируем запрос на 60 секунд
    });

    if (!postsResponse.ok) {
      throw new Error(`HTTP error! status: ${postsResponse.status}`);
    }

    const posts = await postsResponse.json();
    if (!posts.data) {
      throw new Error("API response does not contain data property");
    }
    const slugs = posts?.data.map((post) => ({ slug: post.slug }));
    return slugs;
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    return [];
  }
}



