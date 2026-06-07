'use client'; // Обязательно для анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Импортируем motion и типы
import ProdCard from "./ui/ProdCard";
import Cat from '@/public/pets-katrine.svg';
import Lev from '@/public/button_arrow (1).svg';
import Dog from '@/public/pets-jennifer.svg';
import Dog2 from '@/public/pets-woody.svg';
import Sophia from '@/public/Sophia.svg';
import Timmy from '@/public/pets-timmy.svg';
import Charly from '@/public/pets-charly.svg';
import Scarlet from '@/public/pets-scarlet.svg';
import Freddie from '@/public/Freddie.svg';
import Paginato from '@/public/button_paginator.svg';
import Paginato2Min from '@/public/button_paginator--.svg';
import Paginato1Min from '@/public/button_paginator-.svg';
import Paginato2Plus from '@/public/button_paginator++.svg';
import Paginato1Plus from '@/public/button_paginator+.svg'; 

// Контейнер, который запускает каскадное появление всех карточек и кнопок
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // Быстрая задержка между карточками, чтобы сетка открывалась динамично
      delayChildren: 0.1,    // Небольшая пауза перед стартом анимации
    },
  },
};

// Анимация для заголовка, каждой карточки и кнопок пагинации
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 }, // Плавный вылет снизу вверх
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Наш фирменный плавный ease
    },
  },
};

export default function OurPetsList() { // Присвоили имя компоненту для сборки Next.js
  return (
    // Обернули весь блок в анимированный motion.div
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Сработает сразу или при минимальном докручивании
      viewport={{ once: true, amount: 0.05 }} // amount: 0.05 — анимация начнется мгновенно при заходе
      className="flex flex-col gap-[45px] items-center bg-[#F6F6F6] py-25"
    >
      
      {/* Анимированный заголовок */}
      <motion.p variants={itemVariants} className="text-4xl text-[#545454] text-center">
        Our friends who <br /> are looking for a house
      </motion.p>

      {/* Сетка с карточками */}
      <div className="grid grid-cols-4 gap-x-[40px] gap-y-[30px]">
        
        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Cat} 
            name="Katrine"
            type="Cat"
            breed="British Shorthair"
            age="6 months"
            description="Katrine is a beautiful girl with a charming personality. She is very playful and loves to cuddle up in your lap after a long day of chasing toys around the room."
            inoculations="calicivirus"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Dog} 
            name="Jennifer"
            type="Dog"
            breed="Labrador"
            age="2 months"
            description="Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Dog2} 
            name="Woody"
            type="Dog"
            breed="Golden Retriever"
            age="3 months"
            description="Woody is a very energetic and active puppy. He loves long walks, playing fetch with a tennis ball, and he is extremely friendly with kids and other pets."
            inoculations="adenovirus"
          /> 
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Sophia} 
            name="Sophia"
            type="Dog"
            breed="Shih Tzu"
            age="1 month"
            description="Sophia is a tiny and delicate pup who needs lots of love and attention. She enjoys being held and prefers quiet environments where she can sleep peacefully."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Timmy} 
            name="Timmy"
            type="Cat"
            breed="Bengal"
            age="4 months"
            description="Timmy is an incredibly curious and smart kitten. He loves high places, exploring every corner of the house, and he will amaze you with his playful tricks."
            inoculations="panleukopenia"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Charly} 
            name="Charly"
            type="Dog"
            breed="Jack Russell Terrier"
            age="8 months"
            description="Charly is a little bundle of joy and endless energy. He is highly trainable, loves learning new commands, and will be the perfect companion for active people."
            inoculations="rabies"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Scarlet} 
            name="Scarlet"
            type="Dog"
            breed="Spitz"
            age="5 months"
            description="Scarlet is a fluffy princess who loves being pampered. She enjoys gentle brushing sessions and loves showing off her beautiful coat during calm walks."
            inoculations="parvovirus"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProdCard 
            imageSrc={Freddie} 
            name="Freddie"
            type="Cat"
            breed="Maine Coon"
            age="7 months"
            description="Freddie is a gentle giant in training. Despite his large size, he has a very soft voice and a calm temperament. He gets along great with absolutely everyone."
            inoculations="rabies, calicivirus"
          />
        </motion.div>

      </div>

      {/* Пагинация (кнопки появятся по очереди слева направо в конце волны) */}
      <div className="flex gap-[20px]">
        <motion.div variants={itemVariants}>
          <Image 
            src={Paginato2Min}
            alt="В начало" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Image 
            src={Paginato1Min}
            alt="Назад" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Image 
            src={Paginato}
            alt="Текущая страница" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Image 
            src={Paginato1Plus}
            alt="Вперед" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Image 
            src={Paginato2Plus}
            alt="В конец" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </motion.div>
      </div>

    </motion.div>
  );
}
