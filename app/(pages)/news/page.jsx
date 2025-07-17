
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import PageComponent from './PageComponent';

export default async function page() {
    const result2 = await fetchApiServerData('pages/main');
    const currentSettings = await result2?.data?.sections?.news?.[1]?.content?.ru;
    const result = await fetchApiServerData(`news?items_per_page=${currentSettings?.count}&only_active=true`);
    const data = result.data;

    return (
        <div className='container'>
            <PageComponent data={data} />
        </div>
    )
}
