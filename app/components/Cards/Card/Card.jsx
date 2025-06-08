import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Card({ image, link, description, }) {
    return (
        <div className={`${styles.card} anim_hover_card`}>
            <div className={styles.image_wrapper}>
                <Image
                    src={image ? image : '/placeholder/placeholder.svg'}
                    alt="фото"
                    width={410}
                    height={195}
                    className={`${styles.img} dsv-image`}
                />
            </div>
            <Link href={link} className={styles.card_footer}>
                <div className={styles.card_link_wrapper}>
                    <p className={styles.text}>{description}</p>
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
