import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Начальное общее образование",
    description: "Дальневосточный центр непрерывного образования",
}

export default async function Page() {
    const result = await fetchApiServerData('pages/nachalnoe-obshchee-obrazovanie');

    if (!result.data) {
        return <div className={styles.error_message}>Ошибка при загрузке данных</div>
    }
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}


