import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Link from "next/link";


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
        main lorem25 wwwww
      </main>
      <footer className={styles.footer}>
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
      </footer>
    </div>
  );
}
