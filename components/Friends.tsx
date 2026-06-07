'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и типы
import Prav from '@/public/button_arrow.svg';
import Cat from '@/public/pets-katrine.svg';
import Lev from '@/public/button_arrow (1).svg';
import Dog from '@/public/pets-jennifer.svg';
import Dog2 from '@/public/pets-woody.svg';
import ProdCard from "./ui/ProdCard";

// Главный контейнер, который запускает каскад при попадании в поле зрения
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Карточки будут появляться друг за другом с задержкой в 0.12 сек
      delayChildren: 0.1,    // Микро-пауза перед стартом
    },
  },
};

// Анимация для элементов внутри (заголовок, стрелочки, карточки, кнопка)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Начинают снизу и прозрачные
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Наша фирменная плавная кривая скорости
    },
  },
};

export default function Friends() {
  return (
    <div className="bg-[#F6F6F6] ">
      {/* Превращаем внутренний контейнер в motion.div, чтобы контролировать скролл */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Анимация начнется только при скролле
        viewport={{ once: true, amount: 0.2 }} // Сработает один раз, когда блок покажется на 20%
        className="flex flex-col gap-[60px] items-center py-20 min-w-screen"
      >
        
        {/* Анимированный заголовок */}
        <motion.p variants={itemVariants} className="text-4xl text-[#545454] text-center">
          Our friends who <br />are looking for a house
        </motion.p>

        {/* Контейнер со стрелками и карточками */}
        <div className="flex items-center gap-25">
          
          {/* Левая стрелка */}
          <motion.div variants={itemVariants}>
            <Image
              src={Prav}
              alt="Фон"
              className="object-cover object-center cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
            />
          </motion.div>

          {/* Карточка 1 (Sophia) */}
          <motion.div variants={itemVariants}>
            <ProdCard 
              imageSrc={Cat} 
              name="Sophia"
              type="Dog"
              breed="Shih Tzu"
              age="1 month"
              description="Sophia is a tiny and delicate pup who needs lots of love and attention. She enjoys being held and prefers quiet environments where she can sleep peacefully."
            />
          </motion.div>

          {/* Карточка 2 (Timmy) */}
          <motion.div variants={itemVariants}>
            <ProdCard 
              imageSrc={Dog} 
              name="Timmy"
              type="Cat"
              breed="Bengal"
              age="4 months"
              description="Timmy is an incredibly curious and smart kitten. He loves high places, exploring every corner of the house, and he will amaze you with his playful tricks."
              inoculations="panleukopenia"
            />
          </motion.div>

          {/* Карточка 3 (Charly) */}
          <motion.div variants={itemVariants}>
            <ProdCard 
              imageSrc={Dog2} 
              name="Charly"
              type="Dog"
              breed="Jack Russell Terrier"
              age="8 months"
              description="Charly is a little bundle of joy and endless energy. He is highly trainable, loves learning new commands, and will be the perfect companion for active people."
              inoculations="rabies"
            /> 
          </motion.div>

          {/* Правая стрелка */}
          <motion.div variants={itemVariants}>
            <Image 
              src={Lev}
              alt="Описание" 
              className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
            />
          </motion.div>

        </div>

        {/* Нижняя кнопка */}
              <motion.button 
        initial={{ opacity: 0, y: 20 }} // Старт: скрыта
        whileInView={{ opacity: 1, y: 0 }} // Появление по скроллу
        viewport={{ once: true, amount: 0.1 }} // Срабатывает сразу
        transition={{ 
          duration: 0.1, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2 // Небольшая фиксированная задержка (всего 0.2 сек), чтобы кнопка не ждала все карточки
        }}
        className="w-[261px] h-[52px] bg-[#F1CDB3] hover:bg-[#ffc69f] text-[#545454] hover:text-[#292929] rounded-full font-medium transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg"
      >
        Get to know the rest
      </motion.button>

      </motion.div>
    </div>
  );
}
