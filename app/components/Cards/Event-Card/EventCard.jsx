import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function EventCard() {
    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <div className="flex">
                    <div className={styles.day}>18</div>
                    <div>
                        <p>Января 2023</p>
                        <p className={styles.week_day}>Сб</p>
                    </div>
                </div>

                <div className={styles.header_tag}>Начало в 11:00</div>
            </header>

            <div className={styles.image_wrapper}>
                <Image
                    src="/events/image.jpg"
                    alt="Фото мероприятия"
                    width={605}
                    height={300}
                    className={styles.image}
                />
            </div>

            <h3 className={styles.title}>Всероссийский форум молодых предпринимателей</h3>

            <p className={styles.description}>Федеральное агентство по делам молодежи (Росмолодёжь) совместно
                с департаментом по делам молодёжи...</p>



        </div>
    )
}
