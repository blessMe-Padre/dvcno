import Image from "next/image";
import styles from "./style.module.css";
import { DivisionCard } from "@/app/components";

export default function Division({ divisionData, lang }) {
    // console.log(divisionData[1]?.content?.[lang]);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} title`}>{divisionData[0]?.content?.[lang]}</h2>
                <ul className={styles.list}>
                    {divisionData[1]?.content?.[lang]?.map((item, index) => (
                        <li key={index}>
                            <DivisionCard divisionData={item} lang={lang} />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
