import { mainSlidersData } from "@/app/api/main-sliders/main-sliders-data";


export async function GET() {
    const res = mainSlidersData;
    return Response.json(res);
}