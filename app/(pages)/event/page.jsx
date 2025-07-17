import getAllEvents from "@/app/utils/getAllEvents";
import PageComponent from "./PageComponent";

export const metadata = {
    title: "ДВЦНО | События",
    description: "События",
};

export default async function page() {
    const result = await getAllEvents();
    const data = result.data;

    return (
        <div className="container">
            <PageComponent data={data} />
        </div>
    )
}
