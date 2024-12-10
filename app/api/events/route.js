import { eventsData } from "@/app/api/events/events-data";

export async function GET() {
    console.log(eventsData);
    const res = eventsData;

    return Response.json(res);
}