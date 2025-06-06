import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";
import getMenu from "../../utils/getMenu";
import useLangStore from '@/app/store/languageStore';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);
  const { lang } = useLangStore();

  useEffect(() => {
    const fetchData = async () => {
      const menu = await getMenu();
      const headerMenu = menu.data.find(item => item?.alias === 'menu_header');
      setMenuData(headerMenu?.items);
    };

    fetchData();
  }, []);

  return (
    <ul className={styles.list}>
      {menuData?.map((item, index) => (
        <li key={index} className={styles.menuTitle}>
          <Link className={styles.link} href={item.link}>
            <span>{item?.title?.[lang]}</span>

            {item.submenu && item.submenu.length > 0 && (
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 1L5.85897 5L11.5 1" strokeLinecap="round" />
              </svg>
            )}
          </Link>

          {item.submenu && item.submenu.length > 0 && (
            <ul className={styles.sublist}>
              {item.submenu.map((subItem, index) => (
                <li className={styles.sublist_item} key={index}>
                  <Link className={styles.sub_link} href={subItem.link}>
                    {subItem.title?.[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
