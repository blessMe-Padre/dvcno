import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Основные сведения",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function page() {
    const data = await fetchApiServerData('pages/osnovnue_svedenya');

    return (
        <PageContent data={data.data} />
    )
}