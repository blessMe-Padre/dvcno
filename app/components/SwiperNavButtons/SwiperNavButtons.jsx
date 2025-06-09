import { useSwiper } from "swiper/react";
import styles from './style.module.css'

const SwiperNavButtons = ({ addClass }) => {
    const swiper = useSwiper();

    return (
        <div className={`${styles.swiper_nav_btns} ${addClass} ${addClass ? styles[addClass] : ''
            }`}>
            <button className={styles.btn_prev} onClick={() => swiper.slidePrev()} aria-label="Назад">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5036 1.30371L1.24147 10.5656M1.24147 10.5656L10.3718 19.6959M1.24147 10.5656L22.7598 10.5656" stroke="#433C8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button className={styles.btn_next} onClick={() => swiper.slideNext()} aria-label="Вперёд">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4964 1.30371L22.7585 10.5656M22.7585 10.5656L13.6282 19.6959M22.7585 10.5656L1.24023 10.5656" stroke="#433C8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

        </div>
    )
}

export default SwiperNavButtons;

