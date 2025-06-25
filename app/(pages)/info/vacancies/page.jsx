import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const metadata = {
    title: "ДВЦНО | Вакантные места для приёма (перевода) обучающихся",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/vacancies');

    return (
        <PageContent data={data.data} />
    )
}