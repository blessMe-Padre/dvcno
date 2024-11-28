import Image from "next/image";
import styles from "./location.module.css";
export default function City() {
    return (
        <div className={styles.location}>
            <Image
                aria-hidden
                src="/icons/pin.svg"
                alt="пин"
                width={16}
                height={21}
            />
            <p className={styles.city}>Владивосток</p>
        </div>
    )
}
