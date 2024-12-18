import styles from "./page.module.css";

import { Awards, SlideMain } from "./components";
import { Slider, About, Events, News, Partners, Why, Gallery } from "./sections";

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
      <Events />
      <News />
      <Gallery />
      {/* <Contacts /> */}
      <Partners />
    </>
  );
}
