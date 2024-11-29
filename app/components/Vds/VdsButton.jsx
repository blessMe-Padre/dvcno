
import Image from "next/image";
import styles from "./vdsButton.module.css";

export default function VdsButton({ setPanel, setPanelBtn }) {
    const handleClick = () => {
        setPanel(true);
        setPanelBtn(false);
        speechSynthesis.speak(new SpeechSynthesisUtterance("версия сайта для слабовидящих "));
    }

    return (
        <button
            className={styles.button}
            onClick={handleClick}
        >
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
