import styles from "./page.module.css";
import { Awards, SlideMain } from "./components";
import { Slider, About, Events, News, Partners, Why, Gallery, Contacts } from "./sections";


export const metadata = {
  title: "ДВЦНО | Главная",
  description: "Дальневосточный центр непрерывного образования",
};

export default function Home() {

  return (
    <>
      <h1 className="visually-hidden">Дальневосточный центр непрерывного образования</h1>
      <div className="container">
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
      <Contacts />
      <Partners />
    </>
  );
}
