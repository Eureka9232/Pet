import Image from "next/image";
import Link from "next/link";
import HeaderOurPets from "@/components/HeaderOurPets";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Bggrad from '@/public/footer-gradient-background.svg'

export default function() {
    return(
        <div>
            <div className=" px-10 container mx-auto">
            <HeaderOurPets/>
        </div>
        <Products/>
            <div className="relative pt-10 px-10 h-auto w-full">
    <div className="absolute inset-0 -z-10">
        <Image
        src={Bggrad}
        alt="Фон"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        />
    </div>

    <div className="container mx-auto">
        <Footer />
    </div>
    </div>
        </div>
    )
}