import styles from './style.module.css';

const SVG_stroke_Compoment = ({color}) => {

    let stroke = '';

    switch (color) {

        case 'yellow':
            stroke = '#FFCF82';
            break;

        case 'light-blue':    
            stroke = '#37A4DA';
            break;

        case 'violet':
            stroke = '#433C8C';
            break;
        
        case 'purple':
            stroke = '#A14BC5';
            break;

        case 'green': 
            stroke = '#36B369';
            break;
            
    }
    return (
        <svg
            className={styles.svg}
            width="590" height="154" viewBox="0 0 590 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1881 123.353C67.4942 113.745 203.057 23.9637 191.55 69.6616C180.042 115.36 78.1966 170.401 138.531 146.89C211.018 118.644 409.582 -1.58361 430.342 17.4117C444.169 30.0667 84.9545 341.918 299.513 210.981C364.273 171.462 507.991 105.463 549.133 77.5636"
                 stroke={stroke} strokeWidth="80" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default SVG_stroke_Compoment;