import getEventsBySlug from '@/app/utils/getEventBySlug';
import PageContent from './PageContent';

export const revalidate = 10;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const page = await getEventsBySlug(slug);
  return {
    title: page?.title ?? "Мероприятие",
    description: page?.description ?? "Описание",
  }
}

export default async function EventPage({ params }) {
  const { slug } = params;
  const page = await getEventsBySlug(slug);

  return (
    <PageContent page={page} />
  );
}

export async function generateStaticParams() {
  try {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/events/`);

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

