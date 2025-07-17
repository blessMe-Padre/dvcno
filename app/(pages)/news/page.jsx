
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import PageComponent from './PageComponent';

export async function generateMetadata() {
    return {
        title: 'ДВЦНО | Новости',
        description: 'Актуальные новости Дальневосточного центра непрерывного образования. События, достижения и важная информация о деятельности центра.',

        // Open Graph метаданные
        openGraph: {
            title: 'Новости ДВЦНО',
            description: 'Актуальные новости Дальневосточного центра непрерывного образования. События, достижения и важная информация о деятельности центра.',
            type: 'website',
            url: '/news',
            siteName: 'ДВЦНО',
            images: [
                {
                    url: '/placeholder/placeholder.svg',
                    width: 1200,
                    height: 630,
                    alt: 'Новости ДВЦНО',
                },
            ],
            locale: 'ru_RU',
        },

        // Дополнительные метаданные
        keywords: 'ДВЦНО, новости, образование, Владивосток, события',
        robots: 'index, follow',
    };
}

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
