import Image from "next/image";
import styles from "./style.module.css";

export default function EventCard(
    {
        title,
        description,
        thumbnail,
        date,
        month,
        year,
        week,
        hour,
        minute
    }
) {
    const domain = process.env.NEXT_PUBLIC_API_SERVER;
    const sanitizedContent = description || '';

    return (
        <div className={`${styles.card} anim_hover_card`}>
            <header className={styles.header}>
                <div className="flex">
                    <div className={styles.day}>{date}</div>
                    <div>
                        <p>{month} {year}</p>
                        <p className={styles.week_day}>{week}</p>
                    </div>
                </div>

                <div className={styles.header_tag}>Начало в {hour}:{minute}</div>
            </header>

            <div className={styles.image_wrapper}>
                <Image
                    src={thumbnail ? domain + thumbnail : '/placeholder/placeholder.png'}
                    alt="Фото мероприятия"
                    width={605}
                    height={300}
                    className={`${styles.image} dsv-image`}
                />
            </div>

            <div className={styles.footer}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.description}
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />
            </div>
        </div>
    )
}
