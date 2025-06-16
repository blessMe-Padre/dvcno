import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | История",
    description: "Дальневосточный центр непрерывного образования",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/history');
    const data = result?.data;

    return (
        <PageContent data={data}/>
    )
}