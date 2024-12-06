'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Card from "../../Cards/Card/Card";
import getEduPages from '../../../utils/getEduPages';

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEduPages();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Дальневосточный центр<br /> непрерывного образования - это</h2>
                <div>
                    <Image
                        alt="декор"
                        src="/decor/image-1.png"
                        width={250}
                        height={150}
                    />
                </div>
            </div>

            <ul className={styles.list}>
                {data.map((item) => (
                    <li key={item.id}>
                        <Card
                            image={item.image}
                            description={item.description}
                            link={item.link}
                        />

                    </li>
                ))}
            </ul>

        </section>
    )
}
