import getEvents from "@/app/utils/getEvents";
import PageComponent from "./PageComponent";

export const metadata = {
    title: "ДВЦНО | События",
    description: "События",
};

export default async function page() {
    const result = await getEvents();
    const data = result.data;

    return (
        <div className="container">
            <PageComponent data={data} />
        </div>
    )
}
