import Image from "next/image";
import Link from "next/link";
import ProdCard from "./ui/ProdCard";
import Cat from '@/public/pets-katrine.svg'
import Lev from '@/public/button_arrow (1).svg'
import Dog from '@/public/pets-jennifer.svg'
import Dog2 from '@/public/pets-woody.svg'
import Sophia from '@/public/Sophia.svg'
import Timmy from '@/public/pets-timmy.svg'
import Charly from '@/public/pets-charly.svg'
import Scarlet from '@/public/pets-scarlet.svg'
import Freddie from '@/public/Freddie.svg'
import Paginato from '@/public/button_paginator.svg'
import Paginato2Min from '@/public/button_paginator--.svg'
import Paginato1Min from '@/public/button_paginator-.svg'
import Paginato2Plus from '@/public/button_paginator++.svg'
import Paginato1Plus from '@/public/button_paginator+.svg' 

export default function() {
    return(
        <div className="flex flex-col gap-[45px] items-center bg-[#F6F6F6] py-25">
            <p className="text-4xl text-[#545454] text-center">Our friends who <br /> are looking for a house</p>
            <div className="grid grid-cols-4 gap-x-[40px] gap-y-[30px]">
                <ProdCard imageSrc={Cat} name="Katrine"/>
                <ProdCard imageSrc={Dog} name="Jennifer"/>
                <ProdCard imageSrc={Dog2} name="Woody"/> 
            <ProdCard imageSrc={Sophia} name="Sophia"/>
            <ProdCard imageSrc={Timmy} name="Timmy"/>
            <ProdCard imageSrc={Charly} name="Charly"/>
            <ProdCard imageSrc={Scarlet} name="Scarlet"/>
            <ProdCard imageSrc={Freddie} name="Freddie"/>
            </div>
            <div className="flex gap-[20px]">
                <Image 
                src={Paginato2Min}
                alt="Описание" 
                className="overflow-hidden"
                />
                <Image 
                src={Paginato1Min}
                alt="Описание" 
                className="overflow-hidden"
                />
                <Image 
                src={Paginato}
                alt="Описание" 
                className="overflow-hidden"
                />
                <Image 
                src={Paginato1Plus}
                alt="Описание" 
                className="overflow-hidden"
                />
                <Image 
                src={Paginato2Plus}
                alt="Описание" 
                className="overflow-hidden"
                />
            </div>
        </div>
    )
}