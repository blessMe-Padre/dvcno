import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Профессиональное обучение в ДВЦНО",
    description: "Профессиональное обучение в ДВЦНО",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/professionalnoe-obuchenie');
    const data = result?.data;
    //console.log(data);
    
    return (
        <PageContent data={data}/>
    )
}


