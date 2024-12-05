import { popupMenuData } from "@/app/api/popup-menu/menu-data";

export async function GET() {
    const res = popupMenuData;
    return Response.json(res);
}