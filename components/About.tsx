'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и типы
import AboutPet from '@/public/about-pets.svg';

// Анимация для картинки (плавное появление со смещением слева)
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// Контейнер для текстовой правой части (управляет очередью абзацев)
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Пауза между заголовком и абзацами
      delayChildren: 0.1     // Небольшая задержка перед стартом текста
    }
  }
};

// Анимация для каждого текстового элемента внутри правой части (смещение справа)
const textItemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function About() {
  return (
    <div className="justify-around flex mb-20">
      
      {/* Левая часть: Анимированная картинка по скроллу */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="visible" // Заменили animate на whileInView
        viewport={{ once: true, amount: 0.3 }} // once: true — сработает один раз. amount: 0.3 — покажется на 30% в экране
        className="flex w-[570px] justify-center"
      >
        <Image
          src={AboutPet}
          alt="пескот"
          className=""
        />
      </motion.div>

      {/* Правая часть: Анимированный текстовый контейнер по скроллу */}
      <motion.div  
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible" // Заменили animate на whileInView
        viewport={{ once: true, amount: 0.3 }} // Сработает, когда блок появится в поле зрения
        className="flex flex-col gap-[25px] items-start"
      >
        {/* Заголовок вылетает справа */}
        <motion.p variants={textItemVariants} className="text-4xl text-[#545454] text-start">
          About the shelter <br /> “Cozy House”
        </motion.p>
        
        {/* Первый абзац */}
        <motion.p variants={textItemVariants} className="text-[#4C4C4C] text-start">
          Currently we have 121 dogs and 342 cats on our hands and <br /> 
          statistics show that only 20% of them will find a family. The <br /> 
          others will continue to live with us and will be waiting for a lucky <br /> 
          chance to become dearly loved.
        </motion.p>
        
        {/* Второй абзац */}
        <motion.p variants={textItemVariants} className="text-[#4C4C4C] text-start">
          We feed our wards with the best food and make sure that they <br /> 
          do not get sick, feel comfortable (including psychologically) and <br /> 
          well. We are supported by 87 volunteers and 28 employees of <br /> 
          various skill levels. About 12% of the animals are taken by the <br />
          shelter staff. Taking care of the animals, they become attached <br /> 
          to the pets and would hardly ever leave them alone.
        </motion.p>
      </motion.div>

    </div>
  );
}
