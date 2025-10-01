import Image from "next/image";
import styles from "./style.module.css";
import { DivisionCard, AnimateElement } from "@/app/components";

export default function Division({ divisionData, lang }) {
    console.log(divisionData);

    return (
        <section className={styles.section}>
            <div className="container">
                <AnimateElement element="h2" className={`${styles.title} title`}>
                    {divisionData[0]?.content?.[lang]?.title}
                </AnimateElement>
                <ul className={styles.list}>
                    {divisionData[1]?.content?.[lang]?.map((item, index) => (
                        <AnimateElement element="li" key={index} animationName='fadeUp' animationDelay={index * 50}>
                            <DivisionCard divisionData={item} lang={lang} />
                        </AnimateElement>
                    ))}
                </ul>
            </div>
        </section>
    )
}
