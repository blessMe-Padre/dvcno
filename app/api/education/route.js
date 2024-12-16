import { educationPages } from "@/app/api/edu-pages/edu-pages-data";

export async function GET() {
    const res = educationPages;
    return Response.json(res);
}