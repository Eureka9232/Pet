import Image from "next/image";
import Link from "next/link";

export default function HeaderOurPets() {
  return (
    <div className="">
    <div className="flex justify-between items-center py-5">
      <div className="flex flex-col gap-1">
        <p className="text-4xl text-[#545454]">Cozy House</p>
        <p className="text-[#292929]">Shelter for pets in Boston</p>
      </div>
      <div className="flex gap-7">
         <Link href='/' className="text-[#292929] relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            About the shelter
          </Link>
          
          {/* Вторая ссылка (Активная): линия зафиксирована на всю ширину */}
          <Link href='/OurPets' className="text-[#292929] relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#F1CDB3]">
            Our pets
          </Link>
          
          <Link href='' className="text-[#292929] relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Help the shelter
          </Link>
          
          <Link href='' className="text-[#292929] relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Contacts
          </Link>
      </div>

     </div>
    </div>
  );
}