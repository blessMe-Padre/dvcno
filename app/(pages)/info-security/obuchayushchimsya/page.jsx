
import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Обучающимся",
    description: "Обучающимся",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/obuchayushchimsya');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}