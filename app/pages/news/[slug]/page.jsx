import getAllNewsBySlug from '@/app/utils/getAllNewsSlugs';
import { notFound } from 'next/navigation';

// На данный момент страницы генерируются по SSR
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

// https://www.youtube.com/watch?v=2svgA1O4fO0&ab_channel=ITMATEPK

export const metadata = {
    title: "Новости",
    description: "Описание новостей",
};
export default async function EventPage({ params }) {
    const { slug } = await params;
    const page = await getAllNewsBySlug(slug);

    if (!page) {
        // notFound();
    }

    return (
        <>
            <div>Динамический роути</div>
            <div>Страница с слагом {slug}</div>
            <div>{page ? JSON.stringify(page) : 'Событие не найдено'}</div>
        </>
    );
}

// export async function generateStaticParams() {
//     const posts = await fetch('http://localhost:3000/api/news').then((res) => res.json());
//     console.log(posts)
//     const res = posts.map((post) => ({
//         slug: post.title,
//     }))
//     console.log(res);

//     return res;
// }

