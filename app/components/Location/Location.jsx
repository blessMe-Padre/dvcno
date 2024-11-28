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

            <select className={styles.select}>
                <option value="">Владивосток</option>
                <option value="">Находка</option>
                <option value="">Партизанск</option>
            </select>
        </div>
    )
}
