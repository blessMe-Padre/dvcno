import getNewsBySlug from '@/app/utils//getNewsBySlug';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import LinkButton from '@/app/components/Link/LinkButton';
import Image from 'next/image';
import styles from './style.module.css';


export const metadata = {
  title: "Новости",
  description: "Описание новости",
};

export default async function NewsPage({ params }) {

  const { slug } = await params;
  const page = await getNewsBySlug(slug);

  const sanitizedContent = page.content || '';
  if (!page) {
    notFound();
  }


  return (
    <div className='container'>
      <Breadcrumbs title={page.title} />

      <h1 className={styles.title}>{page.title}</h1>

      <header className={styles.header}>

        <div className={styles.data_wrapper}>
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

        <div className={styles.item}>
          <Image
            src={'/icons/clock.svg'}
            alt={"время"}
            width={25}
            height={25}
          />
          <div className={styles.tag}>Время чтения: {page.time_to_read}</div>
        </div>
      </header>

      <div className={styles.image_wrapper}>
        <Image
          src={page.thumbnail ? page.thumbnail : '/placeholder/placeholder.png'}
          alt={page.title}
          width={1460}
          height={723}
          className={styles.image}
        />
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>

    </div>
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
