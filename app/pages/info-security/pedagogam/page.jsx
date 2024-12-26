import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Педагогам",
    description: "Педагогам",
};

export default function Page() {

    return (
        <div className="container">
            <Breadcrumbs
                slug={'Информационная безопасность'}
                link={'pages/info-security'}
                title={'Педагогам'}
            />

            <section className={styles.hero}>
                <h1 className={`title title-black`}>Педагогам</h1>

                <div className={styles.document_wrapper}>
                    <DocumentComponent title={'Памятка для педагогических работников по обеспечению информационной безопасности обучающихся'} />
                </div>


            </section>
        </div>
    )
}