import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';

export const metadata = {
    title: "ДВЦНО | Миссия",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() { 
    return (
        <div>
            <Breadcrumbs title={"Миссия"} />
            <h1>Миссия</h1>
        </div>
    )
}