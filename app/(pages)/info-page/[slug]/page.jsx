import PageContent from "./PageContent";
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const revalidate = 10;

export async function generateMetadata({ params }) {
    const { slug } = params;
    return {
        title: `ДВЦНО | ${slug}`,
        description: slug,
    };
}

const fakeSlug = 'info-security';

export default async function Page() {
    const result = await fetchApiServerData(`pages/${fakeSlug}`);
    const data = result?.data;

    return (
        <>
            <PageContent data={data} />
        </>
    )
}

