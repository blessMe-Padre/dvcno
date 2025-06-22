import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Сведения об образовательной организации",
    description: "Дальневосточный центр непрерывного образования",
};


export default async function page() {
    const data = await fetchApiServerData('pages/info');

    return (
        <PageContent data={data.data} />
    )
}