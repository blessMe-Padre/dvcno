import Image from "next/image";
import styles from "./style.module.css";

import { popupMenuData } from "@/mock-data/popup-menu-data";
import Link from "next/link";

export default function PopupMenu(opened) {

    return (
        <div>
            <ul>
                {popupMenuData.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
