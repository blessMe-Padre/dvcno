import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Педагогам",
    description: "Педагогам",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/pedagogam');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}
