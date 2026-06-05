import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import bgImage from '@/public/Start screen.svg'
import About from "@/components/About";
import Friends from "@/components/Friends";
import Help from "@/components/Help";
import Donation from "@/components/Donation";
import BgFooter from '@/public/Footer.svg'
import Bggrad from'@/public/footer-gradient-background.svg'
import FooterPuppy from '@/public/footer-puppy.svg'
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
      <div className="mt-10 px-10 container mx-auto">
        <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Фон"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <Header/>
      <Hero/>
      <About/>
      </div>
      <Friends/>
      <div  className="mt-10 px-10 container mx-auto">
      <Help/>
      </div>
      <Donation/>
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
  );
}
