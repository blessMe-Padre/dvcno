import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

import City from "../Location/Location";
import VdsButton from "../Vds/VdsButton";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.row}>
                <div className={styles.item_row}>
                    <Link href="/" aria-label="Главная">
                        <Image
                            aria-hidden
                            src="/logo.svg"
                            alt="Логотип"
                            width={86}
                            height={86}
                        />
                    </Link>


                    <p className={styles.p}>Дальневосточный центр непрерывного образования</p>
                </div>

                <div className={styles.item_row}>
                    <City />
                    <VdsButton />
                </div>
            </div>
        </div>
    )
}
