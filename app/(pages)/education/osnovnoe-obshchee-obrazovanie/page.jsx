import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Основное общее образование в ДВЦНО",
    description: "Дальневосточный центр непрерывного образования",
}

export default async function Page() {

    const result = await fetchApiServerData('pages/osnovnoe-obshchee-obrazovanie');
    const data = result?.data;
    //console.log(data);
    
    return (
        <PageContent data={data}/>
    )
}