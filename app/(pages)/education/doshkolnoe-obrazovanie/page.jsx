import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Дошкольное образование в ДВЦНО",
    description: "Дошкольное образование в ДВЦНО"
}

export default async function Page() {

    const result = await fetchApiServerData('pages/doshkolnoe-obrazovanie');
    const data = result?.data;
    //console.log(data);
    
    return (
        <PageContent data={data}/>
    )
}

