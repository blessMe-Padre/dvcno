import { menuData } from "@/app/api/menu/menu-data";

export async function GET() {
    const res = menuData;
    return Response.json(res);
}