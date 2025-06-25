import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: 'ДВЦНО | Информационная безопасность',
    description: 'Информационная безопасность',
}

export default async function Page() {

    const result = await fetchApiServerData('pages/info-security');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}