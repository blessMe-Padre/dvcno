import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Детские безопасные сайты",
    description: "Детские безопасные сайты",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/detskie-bezopasnye-sajty');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}