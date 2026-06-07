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
            className="object-cover object-center cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
            />
<ProdCard 
        imageSrc={Cat} 
        name="Sophia"
        type="Dog"
        breed="Shih Tzu"
        age="1 month"
        description="Sophia is a tiny and delicate pup who needs lots of love and attention. She enjoys being held and prefers quiet environments where she can sleep peacefully."
      />

      <ProdCard 
        imageSrc={Dog} 
        name="Timmy"
        type="Cat"
        breed="Bengal"
        age="4 months"
        description="Timmy is an incredibly curious and smart kitten. He loves high places, exploring every corner of the house, and he will amaze you with his playful tricks."
        inoculations="panleukopenia"
      />

      <ProdCard 
        imageSrc={Dog2} 
        name="Charly"
        type="Dog"
        breed="Jack Russell Terrier"
        age="8 months"
        description="Charly is a little bundle of joy and endless energy. He is highly trainable, loves learning new commands, and will be the perfect companion for active people."
        inoculations="rabies"
      /> 
            <Image 
            src={Lev}
            alt="Описание" 
            className="overflow-hidden cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out"
            />

            </div>
            <button className="w-[261px] h-[52px] bg-[#F1CDB3] hover:bg-[#ffc69f] text-[#545454] hover:text-[#292929] rounded-full font-medium transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
                Get to know the rest
            </button>


        </div>
    </div>
  );
}