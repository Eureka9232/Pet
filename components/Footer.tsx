import Image from "next/image";
import Link from "next/link";
import FooterDog from '@/public/footer-puppy.svg'
import mail from '@/public/mail.svg'
import phone from '@/public/phone.svg'
import Bggrad from'@/public/footer-gradient-background.svg'
import Pin from '@/public/pin.svg'


export default function() {
    return(
        <div className="flex px-[40px] justify-between">
            <div     className="flex flex-col gap-[40px]"> 
                <p className="text-3xl text-white">For questions <br /> and suggestions</p>
                <div className="flex gap-[20px]">
                    <Image
          src={mail}
          alt="собака"
          className=""
        /> 
        <p className="text-[#F1CDB3]">email@shelter.com</p>
                </div>
                <div className="flex gap-[20px]">
                    <Image
          src={phone}
          alt="собака"
          className=""
        /> 
        <p className="text-[#F1CDB3]">+13 674 567 75 54</p>
                </div>
            </div>
            <div className="flex flex-col gap-[40px]"> 
                <p className="text-3xl text-white">We are waiting <br /> for your visit</p>
                <div className="flex gap-[20px]">
                    <Image
          src={Pin}
          alt="собака"
          className=""
        /> 
        <p className="text-[#F1CDB3]">1 Central Street, Bostonb <br /> (entrance from the store)</p>
                </div>
                <div className="flex gap-[20px]">
                    <Image
          src={Pin}
          alt="собака"
          className=""
        /> 
        <p className="text-[#F1CDB3]">18 South Park, London </p>
                </div>
            </div>
            <div>
                <Image
          src={FooterDog}
          alt="собака"
          className=""
        /> 
            </div>
        </div>
    )
}