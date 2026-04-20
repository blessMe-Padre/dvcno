import Image from "next/image";
import styles from "./style.module.css";
import useLangStore from "@/app/store/languageStore";

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
        minute,
        translatedDays,
        translatedMonths
    }
) {
    const { lang } = useLangStore();
    const domain = process.env.NEXT_PUBLIC_API_SERVER;
    const sanitizedContent = description || '';

    return (
        <div className={`${styles.card} anim_hover_card`}>
            <header className={styles.header}>
                <div className="flex">
                    <div className={styles.day}>{date}</div>
                    <div>
                        <p>
                            {
                                lang === 'ru' ? `${month} ${year}` : `${translatedMonths[month]} ${year}`
                            }
                        </p>
                        <p className={styles.week_day}>{
                            lang === 'ru' ? week : translatedDays[week]
                        }</p>
                    </div>
                </div>

                <div className={styles.header_tag}>{lang === 'ru' ? 'Начало в' : 'Start at'} {hour}:{minute}</div>
            </header>

            <div className={styles.image_wrapper}>
                <Image
                    src={thumbnail ? domain + thumbnail : '/placeholder/placeholder.svg'}
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
