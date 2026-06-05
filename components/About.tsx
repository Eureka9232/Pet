import Image from "next/image";
import Link from "next/link";
import AboutPet from '@/public/about-pets.svg'

export default function About() {
  return (
        <div className=" justify-around flex mb-20">
            <div>
                <Image
          src={AboutPet}
          alt="пескот"
          className=""
        />
            </div>
            <div  className="flex flex-col gap-[25px] items-start">
                <p className="text-4xl text-[#545454] text-start">About the shelter <br /> “Cozy House”</p>
                <p className="text-[#4C4C4C] text-start">Currently we have 121 dogs and 342 cats on our hands and <br /> statistics show that only 20% of them will find a family. The <br /> others will continue to live with us and will be waiting for a lucky <br /> chance to become dearly loved.</p>
                <p className="text-[#4C4C4C] text-start">We feed our wards with the best food and make sure that they <br /> do not get sick, feel comfortable (including psychologically) and <br /> well. We are supported by 87 volunteers and 28 employees of <br /> various skill levels. About 12% of the <br /> animals are taken by the shelter staff. Taking care of the animals, they become attached <br /> to the pets and would hardly ever leave them alone.</p>
            </div>


        </div>
  );
}