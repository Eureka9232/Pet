'use client'; // Обязательно добавляем для работы анимации на клиенте

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Импортируем Framer Motion

export default function Header() {
  return (
    // Заменяем обычный div на motion.div и задаем параметры анимации
    <motion.div 
      initial={{ opacity: 0, y: -20 }} // Начало: скрыт и смещен на 20px вверх
      animate={{ opacity: 1, y: 0 }}   // Конец: плавно проявляется и встает на место
      transition={{ 
        duration: 0.8,                 // Длительность анимации (0.8 секунды)
        ease: [0.16, 1, 0.3, 1]        // Кастомная плавная кривая скорости (cubic-bezier)
      }}
      className=""
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-4xl text-[#F1CDB3]">Cozy House</p>
          <p className="text-white">Shelter for pets in Boston</p>
        </div>
        <div className="flex gap-7">
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#F1CDB3]">
            About the shelter
          </Link>
          <Link href='/OurPets' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Our pets
          </Link>
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Help the shelter
          </Link>
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Contacts
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
