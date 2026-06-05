import Image from "next/image";
import Link from "next/link";
import Prav from '@/public/button_arrow.svg'
import Cat from '@/public/pets-katrine.svg'
import Lev from '@/public/button_arrow (1).svg'
import Dog from '@/public/pets-jennifer.svg'
import Dog2 from '@/public/pets-woody.svg'
import ProdCard from "./ui/ProdCard";

export default function Friends() {
  return (
    <div className="bg-[#F6F6F6] ">
        <div className="flex flex-col gap-[60px] items-center py-20 min-w-screen">
            <p className="text-4xl text-[#545454] text-center">Our friends who <br />are looking for a house</p>
            <div className="flex items-center gap-25">
            <Image
            src={Prav}
            alt="Фон"
            className="object-cover object-center"
            />
                <ProdCard imageSrc={Cat} name="Katrine"/>
                <ProdCard imageSrc={Dog} name="Jennifer"/>
                <ProdCard imageSrc={Dog2} name="Woody"/> 
            <Image 
            src={Lev}
            alt="Описание" 
            className="overflow-hidden"
            />

            </div>
            <button className="bg-[#F1CDB3] text-[#292929] w-[261px] h-[52px] rounded-full">
                Get to know the rest
            </button>

        </div>
    </div>
  );
}