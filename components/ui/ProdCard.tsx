'use client';

import { useState } from "react";
import Image from "next/image";

// 1. Расширяем тип пропсов, добавляя все нужные характеристики
type ProductCardProps = {
  name: string;
  imageSrc: string;
  type: string;        // Например: "Dog"
  breed: string;       // Например: "Labrador"
  description: string; // Уникальное описание
  age: string;         // Например: "2 months"
  inoculations?: string; // Необязательное поле (если не передано, будет "none")
  diseases?: string;
  parasites?: string;
};

export default function ProdCard({ 
  name, 
  imageSrc, 
  type, 
  breed, 
  description, 
  age, 
  inoculations = "none", // Значение по умолчанию
  diseases = "none", 
  parasites = "none" 
}: ProductCardProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      {/* Карточка товара */}
      <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6 shadow-sm hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out">
        <Image 
          src={imageSrc}
          alt={name}
          className="w-full h-full overflow-hidden rounded-t-2xl"
          width={270}
          height={270}
        />
        <p className="text-[#545454] font-medium text-xl">{name}</p>
        <button 
          onClick={() => setIsOpen(true)}
          className="w-[187px] h-[52px] rounded-3xl border-2 border-[#F1CDB3] text-[#2F2F2F] hover:bg-[#F1CDB3] transition-colors duration-300 cursor-pointer"
        >
          Learn more
        </button>
      </div>

      {/* Всплывающее окно с динамическими данными */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>

          <div className="bg-white rounded-3xl p-6 md:p-12 max-w-[900px] w-full flex flex-col md:flex-row gap-11 relative z-10 shadow-2xl">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 md:-top-10 md:-right-10 w-10 h-10 border-2 border-[#F1CDB3] rounded-full flex items-center justify-center text-black hover:bg-[#F1CDB3] transition-colors duration-300 cursor-pointer text-xl"
            >
              ✕
            </button>

            <div className="w-full md:w-[500px] flex justify-center items-center">
              <Image 
                src={imageSrc} 
                alt={name} 
                width={500} 
                height={500} 
                className="object-contain max-h-[350px] md:max-h-[500px]"
              />
            </div>

            {/* Выводим данные из пропсов */}
            <div className="flex flex-col gap-6 max-w-[350px]">
              <div>
                <h3 className="text-4xl font-Georgia text-black mb-2">{name}</h3>
                <h4 className="text-xl font-Georgia text-black">{type} - {breed}</h4>
              </div>

              <p className="text-base text-black font-Georgia leading-relaxed">
                {description}
              </p>

              <ul className="flex flex-col gap-3 font-Georgia text-base text-black">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F1CDB3] rounded-full inline-block"></span>
                  <strong>Age:</strong> {age}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F1CDB3] rounded-full inline-block"></span>
                  <strong>Inoculations:</strong> {inoculations}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F1CDB3] rounded-full inline-block"></span>
                  <strong>Diseases:</strong> {diseases}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F1CDB3] rounded-full inline-block"></span>
                  <strong>Parasites:</strong> {parasites}
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
