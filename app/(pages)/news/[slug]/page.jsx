import getNewsBySlug from '@/app/utils/getNewsBySlug';
import PageContent from './PageContent';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getNewsBySlug(slug);

  if (!page) return notFound();

  return {
    title: `ДВЦНО | ${page.title.ru}`,
    description: page.description || 'Описание новости',
  };
}

export default async function NewsPage({ params }) {

  const { slug } = await params;
  const page = await getNewsBySlug(slug);

  if (!page) {
    return (
      <div className="container mb-30">
        <h1>Новость не найдена</h1>
        <p>Попробуйте перезагрузить страницу или вернуться позже.</p>
      </div>
    );
  }

  return (
    <PageContent page={page} />
  );
}


export async function generateStaticParams() {
  try {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/news/`, {
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



