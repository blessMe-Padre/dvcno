import { PartnersData } from "@/app/api/partners/partners-data";

export async function GET() {
    const res = PartnersData;
    return Response.json(res);
}