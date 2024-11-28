
import Image from "next/image";
import styles from "./socialicon.module.css";
import Link from "next/link";

export default function SocialIcon({ color = 'gray', href, icon, alt, width, height }) {
    return (
        <Link href={href} className={`${styles.link} ${styles[color]}`}>
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
