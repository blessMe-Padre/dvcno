import Image from "next/image";
import styles from "./style.module.css";
import { DivisionCard } from "@/app/components";

export default function Division({ divisionData }) {

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} title`}>структурные подразделения</h2>
                <ul className={styles.list}>
                    {divisionData.map((item, index) => (
                        <li key={index}>
                            <DivisionCard divisionData={item} />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
