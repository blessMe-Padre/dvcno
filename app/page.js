import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Link from "next/link";
import { Footer } from "./components/Footer/Footer";

import Slider from "./components/Slider/Slider";
import Awards from './components/Awards/Awards';
import About from "./components/Sections/About/About";



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
        {/* <Image
          aria-hidden
          src="/content/image-1.png"
          alt="Изображение"
          width={409}
          height={195}
          className="dsv-image"
        />
        <p className={styles.main_text}>Дальневосточный центр непрерывного образования</p>
        <p className={styles.main_text_2}>Дальневосточный центр непрерывного образования</p>
        <p>Дальневосточный центр непрерывного образования</p>
        <p>Дальневосточный центр непрерывного образования</p>
        <p>Дальневосточный центр непрерывного образования</p>
        <p>Дальневосточный центр непрерывного образования</p> */}

        {/* <Slider /> */}
        <About />
        <Awards />
      </main>

      <Footer />
    </div>
  );
}
