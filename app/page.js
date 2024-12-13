import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Slider from "./components/Slider/Slider";
import Awards from './components/Awards/Awards';
import About from "./sections/About/About";
import Why from "./sections/Why/Why";
import Events from "./sections/Events/Events";

import { Contacts } from "./sections/Contacts/Contacts";

import { News } from "./sections/News/News";
import Gallery from "./sections/Gallery/Gallery";



export const metadata = {
  title: "ДВЦНО | Главная",
  description: "Дальневосточный центр непрерывного образования",
};
export default function Home() {

  return (
    <>

      <h1 className="visually-hidden">Дальневосточный центр непрерывного образования</h1>
      <div className="container">
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

        {/* <About /> */}
      </div>
      <div className="gray-wrapper">

        {/* <Why /> */}
        {/* <Awards /> */}
      </div>
      {/* <News />  */}
      {/* <Events /> */}

      <Gallery />

      {/* <Contacts /> */}


    </>
  );
}
