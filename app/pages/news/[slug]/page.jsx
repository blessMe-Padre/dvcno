import getNewsBySlug from '@/app/utils//getNewsBySlug';

export const metadata = {
    title: "Новости",
    description: "Описание новости",
};
export default async function NewsPage({ params }) {
    const { slug } = await params;
    const page = await getNewsBySlug(slug);
    
    if (!page) {
        notFound();
    }

    return (
        <>
            <div>Динамический роути</div>
            <div>Страница с слагом {slug}</div>
            <div>{page ? JSON.stringify(page) : 'Событие не найдено'}</div>
        </>
    );
}



export async function generateStaticParams() {
  try {
    const postsResponse = await fetch('http://localhost:3000/api/news');
    if (!postsResponse.ok) {
      throw new Error(`HTTP error! status: ${postsResponse.status}`);
    }

    const posts = await postsResponse.json(); 
    if (!posts.data) {
        throw new Error("API response does not contain data property"); 
    }
    const slugs = posts.data.map((post) => ({ slug: post.slug })); 

    return slugs;
  } catch (error) {
    console.error('Ошибка получения данных:', error); 
    return []; 
  }
}
