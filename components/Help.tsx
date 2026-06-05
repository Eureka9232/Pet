import Image from "next/image";
import Link from "next/link";
import Food from '@/public/food.svg'
import Trans from '@/public/transportation.svg'
import Bowls from '@/public/bowls-and-cups.svg'
import Shampoos  from '@/public/shampoos.svg'
import Toys  from '@/public/toys.svg'

export default function Help() {
  return (
    <div className="flex flex-col gap-[60px] px-[87px]">
        <p className="text-[#545454] text-4xl text-center">How you can help <br /> our shelter</p>
        <div className="flex gap-[120px] justify-between">
            <div className="">
                <Image 
                    src={Food}
                    alt="Описание" 
                    className="overflow-hidden"
                    />
                    <p>Pet food</p>
            </div>
            <div>
                <Image 
                    src={Trans}
                    alt="Описание" 
                    className="overflow-hidden"
                    />
                    <p>Transportation</p>
            </div>
            <div>
                <Image 
                    src={Toys}
                    alt="Описание" 
                    className="overflow-hidden"
                    />
                    <p>Toys</p>
            </div>
            <div>
                <Image 
                    src={Bowls}
                    alt="Описание" 
                    className="overflow-hidden"
                    />
                    <p>Bowls and cups</p>
            </div>
            <div>
                <Image 
                    src={Shampoos}
                    alt="Описание" 
                    className="overflow-hidden"
                    />
                    <p>Shampoos</p>
            </div>
        </div>
    </div>
  );
}