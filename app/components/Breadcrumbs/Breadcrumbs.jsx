import styles from "./style.module.css";
import Link from "next/link";

export default function Breadcrumbs({ slug, link, title }) {

    return (
        <nav className={styles.nav}>
            <Link href="/">
                Главная
            </Link>
            <span className={styles.separator}></span>
            {slug && (
                <>
                    <Link href={`/${link}/`}>
                        {slug}
                    </Link>
                    <span className={styles.separator}></span>
                </>
            )}
            <span className={styles.text}>{title}</span>
        </nav>
    );
}