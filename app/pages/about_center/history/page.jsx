import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';

export const metadata = {
    title: "ДВЦНО | История",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() { 
    return (
        <div>
            <Breadcrumbs title={"История"} />
            <h1>История</h1>
        </div>
    )
}