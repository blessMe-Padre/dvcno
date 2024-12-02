import Image from "next/image";
import styles from "./style.module.css";

import { menuData } from "@/mock-data/menu-data";
import Link from "next/link";

export default function Menu() {

    console.log(menuData);

    return (
        <div>
            <ul className={styles.list}>
                {menuData.map((item, index) => (
                    <li key={index}>
                        <div href={item.link}>
                            {item.title}
                            <ul className={styles.sublist}>
                                {item.submenu.map((subItem, index) => (
                                    <li key={index}>
                                        <Link href={subItem.link}>
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
