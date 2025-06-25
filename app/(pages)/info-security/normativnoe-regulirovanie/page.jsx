import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Нормативное регулирование",
    description: "Нормативное регулирование",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/normativnoe-regulirovanie');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}