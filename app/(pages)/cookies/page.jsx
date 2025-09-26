import { Breadcrumbs } from '@/app/components'
import styles from './style.module.css';
import PageContent from './PageContent';
import fetchApiServerData from "@/app/utils/fetchApiServerData";


export const metadata = {
    title: "ДВЦНО | Контакты",
    description: "Дальневосточный центр непрерывного образования",
};


export default async function page() {
    const data = await fetchApiServerData('pages/contacts');

    return (
        <>
            <h1 className="visually-hidden">Куки</h1>
            <PageContent data={data.data} />
        </>
    )
}
