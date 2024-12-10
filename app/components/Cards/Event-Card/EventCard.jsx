import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function EventCard() {
    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <div>
                    <div>18</div>
                    <div>
                        <p>Января 2023</p>
                        <p>Сб</p>
                    </div>
                </div>

                <div>Начало в 11:00</div>
            </header>

            <div className={styles.image_wrapper}>

            </div>



        </div>
    )
}
