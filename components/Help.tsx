import Image from "next/image";
import Link from "next/link";
import Food from '@/public/food.svg'
import Trans from '@/public/transportation.svg'
import Bowls from '@/public/bowls-and-cups.svg'
import Shampoos  from '@/public/shampoos.svg'
import Toys  from '@/public/toys.svg'
import Helpes from "./ui/Helpes";
import Med from '@/public/medicines.svg'
import Collar from '@/public/collars-or-leashes.svg'
import Sleep from '@/public/sleeping-area.svg'
import Vitam from '@/public/vitamins.svg'



export default function Help() {
  return (
    <div className="flex flex-col gap-[60px] px-[87px] pb-25">
        <p className="text-[#545454] text-4xl text-center">How you can help <br /> our shelter</p>
    <div className="flex flex-col gap-[55px]">
        <div className="flex gap-[120px] justify-between items-center">
           <Helpes imageSrc={Food} name='Pet food'/>
           <Helpes imageSrc={Trans} name='Transportation'/>
           <Helpes imageSrc={Toys} name='Toys'/>
           <Helpes imageSrc={Bowls} name='Bowls and cups'/>
           <Helpes imageSrc={Shampoos} name='Shampoos'/>
        </div>
        <div className="flex gap-[120px] justify-around items-center">
           <Helpes imageSrc={Med} name='Vitamins'/>
           <Helpes imageSrc={Collar} name='Medicines'/>
           <Helpes imageSrc={Sleep} name='Collars / leashes'/>
           <Helpes imageSrc={Vitam} name='Sleeping areas'/>
        </div>
    </div>
    </div>
  );
}