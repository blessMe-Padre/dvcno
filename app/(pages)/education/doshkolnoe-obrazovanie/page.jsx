import Image from "next/image";
import styles from "../education.module.css";
import { Division } from "@/app/sections";
import { Breadcrumbs, SlideMain } from "@/app/components";

const data = {
  title: "Дошкольное образование в ДВЦНО",
  images: [
    {
      sliderBgBig: "/education/hero-bg-1-l.png",
    },
    {
      sliderBgMedium: "/education/hero-bg-1-m.png",
    },
    {
      sliderBgSmall: "/education/hero-bg-1-s.png",
    },
  ],

  description:
    "Это воспитание, развитие и обучение, присмотр и оздоровление детей от 1,5 лет до 7 лет",
  listItems: [
    "НШДС «Классическая европейская прогимназия»",
    'Начальная общеобразовательная школа-детский сад "Восточная школа" ',
  ],
  textPattern: "Здесь создают творцов будущего",
  link: "#",
};

const divisionData = [
  {
    image: "/division/image-1.jpg",
    title: "Начальная общеобразовательная школа-детский сад «Восточная школа»",
    address: "Приморский край, г. Владивосток, ул. Десятая д.10",
    week: "8:30 - 18:00 (5-дневная учебная неделя)",
    site: "vostok.vvsu.ru",
    phone_robot: "+74232404185",
    phone: "240-41-85",
    map_link: "https://yandex.ru/maps/-/CHET5OYs",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!",
  },
  {
    image: "/division/image-2.jpg",
    title: "НШДС «Классическая европейская прогимназия»",
    address: "Приморский край, г. Владивосток, ул. Десятая д.10",
    week: "8:30 - 18:00 (5-дневная учебная неделя)",
    site: "odarenok.su",
    phone_robot: "+74232614737",
    phone: "2261-47-37",
    map_link: "https://yandex.ru/maps/-/CHET5OYs",
    description:
      "Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!",
  },
];

export default function doshkolnoeObrazovanie() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          slug={"Обучение"}
          link={"education"}
          title={"Дошкольное образование"}
        />

        <section className={styles.hero_section}>
          <SlideMain item={data} />
        </section>
      </div>

      <section className={`${styles.section} section-dsv`}>
        <div className="container">
          <div className={styles.row}>
            <div>
              <h2 className={`${styles.title} ${styles.text_white}`}>
                Дошкольные группы{" "}
                <span className={`${styles.sticker} ${styles.text_white}`}>
                  3-7 лет
                </span>
              </h2>
              <p className={styles.text}>
                В&nbsp;режиме полупансиона с&nbsp;8.15 до&nbsp;19.00&nbsp;в
                детском саду реализуются программы основного
                и&nbsp;дополнительного образования дошкольников. Основная
                образовательная программа дошкольного образования соответствует
                требованиям ФГОС. Целевые ориентиры дошкольного образования
                выстроены с&nbsp;учётом возрастных характеристик возможных
                достижений дошкольника на&nbsp;каждом этапе развития.
              </p>
              <p className={styles.text}>
                Дети приобретают навыки общения в&nbsp;социуме с&nbsp;взрослыми
                и&nbsp;сверстниками, осваивают культурно-бытовую среду,
                овладевают речью, готовятся к&nbsp;обучению школе
                и&nbsp;развиваются творчески. Ребята получают дополнительное
                образование в&nbsp;танцевальной студии, студии изобразительной
                деятельности и&nbsp;на&nbsp;музыкально-ритмических занятиях.
                Занятия с&nbsp;логопедом и&nbsp;психологом позволяют
                адаптировать ребенка и&nbsp;подготовить к&nbsp;школьному
                обучению. Укрепление здоровья в&nbsp;детском саду проводится под
                наблюдением врача через обеспечение двигательной активности
                и&nbsp;элементов закаливания
              </p>
            </div>
            <div className={styles.image_wrapper}>
              <Image
                aria-hidden
                src="/education/image-7.jpg"
                alt="Дошкольные группы"
                width={671}
                height={619}
                className={`${styles.image} dsv-image`}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.image_wrapper}>
              <Image
                aria-hidden
                src="/education/image-8.jpg"
                alt="Подготовительный класс"
                width={671}
                height={619}
                className={`${styles.image} dsv-image`}
              />
            </div>
            <div>
              <h2 className={`${styles.title} ${styles.text_white}`}>
                Подготовительный класс{" "}
                <span className={styles.sticker}>6-7 лет</span>
              </h2>
              <p className={styles.text}>
                Подготовительный класс (6-7 лет) является переходной ступенью от
                детского сада к начальной школе. Так в НШДС решается проблема
                непрерывности дошкольного и начального общего образования.
                Групповые и индивидуальные занятия с психологом укрепляют
                отношения в детском коллективе и готовят ребёнка к школьному
                обучению.
              </p>
              <p className={styles.text}>
                Гуманный педагогический подход — стержень Прогимназии. Вера в
                возможности Ребенка, раскрытие самобытной природы в Ребенке,
                уважение и утверждение его Личности, направление его на служение
                добру и справедливости — это ценности, которые несут наши
                педагоги.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Division divisionData={divisionData} />
    </>
  );
}
