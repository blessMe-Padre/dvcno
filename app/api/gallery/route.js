import { awardsData } from "./gallery-data";

export async function GET() {
    const res = awardsData;
    return Response.json(res);
}