import styles from "./style.module.css";
import Link from "next/link";

export default function Breadcrumbs({ title }) {

    return (
        <nav className={styles.nav}>
            <Link href="/">
                Главная
            </Link>
            <span className={styles.separator}></span>
            <span>{title}</span>
        </nav>
    )
}
