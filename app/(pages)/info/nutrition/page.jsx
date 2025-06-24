import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Организация питания в образовательной организации",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/nutrition');

    return (
        <PageContent data={data.data} />
    )
}