import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center"> {/* Добавлено items-center для выравнивания по вертикали */}
        <div className="flex flex-col gap-1">
          <p className="text-4xl text-[#F1CDB3]">Cozy House</p>
          <p className="text-white">Shelter for pets in Boston</p>
        </div>
        <div className="flex gap-7">
          {/* Активная ссылка: линия уже на всю ширину */}
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#F1CDB3]">
            About the shelter
          </Link>
          
          {/* Остальные ссылки: линия плавно выезжает из центра при hover */}
          <Link href='/OurPets' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Our pets
          </Link>
          
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Help the shelter
          </Link>
          
          <Link href='' className="text-white relative after:absolute after:bottom-[-6px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#F1CDB3] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
}
