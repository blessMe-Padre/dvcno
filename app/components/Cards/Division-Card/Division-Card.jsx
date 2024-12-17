import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function DivisionCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <Image
                    aria-hidden
                    src="/division/image-1.jpg"
                    alt="Изображение"
                    width={706}
                    height={432}
                    className={`${styles.image} dsv-image`}
                />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>Начальная общеобразовательная школа-детский сад «Восточная школа»</h3>
                <p className={styles.address}>Приморский край, г. Владивосток, ул. Десятая д.10</p>
                <p className={styles.week}> 8:30 - 18:00 (5-дневная учебная неделя)</p>

                <div>
                    <div className={styles.link_wrapper}>
                        <a href="#" className={styles.link}>
                            <div className={`${styles.icon_wrapper}`}>
                                <Image
                                    src="/icons/wold.svg"
                                    alt="world"
                                    width={23}
                                    height={23}
                                    className={`${styles.icon_image}`}
                                />
                            </div>
                            <span>vostok.vvsu.ru</span>
                        </a>
                        <a href="tel:+74242404185" className={styles.link}>
                            <div className={`${styles.icon_wrapper}`}>
                                <Image
                                    src="/icons/phone.svg"
                                    alt="world"
                                    width={23}
                                    height={23}
                                    className={`${styles.icon_image}`}
                                />
                            </div>
                            <span>240-41-85</span>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <span>Перейти на сайт</span>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
