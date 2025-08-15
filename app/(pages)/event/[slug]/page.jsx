import getEventsBySlug from '@/app/utils/getEventBySlug';
import PageContent from './PageContent';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const page = await getEventsBySlug(slug);

  if (!page) {
    return {
      title: 'ДВЦНО | Событие не найдено',
      description: 'Запрашиваемое мероприятие не найдено',
    };
  }

  // Формируем дату для OG
  const eventDate = page.date_event ?
    `${page.date_event.day_d} ${page.date_event.month_F[1]} ${page.date_event.year_Y}` : '';

  const eventTime = page.date_event ?
    `${page.date_event.time_H}:${page.date_event.time_i}` : '';

  // Формируем полное описание
  const fullDescription = page.description ||
    `Мероприятие ${page.title?.ru || page.title} ${eventDate ? `состоится ${eventDate}` : ''} ${eventTime ? `в ${eventTime}` : ''} ${page.address ? `по адресу: ${page.address}` : ''}`;

  // Формируем URL изображения
  const imageUrl = page.thumbnail ?
    `${process.env.NEXT_PUBLIC_API_SERVER}${page.thumbnail}` :
    '/placeholder/placeholder.svg';

  return {
    title: `ДВЦНО | ${page.title?.ru || page.title}`,
    description: fullDescription,

    // Open Graph метаданные
    openGraph: {
      title: page.title?.ru || page.title,
      description: fullDescription,
      type: 'article',
      url: `/event/${slug}`,
      siteName: 'ДВЦНО',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.title?.ru || page.title,
        },
      ],
      locale: 'ru_RU',
      publishedTime: page.date_event?.date_iso || '',
      authors: ['ДВЦНО'],
      section: 'Мероприятия',
      tags: ['Мероприятие', 'ДВЦНО', 'Образование'],
    },

  };
}

export default async function EventPage({ params }) {
  const { slug } = params;
  const page = await getEventsBySlug(slug);

  if (!page) {
    return (
      <div className="container mb-30">
        <h1>Событие не найдено</h1>
        <p>Попробуйте перезагрузить страницу или вернуться позже.</p>
      </div>
    );
  }
  return <PageContent page={page} />;
}

export async function generateStaticParams() {
  try {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/`, {
      next: { revalidate: 60 } // Кешируем запрос на 60 секунд
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

