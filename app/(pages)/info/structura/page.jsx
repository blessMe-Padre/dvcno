import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Структура и органы управления образовательной организацией",
    description: "Дальневосточный центр непрерывного образования",
};


export default async function page() {
    const data = await fetchApiServerData('pages/structure');

    return (
        <PageContent data={data.data} />
    )
}
