import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
    title: "ДВЦНО | Обучение",
    description: "Дальневосточный центр непрерывного образования",
};

export default function Page() {

    return (
        <div className="container">
            <Breadcrumbs title={"Обучение"} />
            <h2 className={`title ${styles.title}`}>Обучение</h2>
        </div>
    )
}