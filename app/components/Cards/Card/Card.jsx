import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <Image
                    // src="/about/image-1.png"
                    src="/placeholder/placeholder.png"
                    alt="фото"
                    width={410}
                    height={195}
                    className={styles.img}
                />
            </div>
            <Link href="#ref" className={styles.card_footer}>
                <div>
                    <p className={styles.text}>Начальная школа – детский сад «Классическая европейская прогимназия» (НШДС "КЕП")</p>
                    <div className={styles.link}>
                        <Image
                            src="/icons/arrow__card.svg"
                            alt="перейти"
                            width={20}
                            height={20}
                            className={styles.link_img}
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}
