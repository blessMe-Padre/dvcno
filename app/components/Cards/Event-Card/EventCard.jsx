import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

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
    return (
        <div className={styles.card}>
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
                    src={thumbnail ? thumbnail : '/placeholder/placeholder.png'}
                    alt="Фото мероприятия"
                    width={605}
                    height={300}
                    className={styles.image}
                />
            </div>

            <div className={styles.footer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>



        </div>
    )
}
