import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Родителям",
    description: "Родителям",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/roditelyam');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}