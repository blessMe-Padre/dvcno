import { educationPages } from "@/app/api/education/edu-pages-data";

export async function GET() {
    const res = educationPages;
    return Response.json(res);
}
