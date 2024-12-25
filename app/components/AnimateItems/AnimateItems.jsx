import styles from './style.module.css'
import { motion } from 'framer-motion';

import Image from 'next/image';

const AnimateItems = ({data}) => {
                      
    return (
         <ul className={styles.list_wrapper}>
            
            {data.map((item, index) => (
               
                <ul className={`${styles.ul_wrapper} ${index % 2 ? `${styles.ul_wrapper_reversed}`: ''}`} key={index}>        
                    {index != data.length - 1 ? (
                        <>
                            <li className={styles.list_content}>

                                <motion.div
                                    className={styles.image_wrapper}
                                    initial={index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 3}}}
                                    >
                                        {item.image && (
                                            <Image 
                                            className={styles.image_history} 
                                            src={item.image}
                                            width={200} 
                                            height={200} 
                                            alt='image_history'
                                            />
                                        )}
                                    
                                </motion.div>
                            </li>

                            <li className={`${styles.circle} ${item.className === 'light-blue'
                                                ? styles.light_blue_border
                                                : item.className === 'green'
                                                ? styles.green_border
                                                : item.className === 'yellow'
                                                ? styles.yellow_border
                                                : item.className === 'violet'
                                                ? styles.violet_border
                                                : ''}`}>
                                {/* Кружок */}
                            </li>

                            <li className={`${styles.list_content} ${item.year ? '' : `${styles.custom_list_content}`}`}>
                                <div className={styles.list_content_wrapper}>
                                    <motion.div
                                        className='relative'
                                        initial={index % 2 === 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0, transition: {
                                            duration: 2
                                        }}}
                                        viewport={{
                                            once: true,
                                            amount: 'all'
                                        }}
                                        >

                                        {item.year && (
                                            <div className={`${styles.list_content_year} ${
                                                item.className === 'light-blue'
                                                ? styles.light_blue_background  
                                                : item.className === 'green'
                                                ? styles.green_background
                                                : item.className === 'yellow'
                                                ? styles.yellow_background
                                                : item.className === 'violet'
                                                ? styles.violet_background
                                                : ''
                                            }`}>
                                                    <div className={`${styles.circle_last_small} ${item.className === 'light-blue'
                                                        ? styles.light_blue_border
                                                        : item.className === 'green'
                                                        ? styles.green_border
                                                        : item.className === 'yellow'
                                                        ? styles.yellow_border
                                                        : item.className === 'violet'
                                                        ? styles.violet_border
                                                        : ''}`}>
                                                        {/* Кружок */}
                                                    </div>
                                                    
                                                    {item.year}
                                            </div>
                                            
                                        )}
                                       {item.year ? ( 
                                       <svg className={styles.history_decor} width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path 
                                                className={item.className === 'light-blue'
                                                ? styles.light_blue_stroke  
                                                : item.className === 'green'
                                                ? styles.green_stroke
                                                : item.className === 'yellow'
                                                ? styles.yellow_stroke
                                                : item.className === 'violet'
                                                ? styles.violet_stroke
                                                : ''}
                                                 d="M1.00008 2.04532C21.974 0.282198 63.343 10.0074 61.0278 63.013" stroke="#FFB236" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        ) : (
                                              <svg className={styles.history_decor_without_year} width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path 
                                                    className={item.className === 'light-blue'
                                                    ? styles.light_blue_stroke  
                                                    : item.className === 'green'
                                                    ? styles.green_stroke
                                                    : item.className === 'yellow'
                                                    ? styles.yellow_stroke
                                                    : item.className === 'violet'
                                                    ? styles.violet_stroke
                                                    : ''}
                                                 d="M1.00008 2.04532C21.974 0.282198 63.343 10.0074 61.0278 63.013" stroke="#FFB236" stroke-width="2" stroke-linecap="round"/>
                                                </svg>
                                            // <SvgComponent className={styles.history_decor_without_year} item={item} /> 
                                        )
                                        }
                                        
                                        {item.subtitle && (
                                            <h2 className={styles.subtitle}>{item.title}</h2>
                                        )}

                                        {/* <p className={styles.list_content_desc}>{item.desc ? item.desc.replace(/<br>/g, '\n') : item.desc}</p>
                                        {item.desc2 && (
                                            <p className={styles.list_content_desc}>{item.desc2 ? item.desc2.replace(/<br>/g, '\n') : item.desc2}</p>
                                        )} */}

                                        <p className={styles.list_content_desc} dangerouslySetInnerHTML={{ __html: item.desc }}></p>


                                    </motion.div>
                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={`${styles.list_content} ${item.year ? '' : `${styles.custom_list_content}`}`}>
                                <div className={styles.list_content_wrapper}>
                                    <motion.div
                                        initial={index % 2 === 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0, transition: {
                                            duration: 2
                                        }}}
                                       
                                        >

                                        {item.year && (
                                            <div className={`${styles.list_content_year} ${
                                                item.className === 'light-blue'
                                                ? styles.light_blue_background  
                                                : item.className === 'green'
                                                ? styles.green_background
                                                : item.className === 'yellow'
                                                ? styles.yellow_background
                                                : item.className === 'violet'
                                                ? styles.violet_background
                                                : ''
                                            }`}>
                                                 <div className={`${styles.circle_last_small} ${item.className === 'light-blue'
                                                    ? styles.light_blue_border
                                                    : item.className === 'green'
                                                    ? styles.green_border
                                                    : item.className === 'yellow'
                                                    ? styles.yellow_border
                                                    : item.className === 'violet'
                                                    ? styles.violet_border
                                                    : ''}`}>
                                                    {/* Кружок */}
                                                </div>
                                                {item.year}
                                            
                                            </div>
                                            
                                        )}

                                        

                                        {item.subtitle && (
                                            <h2 className={styles.subtitle}>{item.title}</h2>
                                        )}

                                        {/* <p className={styles.list_content_desc}>{item.desc ? item.desc.replace(/<br>/g, '\n') : item.desc}</p>
                                        {item.desc2 && (
                                            <p className={styles.list_content_desc}>{item.desc2 ? item.desc2.replace(/<br>/g, '\n') : item.desc2}</p>
                                        )} */}
                                            
                                            <p className={styles.list_content_desc} dangerouslySetInnerHTML={{ __html: item.desc }}></p>

                                    </motion.div>
                                </div>
                            </li>

                            <li className={`${styles.circle_last} ${item.className === 'light-blue'
                                ? styles.light_blue_border
                                : item.className === 'green'
                                ? styles.green_border
                                : item.className === 'yellow'
                                ? styles.yellow_border
                                : item.className === 'violet'
                                ? styles.violet_border
                                : ''}`}>
                                {/* Кружок */}
                            </li>
                        </>
                    )}
                </ul>
            ))}
            
        </ul>
    )
}

export default AnimateItems;