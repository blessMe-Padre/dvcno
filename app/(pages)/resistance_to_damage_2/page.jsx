import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Противодействие идеологии терроризма и экстремизма",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/resistance_to_damage_2');

    return (
        <PageContent data={data.data} />
    )
}