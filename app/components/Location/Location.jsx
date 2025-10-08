import Image from "next/image";
import styles from "./location.module.css";
import useLangStore from '@/app/store/languageStore';
export default function City() {
    const { lang } = useLangStore();

    const cityText = lang === 'ru' ? 'Владивосток' : lang === 'en' ? 'Vladivostok' : 'Vladivostok';
    return (
        <div className={styles.location}>
            <Image
                aria-hidden
                src="/icons/pin.svg"
                alt="пин"
                width={16}
                height={21}
            />
            <p className={styles.city}>{cityText}</p>
        </div>
    )
}
