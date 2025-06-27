import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Политика обработки персональных данных",
    description: "Дальневосточный центр непрерывного образования",
}



export default async function page() {
    const data = await fetchApiServerData('pages/processing-of-personal-data');

    return (
        <PageContent data={data.data} />
    )
}