

import Image from "next/image";
import styles from "./style.module.css";

export default function Why() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>почему выбирают нас</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <h3 className={styles.subtile}>Компе&shy;тентность педагогических кадров</h3>
                        <p className={styles.text}>Педагоги центра строят свою работу, опираясь на индивидуальные способности ребенка, отслеживая результаты контрольных срезов, тестов</p>
                        <Image
                            src="/why/image-1.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={styles.item}>
                        <Image
                            src="/why/main-bg.png"
                            alt="Компетентность педагогических кадров"
                            width={460}
                            height={550}
                            className={`${styles.main_img} dsv-image`}
                        />
                        <Image
                            src="/why/main-bg-mobile.png"
                            alt="Компетентность педагогических кадров"
                            width={320}
                            height={208}
                            className={`${styles.main_img_mobile} dsv-image`}
                        />
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.subtile}>Материально-техническое оснащение</h3>
                        <p className={styles.text}>Наши учебные кабинеты оборудованы в соответствии
                            с современными образовательными стандартами</p>
                        <Image
                            src="/why/image-2.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.subtile}>Качественное образование</h3>
                        <p className={styles.text}>Главная задача АНПОО «ДВЦНО» – обеспечить качество, что в полной мере совпадает с представлением большинства родителей</p>
                        <Image
                            src="/why/image-3.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.subtile}>Территориальное расположение образовательных комплексов</h3>
                        <p className={styles.text}>Единый комплекс зданий и территорий, расположенных в одном месте обеспечивает удобство и доступность образовательных услуг</p>
                        <Image
                            src="/why/image-4.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}
