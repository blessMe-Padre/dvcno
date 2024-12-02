import Image from "next/image";
import styles from "./style.module.css";

import { menuData } from "@/mock-data/menu-data";
import Link from "next/link";

export default function Menu() {

    console.log(menuData);

    return (
        <ul className={styles.list}>
            {menuData.map((item, index) => (
                <li key={index} className={styles.menuTitle}>
                    <a href="#">{item.title}</a>
                    <ul className={styles.sublist}>
                        {item.submenu.map((subItem, index) => (
                            <li key={index}>
                                <Link href={subItem.link}>
                                    {subItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}
