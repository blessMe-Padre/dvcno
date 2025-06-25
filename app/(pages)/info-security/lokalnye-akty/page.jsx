import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Локальные акты",
    description: "Локальные акты",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/lokalnye-akty');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}