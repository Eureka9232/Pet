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
        <p className="text-white  decoration-[#F1CDB3] decoration-2 underline-offset-6 hover:underline decoration-red-500}">About the shelter</p>
        <p className="text-white">Our pets</p>
        <p className="text-white">Help the shelter</p>
        <p className="text-white">Contacts</p>
      </div>
     </div>
    </div>
  );
}