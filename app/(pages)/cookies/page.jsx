import PageContent from './PageContent';
import fetchApiServerData from "@/app/utils/fetchApiServerData";

export const metadata = {
    title: "ДВЦНО | Куки",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function page() {
    const data = await fetchApiServerData('pages/cookies');

    return (
        <>
            <h1 className="visually-hidden">Куки</h1>
            <PageContent data={data?.data} />
        </>
    )
}
