import Image from "next/image";
import styles from "./style.module.css";
import { DivisionCard } from "@/app/components";

export default function Division() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="title">структурные подразделения</h2>
                <ul className={styles.list}>
                    <li>
                        <DivisionCard />
                    </li>
                    <li>
                        <DivisionCard />
                    </li>
                </ul>

            </div>
        </section>
    )
}
