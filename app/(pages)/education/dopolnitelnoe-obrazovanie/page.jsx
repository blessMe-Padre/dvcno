import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Дополнительное образование в ДВЦНО",
    description: "Дополнительное образование в ДВЦНО"
}

export default async function Page() {

    const result = await fetchApiServerData('pages/dopolnitelnoe-obrazovanie');
    const data = result?.data;
    //console.log(data);
    
    return (
        <PageContent data={data}/>
    )
}