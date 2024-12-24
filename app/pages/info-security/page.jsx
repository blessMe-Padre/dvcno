"use client"
import { Breadcrumbs } from "@/app/components";
import styles from "./style.module.css";
import { motion, useAnimation } from "framer-motion";

// export const metadata = {
//     title: "ДВЦНО | Информационная безопасность",
//     description: "Информационная безопасность",
// };

export default async function Page() {
    const imgAnimation = useAnimation();

    const handleMouseMove = e => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 20
        imgAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor,
            transition: {
                type: "spring", // Тип анимации Используется для естественного перехода с эффектом пружины.
                stiffness: 200, // Жесткость пружины Определяет "жесткость" пружины. Чем выше значение, тем быстрее анимация.
                damping: 20,    // Сопротивление Контролирует затухание движения. Более высокие значения делают анимацию более плавной.
                duration: 0.3,  // Продолжительность анимации (опционально) Альтернатива для фиксированной продолжительности анимации.
            },
        })
    }

    return (
        <div className="container">
            <Breadcrumbs title={"Информационная безопасность"} />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>Перечень реализуемых дополнительных программ </h2>

                <motion.div
                    onMouseMove={e => handleMouseMove(e)}>
                    <motion.img
                        src="/education/decor-3.svg"
                        alt="Изображение"
                        width={283}
                        height={219}
                        className="dsv-image"
                        animate={imgAnimation}
                        transition={{ ease: "easeInOut", }}
                    />
                </motion.div>
            </div>
        </div>
    )
}