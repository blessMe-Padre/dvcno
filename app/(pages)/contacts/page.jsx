import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const metadata = {
    title: "ДВЦНО | Контакты",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function page() {
    const data = await fetchApiServerData('pages/contacts');

    return (
        <PageContent data={data.data} />
    )
}