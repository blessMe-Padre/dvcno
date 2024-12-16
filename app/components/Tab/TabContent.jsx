import styles from './style.module.css'

import Image from 'next/image';

import placeholder from '../../../public/placeholder/placeholder.png'

export const TabContent = ({ title, content, link, placeholder }) => (

    

  <div className={styles.tab_content}>

      {link && link.length > 0 ? (
        <iframe 
          src={link}
          width={1000}
          height={500}
          title="Map" 
        />
      ) : placeholder && placeholder.length > 0 ? (
        <Image 
          src={placeholder} 
          alt="placeholder" 
          width={1000}
          height={500}
        />
      ) : (
        <p>No content available.</p> 
      )}


  </div>
);