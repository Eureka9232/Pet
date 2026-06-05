import Image from "next/image";
import Link from "next/link";
import Prav from '@/public/button_arrow.svg'
import Cat from '@/public/pets-katrine.svg'
import Lev from '@/public/button_arrow (1).svg'
import Dog from '@/public/pets-jennifer.svg'
import Dog2 from '@/public/pets-woody.svg'

type ProductCardProps ={
  name:string;
  imageSrc:string
};


export default function ProdCard({name,imageSrc}:ProductCardProps) {
return(
        <div>
                            <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6">
                    <Image 
                    src={imageSrc}
                    alt="Описание" 
                    className="w-full h-full overflow-hidden"
                    />
                    <p>{name}</p>
                    <button className="w-[187px] h-[52px] rounded-3xl border border-[#F1CDB3] border-2  text-[#2F2F2F] hover:bg-[#F2D0C1]/10 transition-colors">
                    Learn more
                    </button>
                </div>
        </div>

)
}