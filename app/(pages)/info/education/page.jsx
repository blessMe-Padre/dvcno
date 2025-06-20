import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
    description: "Дальневосточный центр непрерывного образования",
};


export default async function page() {
    const data = await fetchApiServerData('pages/education');

    return (
        <PageContent data={data.data} />
    )
} 