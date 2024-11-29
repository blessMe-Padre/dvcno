
import Image from "next/image";
import styles from "./style.module.css";

export default function CatalogButton({ setPanel, setPanelBtn }) {

    return (
        <button
            className={styles.button}
        >
            <Image
                aria-hidden
                src="/icons/burger.svg"
                alt="пин"
                width={20}
                height={17}
            />
            <span className="">menu</span>
        </button>
    )
}
