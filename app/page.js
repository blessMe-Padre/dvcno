import styles from "./page.module.css";

import { Slider, Awards } from "./components";
import { About, Events, News } from "./sections";

// import { Contacts } from "./sections/Contacts/Contacts";

export const metadata = {
  title: "ДВЦНО | Главная",
  description: "Дальневосточный центр непрерывного образования",
};

export default function Home() {

  return (
    <>

      <h1 className="visually-hidden">Дальневосточный центр непрерывного образования</h1>
      <div className="container">

       
        {/* <Slider /> */}

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

        <Slider />

        <About />
      </div>

      <div className="gray-wrapper">
        <Why />
        <Awards />
      </div>

      <News />
      <Events />
      <News />
      <Gallery />
      <Contacts />


    </>
  );
}
