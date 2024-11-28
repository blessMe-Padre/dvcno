
import Image from "next/image";
import styles from "./vdsButton.module.css";

export default function VdsButton() {
    return (
        <button className={styles.button}>
            <Image
                aria-hidden
                src="/icons/eyes.svg"
                alt="пин"
                width={21}
                height={16}
            />
            <p className="">Версия для слабовидящих</p>
        </button>
    )
}
