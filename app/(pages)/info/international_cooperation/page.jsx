import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const metadata = {
    title: "ДВЦНО | Международное сотрудничество",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/international_cooperation');

    return (
        <PageContent data={data.data} />
    )
}