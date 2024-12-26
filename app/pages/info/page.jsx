import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';


export const metadata = {
    title: "ДВЦНО | Сведения об образовательной организации",
    description: "Дальневосточный центр непрерывного образования",
};


export default function page() {
    return (
          <section className={styles.section}>
                <div className='container'>
                    <Breadcrumbs title={"Сведения об образовательной организации"} />
                    <h2 className={styles.title}>Сведения об образовательной организации</h2>
                
                    <div className={styles.wrapper_content}>
                    
                    <p className={styles.subtitle}>АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ПРОФЕССИОНАЛЬНАЯ ОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ «ДАЛЬНЕВОСТОЧНЫЙ ЦЕНТР НЕПРЕРЫВНОГО ОБРАЗОВАНИЯ» </p>
                    
                    <div className={styles.desc}>
                            ОРГАНИЗАЦИЯ, СТРЕМЯЩАЯСЯ К ПОСТОЯННОМУ РОСТУ, РАЗВИТИЮ, ОБНОВЛЕНИЮ, ИННОВАЦИОННОГО СОЦИАЛЬНО - ОРИЕНТИРОВАННОГО РАЗВИТИЯ ОБРАЗОВАНИЯ ДЕТЕЙ И ВЗРОСЛЫХ В ПРИМОРСКОМ КРАЕ
                    </div>
                        
                        <div className={styles.wrapper_lang}>
                            <p className={styles.list_title}>Языки обучения:</p>
                            
                            <ul className={styles.list_language}>
                                <div className={`${styles.item} ${styles.bg_yellow}`}>русский</div>
                                <div className={`${styles.item} ${styles.bg_green}`}>английский</div>
                                <div className={`${styles.item} ${styles.bg_blue}`}>китайский</div>
                                <div className={`${styles.item} ${styles.bg_white}`}>корейский</div>
                            </ul>
                        </div>
                            
                    </div>
                </div>
            </section>
    )
}