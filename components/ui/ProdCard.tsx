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
        <div className="p-2"> {/* Небольшой паддинг, чтобы карточка не обрезалась при увеличении */}
                <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6 shadow-sm hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer">
                    <Image 
                    src={imageSrc}
                    alt={name} /* Лучше использовать name для доступности */
                    className="w-full h-full overflow-hidden rounded-t-2xl" /* Скруглил верх картинки под стать карточке */
                    width={270} /* Рекомендуется указать размеры для Next/Image */
                    height={270}
                    />
                    <p className="text-[#545454] font-medium text-xl">{name}</p>
                    <button className="w-[187px] h-[52px] rounded-3xl border-2 border-[#F1CDB3] text-[#2F2F2F] hover:bg-[#F1CDB3] transition-colors duration-300">
                    Learn more
                    </button>
                </div>
        </div>
)
}
