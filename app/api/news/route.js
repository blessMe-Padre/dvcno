import { newsData} from "@/app/api/news/news-data";


export async function GET() {
    const res = newsData;
    return Response.json(res);
}