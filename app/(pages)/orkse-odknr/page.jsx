import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | ОРКСЭ/ОДКНР",
    description: "Дальневосточный центр непрерывного образования",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/orkse-odknr');
    const data = result?.data;

    return (
        <PageContent data={data} />
    )
}