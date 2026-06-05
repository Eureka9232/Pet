import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-4xl text-[#F1CDB3]">Cozy House</p>
        <p className="text-white">Shelter for pets in Boston</p>
      </div>
      <div className="flex gap-7">
        <Link href='' className="text-white  decoration-[#F1CDB3] decoration-2 underline-offset-6 underline">About the shelter</Link>
        <Link href='/OurPets' className="text-white decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">Our pets</Link>
        <Link href='' className="text-white decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">Help the shelter</Link>
        <Link href='' className="text-white decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">Contacts</Link>
      </div>
     </div>
    </div>
  );
}