import Image from "next/image";
import Link from "next/link";
import Food from '@/public/food.svg'
import Trans from '@/public/transportation.svg'
import Bowls from '@/public/bowls-and-cups.svg'
import Shampoos  from '@/public/shampoos.svg'
import Toys  from '@/public/toys.svg'

type HelpesProps ={
  name:string;
  imageSrc:string;
};

export default function Helpes({name, imageSrc}: HelpesProps) {
  return (
    <div>
      <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
        <Image 
          src={imageSrc}
          alt="Описание" 
          className="overflow-hidden"
        />
        <p>{name}</p>
      </div>
    </div>
  );
}
