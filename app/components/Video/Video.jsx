import { useState, useRef } from 'react';
import { VideoPopup } from '@/app/components';
import styles from './style.module.css';

/**
 * type = 'video' | 'link' | 'iframe'
 * video = открывает попап с видео mp4 и webm на сайте через тег видео
 * link = не открывает попап и открывает ссылку в новой вкладке
 * iframe = открывает попап с iframe
 */

const VideoComponent = ({ data = {}, background }) => {
    const { title, type, webm, mp4, link, iframe, background: dataBackground } = data || {};
    const bg = background ?? dataBackground;

    const [active, setActive] = useState(false);
    // const videoRef = useRef(null);

    let content;

    switch (type) {
        case 'video':
            content = (
                <video
                    width="320"
                    height="320"
                    controls
                >
                    <source src={process.env.NEXT_PUBLIC_API_SERVER + webm} type="video/webm" />
                    <source src={process.env.NEXT_PUBLIC_API_SERVER + mp4} type="video/mp4" />
                </video>
            );
            break;
        case 'link':
            content = (
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            );
            break;
        case 'iframe':
            content = (
                iframe
            );
            break;
        default:
            content = null;
    }

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div
            className={`${styles.document_item} ${bg === 'white' ? styles.background_white : ''}`}
            onClick={handleClick}
        >

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="#EBEEF8" />
                <path d="M20 10C17.9233 10 15.8932 10.6158 14.1665 11.7696C12.4398 12.9233 11.094 14.5632 10.2993 16.4818C9.50455 18.4004 9.29661 20.5116 9.70176 22.5484C10.1069 24.5852 11.1069 26.4562 12.5754 27.9246C14.0438 29.3931 15.9148 30.3931 17.9516 30.7982C19.9884 31.2034 22.0996 30.9955 24.0182 30.2007C25.9368 29.406 27.5767 28.0602 28.7304 26.3335C29.8842 24.6068 30.5 22.5767 30.5 20.5C30.4995 17.7154 29.3931 15.045 27.4241 13.0759C25.4551 11.1069 22.7846 10.0005 20 10ZM23.7924 21.2125L18.7194 24.1442C18.5939 24.2162 18.4516 24.2539 18.307 24.2535C18.1623 24.2531 18.0203 24.2147 17.8951 24.1421C17.77 24.0695 17.6662 23.9653 17.594 23.8399C17.5219 23.7145 17.484 23.5723 17.4841 23.4276V17.5724C17.484 17.4277 17.522 17.2856 17.5942 17.1603C17.6663 17.0349 17.7702 16.9307 17.8953 16.8582C18.0204 16.7856 18.1624 16.7473 18.3071 16.7469C18.4517 16.7465 18.5939 16.7842 18.7194 16.8561L23.7924 19.7875C23.9181 19.8592 24.0226 19.9628 24.0954 20.088C24.1681 20.2131 24.2064 20.3553 24.2064 20.5C24.2064 20.6447 24.1681 20.7869 24.0954 20.912C24.0226 21.0372 23.9181 21.1408 23.7924 21.2125Z" fill="#433C8C" />
            </svg>

            <div className={styles.name_document}>
                <p>{title}</p>
            </div>

            <VideoPopup
                active={active}
                setActive={setActive}
                content={content}
            />
        </div>
    )
}

export default VideoComponent;