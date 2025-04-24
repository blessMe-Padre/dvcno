"use client";
import { useState, useEffect } from "react";
import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import getEduPages from "@/app/utils/getEduPages";

export default function Page() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getEduPages()
            .then(result => {
                setData(result);
                setLoading(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;


  return (
    <div className="container">
      <Breadcrumbs title={"Обучение"} />
      <h2 className={`title ${styles.title}`}>Обучение</h2>
      <p className={styles.description}>
        Дальневосточный центр непрерывного образования (ДВЦНО) предлагает полный
        цикл образовательных услуг. От дошкольного образования до получения
        специальности (профессиональное обучение) и профессиональной
        переподготовки
      </p>

      <ul className={styles.list}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <li key={item.id}>
              <Card
                image={item.image}
                description={item.description}
                link={`education/${item.slug}`}
              />
            </li>
          ))
        ) : (
          <p className="span-error-message">Данные отсутствуют.</p>
        )}
      </ul>
    </div>
  );
}
