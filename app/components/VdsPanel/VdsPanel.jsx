'use client'

import Image from "next/image";
import styles from "./vdspanel.module.css";

export default function VdsPanel() {
    // Повторное произношение текста
    function speachtxt(txt) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
    }

    // Уменьшение шрифта
    const fontDecrease = () => {
        const currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
        const newFontSize = currentFontSize - 2;
        document.body.style.fontSize = newFontSize + 'px';
        speachtxt("размер шрифта уменьшен");
    }
    // Увеличение шрифта
    const fontIncrease = () => {
        const currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
        const newFontSize = currentFontSize + 2;
        document.body.style.fontSize = newFontSize + 'px';
        speachtxt("размер шрифта увеличен");
    }

    // Функция для смены темы
    function changeTheme(allStyles, newTheme) {
        document.body.classList.remove(
            allStyles.theme_white,
            allStyles.theme_black,
            allStyles.theme_blue,
            allStyles.theme_yellow,
            allStyles.theme_green
        );
        document.body.classList.add(newTheme);
    }

    const changeThemeWhite = () => {
        changeTheme(styles, styles.theme_white);
        speachtxt("цвет сайта черным по белому");
    }
    const changeThemeBlack = () => {
        changeTheme(styles, styles.theme_black);
        speachtxt("цвет сайта белым по черному");
    }
    const changeThemeBlue = () => {
        changeTheme(styles, styles.theme_blue);
        speachtxt("цвет сайта темно синим по голубому");
    }
    const changeThemeYellow = () => {
        changeTheme(styles, styles.theme_yellow);
        speachtxt("цвет сайта темно коричневым по бежевому");
    }
    const changeThemeGreen = () => {
        changeTheme(styles, styles.theme_green);
        speachtxt("цвет сайта зеленым по темно коричневому");
    }

    // Работа с изображениями
    const removeImages = (evt) => {
        speachtxt("изображения выключены");

        const images = document.querySelectorAll('.dsv-image');
        images.forEach(image => {
            image.style.display = 'none';
            const alt = image.getAttribute('alt');

            if (alt !== '') {
                const div = document.createElement('div');
                div.className = 'dsv-image-div';
                div.textContent = alt;
                image.parentNode.insertBefore(div, image.nextSibling);
            }
        });

    }

    return (
        <div className={styles.dsv_panel}>
            <div>
                <p className={styles.p}>Размер шрифта</p>
                <div>
                    <button
                        className={styles.button}
                        onClick={fontDecrease}
                    >A-
                    </button>
                    <button
                        className={styles.button}
                        onClick={fontIncrease}
                    >A+
                    </button>
                </div>
            </div>

            <div>
                <p className={styles.p}>Цвета сайта</p>
                <div>
                    <button
                        className={`${styles.button} ${styles.color_1}`}
                        onClick={changeThemeWhite}
                    >Ц</button>
                    <button
                        className={`${styles.button} ${styles.color_2}`}
                        onClick={changeThemeBlack}
                    >Ц</button>
                    <button
                        className={`${styles.button} ${styles.color_3}`}
                        onClick={changeThemeBlue}
                    >Ц</button>
                    <button
                        className={`${styles.button} ${styles.color_4}`}
                        onClick={changeThemeYellow}
                    >Ц</button>
                    <button
                        className={`${styles.button} ${styles.color_5}`}
                        onClick={changeThemeGreen}
                    >Ц</button>
                </div>
            </div>

            <div>
                <p className={styles.p}>Изображения</p>
                <div>
                    <button className={styles.button}>
                        <Image src="/icons/image.svg" alt="" width={20} height={20} />
                    </button>
                    <button
                        className={styles.button}
                        onClick={removeImages}
                    >
                        <Image src="/icons/minus-circle.svg" alt="" width={20} height={20} />
                    </button>
                    <button className={styles.button}>
                        <Image src="/icons/adjust.svg" alt="" width={20} height={20} />
                    </button>

                </div>
            </div>

            <div>
                <p className={styles.p}>Настройки</p>
                <div>
                    <button id="btn-close-panel">
                        Обычная версия сайта
                    </button>
                </div>
            </div>
        </div>
    )
}
