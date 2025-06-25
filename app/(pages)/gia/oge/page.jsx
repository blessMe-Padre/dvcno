import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | ОГЭ",
    description: "ОГЭ",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/oge');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}