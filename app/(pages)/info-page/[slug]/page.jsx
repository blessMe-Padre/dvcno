import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const revalidate = 10;

export async function generateMetadata({ params }) {
    const { slug } = params;
    const result = await fetchApiServerData(`pages/info-security`);

    return {
        title: `ДВЦНО | ${slug}`,
        description: slug,
    };
}

export default async function Page() {
    const result = await fetchApiServerData(`pages/info-security`);
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}

