import Image from "next/image";
import Link from "next/link";
import Prav from '@/public/button_arrow.svg'
import Cat from '@/public/pets-katrine.svg'
import Lev from '@/public/button_arrow (1).svg'
import Dog from '@/public/pets-jennifer.svg'
import Dog2 from '@/public/pets-woody.svg'

export default function Friends() {
  return (
    <div className="bg-[#F6F6F6] ">
        <div className="flex flex-col gap-[60px] items-center py-20">
            <p className="text-4xl text-[#545454] text-center">Our friends who <br />are looking for a house</p>
            <div className="flex items-center gap-25">
                <Image
          src={Prav}
          alt="Фон"
          className="object-cover object-center"
        />
                <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6">
                    <Image 
                    src={Cat}
                    alt="Описание" 
                    className="w-full h-full overflow-hidden"
                    />
                    <p>Katrine</p>
                    <button className="w-[187px] h-[52px] rounded-3xl border border-[#F1CDB3] border-2   text-[#2F2F2F] hover:bg-[#F2D0C1]/10 transition-colors">
                    Learn more
                    </button>
                </div>
                <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6">
                    <Image 
                    src={Dog}
                    alt="Описание" 
                    className="w-full h-full overflow-hidden"
                    />
                    <p>Jennifer</p>
                    <button className="w-[187px] h-[52px] rounded-3xl border border-[#F1CDB3] border-2  text-[#2F2F2F] hover:bg-[#F2D0C1]/10 transition-colors">
                    Learn more
                    </button>
                </div>
                <div className="bg-white rounded-2xl gap-6 flex flex-col items-center pb-6">
                    <Image 
                    src={Dog2}
                    alt="Описание" 
                    className="w-full h-full overflow-hidden"
                    />
                    <p>Woody</p>
                    <button className="w-[187px] h-[52px] rounded-3xl border border-[#F1CDB3] border-2  text-[#2F2F2F] hover:bg-[#F2D0C1]/10 transition-colors">
                    Learn more
                    </button>
                </div>
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