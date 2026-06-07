'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и типы
import Food from '@/public/food.svg';
import Trans from '@/public/transportation.svg';
import Bowls from '@/public/bowls-and-cups.svg';
import Shampoos  from '@/public/shampoos.svg';
import Toys  from '@/public/toys.svg';
import Helpes from "./ui/Helpes";
import Med from '@/public/medicines.svg';
import Collar from '@/public/collars-or-leashes.svg';
import Sleep from '@/public/sleeping-area.svg';
import Vitam from '@/public/vitamins.svg';

// Главный контейнер управляет общей очередью появления строк и иконок
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Микро-задержка между иконками для эффекта быстрой волны
      delayChildren: 0.1,    // Пауза перед стартом
    },
  },
};

// Анимация для заголовка и каждой отдельной иконки
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 }, // Плавный вылет снизу вверх
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Наш фирменный премиальный плавный ease
    },
  },
};

export default function Help() {
  return (
    // Обернули весь блок в motion.div для отслеживания скролла
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Анимация запускается только при прокрутке до блока
      viewport={{ once: true, amount: 0.2 }} // Сработает один раз, когда видно 20% секции
      className="flex flex-col gap-[60px] px-[87px] pb-25"
    >
      {/* Анимированный заголовок */}
      <motion.p variants={itemVariants} className="text-[#545454] text-4xl text-center">
        How you can help <br /> our shelter
      </motion.p>

      <div className="flex flex-col gap-[55px]">
        
        {/* Первая строчка иконок */}
        <div className="flex gap-[120px] justify-between items-center">
          <motion.div variants={itemVariants}><Helpes imageSrc={Food} name='Pet food'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Trans} name='Transportation'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Toys} name='Toys'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Bowls} name='Bowls and cups'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Shampoos} name='Shampoos'/></motion.div>
        </div>

        {/* Вторая строчка иконок */}
        <div className="flex gap-[120px] justify-around items-center">
          <motion.div variants={itemVariants}><Helpes imageSrc={Med} name='Vitamins'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Collar} name='Medicines'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Sleep} name='Collars / leashes'/></motion.div>
          <motion.div variants={itemVariants}><Helpes imageSrc={Vitam} name='Sleeping areas'/></motion.div>
        </div>

      </div>
    </motion.div>
  );
}
