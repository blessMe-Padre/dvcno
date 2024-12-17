import { contactsData } from "./contacts-data";

export async function GET() {
    const res = contactsData;
    return Response.json(res);
}