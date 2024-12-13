import Image from "next/image";
import getEventsBySlug from '@/app/utils/getEventBySlug';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import styles from "./style.module.css";

// На данный момент страницы генерируются по SSR
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://www.youtube.com/watch?v=2svgA1O4fO0&ab_channel=ITMATEPK

export const metadata = {
  title: "Событие",
  description: "Описание события",
};
export default async function EventPage({ params }) {
  const { slug } = await params;
  const page = await getEventsBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className='container'>
      <Breadcrumbs title={page.title} />
      <h1 className={styles.title}>{page.title}</h1>
      <div>
        <div className="flex gap-10">
          <Image
            src={'/icons/calendar.svg'}
            alt={"дата"}
            width={25}
            height={25}
          />
          <div className={styles.day}>{page.date_event.day_d}</div>
          <div>
            <p>{page.date_event.month_F[1]} {page.date_event.year_Y}</p>
            <p className={styles.week_day}>{page.date_event.day_D[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  try {
    const postsResponse = await fetch('http://localhost:3000/api/events');
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
