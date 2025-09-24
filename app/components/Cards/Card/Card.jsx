import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { insertSafeContent } from "@/app/utils/insertSafeContent";

export default function Card({ image, link = '#', description, }) {

    return (
        <div className={`${styles.card} anim_hover_card`}>
            <div className={styles.image_wrapper}>
                <Image
                    src={image ? process.env.NEXT_PUBLIC_API_SERVER + image : '/placeholder/placeholder.svg'}
                    alt="фото"
                    fill
                    sizes="100%"
                    className={`${styles.img} dsv-image`}
                />
            </div>
            <Link href={link} className={styles.card_footer}>
                <div className={styles.card_link_wrapper}>
                    <div className={styles.text}>{insertSafeContent(description)}</div>
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
