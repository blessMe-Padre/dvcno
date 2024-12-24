import styles from './style.module.css';
import Link from 'next/link';


const DocumentComponent = ({ title, link }) => {
    return (
        <div className={styles.document_item}>

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8265 30.9704V15.4813H23.2024C22.7288 15.4813 22.3454 15.0977 22.3454 14.624V8H12.0297C11.4617 8 11 8.462 11 9.02993V30.9704C11 31.5383 11.4618 32 12.0297 32H28.7963C29.3642 32 29.8265 31.5383 29.8265 30.9704ZM24.0595 13.767V9.21218L28.6141 13.767H24.0595ZM26.5416 26.3766C26.5416 26.8497 26.1579 27.2339 25.6843 27.2339H15.1416C14.6685 27.2339 14.2843 26.8497 14.2843 26.3766C14.2843 25.903 14.6685 25.5195 15.1416 25.5195H25.6843C26.158 25.5195 26.5416 25.903 26.5416 26.3766ZM26.5416 20.5265C26.5416 20.9999 26.1579 21.3835 25.6843 21.3835H15.1416C14.6685 21.3835 14.2843 20.9999 14.2843 20.5265C14.2843 20.0531 14.6685 19.6695 15.1416 19.6695H25.6843C26.158 19.6695 26.5416 20.0531 26.5416 20.5265Z" fill="#191830" />
            </svg>

            <Link href={'/'}><p className={styles.name_document}>{title}</p></Link>
        </div>
    )
}

export default DocumentComponent;