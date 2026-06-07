'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и тип Variants

// Контейнер для управления очередью (stagger). Типизируем как Variants, чтобы убрать ошибки VS Code
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Задержка между появлением элементов
      delayChildren: 0.1,    // Пауза перед стартом
    },
  },
};

// Анимация для каждого элемента. Типизируем как Variants, чтобы массив ease работал корректно
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Премиальная плавная кривая скорости
    },
  },
};

export default function Hero() {
  return (
    // Главный анимированный контейнер
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      <div className="flex flex-col gap-[48px] min-h-screen justify-center items-start">
        
        {/* Анимированный заголовок */}
        <motion.p variants={itemVariants} className="text-4xl text-white">
          Not only people <br /> need a house
        </motion.p>

        {/* Анимированное описание */}
        <motion.p variants={itemVariants} className="text-[#CDCDCD]">
          We offer to give a chance to a little and nice puppy with an extremely <br /> 
          wide and open heart. He or she will love you more than anybody else <br /> 
          in the world, you will see!
        </motion.p>

        {/* Анимированная кнопка */}
        <motion.div variants={itemVariants}>
          {/* Твои Tailwind hover-эффекты и scale остаются нетронутыми и работают поверх */}
          <div className="h-[52px] w-[207px] bg-[#ffb681] hover:bg-[#ffa66a] rounded-full flex justify-center items-center transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
            <p className="text-[#242424] hover:text-[#292929] font-medium transition-colors duration-300">
              Make a friend
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
