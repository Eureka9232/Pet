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
        <Link href='..' className="text-[#545454]  decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">About the shelter</Link>
        <Link href='/OurPets' className="text-[#292929] decoration-[#F1CDB3] decoration-2 underline-offset-6 underline">Our pets</Link>
        <Link href='' className="text-[#545454] decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">Help the shelter</Link>
        <Link href='' className="text-[#545454] decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline">Contacts</Link>
      </div>
     </div>
    </div>
  );
}