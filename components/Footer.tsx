'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и типы
import FooterDog from '@/public/footer-puppy.svg';
import mail from '@/public/mail.svg';
import phone from '@/public/phone.svg';
import Bggrad from '@/public/footer-gradient-background.svg';
import Pin from '@/public/pin.svg';

// Главный контейнер для футера (запускает каскад колонок)
const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Колонки будут появляться одна за другой с шагом 0.15 сек
      delayChildren: 0.1,    // Небольшая задержка перед стартом
    },
  },
};

// Анимация для колонок и элементов внутри них
const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Исходное состояние: скрыты и опущены на 30px
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Тот же плавный премиальный ease, что и на всём сайте
    },
  },
};

export default function Footer() { // Дали имя компоненту для корректной сборки Next.js
  return (
    // Обернули корневой div в motion.div для отслеживания скролла в самый низ
    <motion.div 
      variants={footerContainerVariants}
      initial="hidden"
      whileInView="visible" // Сработает только тогда, когда пользователь долистает до подвала
      viewport={{ once: true, amount: 0.15 }} // Сработает один раз, когда футер покажется на 15%
      className="flex px-[40px] justify-between"
    >
      
      {/* Колонка 1: Вопросы и предложения */}
      <motion.div variants={footerItemVariants} className="flex flex-col gap-[40px]"> 
        <p className="text-3xl text-white">For questions <br /> and suggestions</p>
        <div className="flex gap-[20px]">
          <Image
            src={mail}
            alt="почта"
            className=""
          /> 
          <p className="text-[#F1CDB3]">email@shelter.com</p>
        </div>
        <div className="flex gap-[20px]">
          <Image
            src={phone}
            alt="телефон"
            className=""
          /> 
          <p className="text-[#F1CDB3]">+13 674 567 75 54</p>
        </div>
      </motion.div>

      {/* Колонка 2: Адреса */}
      <motion.div variants={footerItemVariants} className="flex flex-col gap-[40px]"> 
        <p className="text-3xl text-white">We are waiting <br /> for your visit</p>
        <div className="flex gap-[20px]">
          <Image
            src={Pin}
            alt="карта"
            className=""
          /> 
          <p className="text-[#F1CDB3]">1 Central Street, Bostonb <br /> (entrance from the store)</p>
        </div>
        <div className="flex gap-[20px]">
          <Image
            src={Pin}
            alt="карта"
            className=""
          /> 
          <p className="text-[#F1CDB3]">18 South Park, London </p>
        </div>
      </motion.div>

      {/* Колонка 3: Картинка со щенком */}
      <motion.div variants={footerItemVariants}>
        <Image
          src={FooterDog}
          alt="собака"
          className=""
        /> 
      </motion.div>

    </motion.div>
  );
}
