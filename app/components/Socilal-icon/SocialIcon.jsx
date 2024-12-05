
import Image from "next/image";
import styles from "./socialicon.module.css";
import Link from "next/link";

export default function SocialIcon({ color, href, icon, alt, width, height }) {
    let addClass;
    switch (color) {
        case 'gray':
            addClass = `${styles.gray} ${styles.gray_hover}`;
            break;
        case 'purple':
            addClass = `${styles.purple} ${styles.purple_hover}`;
            break;
        default:
            color = styles.gray;
            break;
    }

    return (
        <Link
            href={href}
            className={`${styles.link} ${addClass} `}>
            <Image
                aria-hidden
                src={icon}
                alt={alt}
                width={width}
                height={height}
            />
        </Link >
    )
}
