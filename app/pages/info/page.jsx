import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';


import Image from 'next/image';

export default function page() {
    return (
          <section className={styles.section}>
                <div className='container'>
                    <Breadcrumbs title={"Сведения об образовательной организации"} />
                    <h2 className={styles.title}>Сведения об образовательной организации</h2>
                
                    <div className={styles.wrapper_content}>
                        
                        {/* <Image 
                            className={`${styles.info_bg} dsv-image`} 
                            src={bg_big} 
                            width={1440} 
                            height={700} 
                            alt="info_bg"
                        /> */}
                    
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