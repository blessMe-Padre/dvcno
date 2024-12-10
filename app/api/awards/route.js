import { awardsData } from "./awards-data";

export async function GET() {
    const res = awardsData;
    return Response.json(res);
}