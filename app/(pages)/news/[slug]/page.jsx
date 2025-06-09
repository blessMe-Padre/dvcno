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

  return (
    <PageContent page={page} />
  );
}


