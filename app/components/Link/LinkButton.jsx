
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function LinkButton({ color, href, text }) {
    let addClass;
    switch (color) {
        case 'green':
            addClass = `${styles.green} ${styles.green_hover}`;
            break;
        default:
            color = styles.green;
            break;
    }

    return (
        <Link
            href={href}
            target="_blank"
            className={`${styles.link} ${addClass} `}>
            {text}
            <Image
                src="/icons/arrow-white.png"
                alt={'icon'}
                width={12}
                height={12}
                className={styles.image}
            />
        </Link >
    )
}
