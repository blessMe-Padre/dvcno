import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const revalidate = 10;

export async function generateMetadata({ params }) {
    const { slug } = params;
    const result = await fetchApiServerData(`info-page/${slug}`);
    const data = result?.data;

    return {
        title: `ДВЦНО | ${data?.title?.ru}`,
        description: data?.description?.ru,
    };
}

export default async function Page({ params }) {
    const { slug } = params;
    const result = await fetchApiServerData(`info-page/${slug}`);
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}

