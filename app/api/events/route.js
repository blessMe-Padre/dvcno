import { eventsData } from "@/app/api/events/events-data";

export async function GET() {
    const res = eventsData;

    return Response.json(res);
}