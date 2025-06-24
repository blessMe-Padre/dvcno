import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Образовательные стандарты и требования",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/standarts');

    return (
        <PageContent data={data.data} />
    )
}