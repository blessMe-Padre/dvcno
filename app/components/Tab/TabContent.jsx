import styles from './style.module.css'

import Image from 'next/image';

import placeholder from '../../../public/placeholder/placeholder.png'

export const TabContent = ({ title, content, link }) => (

    

  <div className={styles.tab_content}>
    {link ? link : <Image 
        src={placeholder} 
        alt="placeholder" 
        width={1000} 
        height={400}
        objectFit='cover' 
        style={{ borderRadius: '30px'}}
    />}
  </div>
);