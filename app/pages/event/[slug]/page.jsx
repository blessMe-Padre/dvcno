import getEventsBySlug from '@/app/utils/getEventBySlug';
import getAllEventSlugs from '@/app/utils/getAllEventSlugs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// На данный момент страницы генерируются по SSR
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

export const metadata = {
    title: "Событие",
    description: "Описание события",
};

export async function generateStaticParams() {
    const slugs = await getAllEventSlugs();
    console.log(slugs);

    return slugs.map((post) => ({
        slug: post.slug,
    }))
}

export default async function EventPage({ params }) {
    const { slug } = await params;
    const page = await getEventsBySlug(slug);

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
