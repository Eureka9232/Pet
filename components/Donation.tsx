'use client'; // Обязательно для анимации на клиенте

import DonatDog from '@/public/donation-dog.svg';
import Image from 'next/image';
import Card from '@/public/credit-card.svg';
import { motion, Variants } from 'framer-motion'; // Импортируем motion и типы

// Анимация для картинки с собакой (вылет снизу-слева)
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -30, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// Контейнер для правой текстовой части (управляет очередью появления)
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Задержка между строками текста и картой
      delayChildren: 0.15     // Микро-пауза перед стартом
    }
  }
};

// Анимация для каждого элемента внутри текстового блока
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Мягкое появление снизу вверх
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Donation() { // Добавил имя компоненту для порядка
  return (
    <div className='bg-[#F6F6F6] min-w-screen'>
      <div className='flex gap-[30px] justify-center items-center py-25'>
        
        {/* Левая часть: Картинка собаки, появляющаяся по скроллу */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='flex w-[605px] justify-center'
        >
          <Image 
            src={DonatDog}
            alt="Описание" 
            className="overflow-hidden"
          />
        </motion.div>

        {/* Правая часть: Контейнер с текстом и картой, анимируемый по скроллу */}
        <motion.div 
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col gap-[20px]'
        >
          {/* Заголовок */}
          <motion.p variants={textItemVariants} className='text-[#545454] text-4xl'>
            You can also <br /> make a donation
          </motion.p>
          
          {/* Подзаголовок */}
          <motion.p variants={textItemVariants} className='text-[#545454]'>
            Name of the bank / Type of bank account
          </motion.p>
          
          {/* Плашка с номером карты */}
          <motion.div variants={textItemVariants}>
            {/* Твои стили и hover-эффект transition-colors на Tailwind работают поверх идеально */}
            <div className='flex gap-[15px] bg-[#F1CDB3] h-[52px] rounded-xl px-[15px] w-[450px] py-[10px] items-center cursor-pointer transition-colors duration-300 hover:bg-[#ffc7a2]'>
              <Image 
                src={Card}
                alt="Описание" 
                className="overflow-hidden"
              />
              <p className='text-[#545454] text-2xl'>8380 2880 8028 8791 7435</p>
            </div>
          </motion.div>

          {/* Юридическая информация (дисклеймер) */}
          <motion.p variants={textItemVariants} className='text-[#B2B2B2] italic'>
            Legal information and lorem ipsum dolor sit amet, consectetur <br /> 
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac <br /> 
            diam. Praesent ultrices maximus tortor et vulputate. Interdum et<br /> 
            malesuada fames ac ante ipsum primis in faucibus.
          </motion.p>
          
        </motion.div>
      </div>
    </div>
  );
}
