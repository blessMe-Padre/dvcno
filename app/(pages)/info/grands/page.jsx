import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Стипендия и меры поддержки обучающихся",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/grands');

    return (
        <PageContent data={data.data} />
    )
}