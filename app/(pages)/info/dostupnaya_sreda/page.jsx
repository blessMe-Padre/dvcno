import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchApiServerData('pages/dostupnaya_sreda');
    const slovar = await fetchApiServerData('dictionaries/headers_pages');

    return (
        <PageContent data={data.data} slovar={slovar.data} />
    )
}