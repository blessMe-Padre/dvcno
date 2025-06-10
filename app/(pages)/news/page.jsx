
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import PageComponent from './PageComponent';

export default async function page() {
    const result = await fetchApiServerData('news');
    const data = result.data;


    return (
        <div className='container'>
            <PageComponent data={data} />
        </div>
    )
}
