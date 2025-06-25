import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const metadata = {
    title: "ДВЦНО | Педагогический состав",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {

    const data = await fetchApiServerData('pages/sostav');

    return (
        <PageContent data={data.data} />
    )
}