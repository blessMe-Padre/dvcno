import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Link from "next/link";
import { Footer } from "./components/Footer/Footer";

import Slider from "./components/Slider/Slider";


export const metadata = {
  title: "ДВЦНО | Главная",
  description: "Дальневосточный центр непрерывного образования",
};
export default function Home() {

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <h1 className="visually-hidden">Дальневосточный центр непрерывного образования</h1>
        
        <Slider />
      </main>

      <Footer />
    </div>
  );
}
