import Image from "next/image";
import styles from "./style.module.css";
import Card from "../../Cards/Card/Card";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Дальневосточный центр<br /> непрерывного образования - это</h2>
                <div>
                    <Image
                        alt="декор"
                        src="/decor/image-1.png"
                        width={250}
                        height={150}
                    />
                </div>
            </div>

            <ul className={styles.list}>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
            </ul>

        </section>
    )
}
