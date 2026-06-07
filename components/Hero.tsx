import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
        <div className="">
            <div className="flex flex-col gap-[48px] min-h-screen justify-center items-start">
                <p className="text-4xl text-white">Not only people <br /> need a house</p>
                <p className="text-[#CDCDCD]">We offer to give a chance to a little and nice puppy with an extremely <br /> wide and open heart. He or she will love you more than anybody else <br /> in the world, you will see!</p>
                <div className="h-[52px] w-[207px] bg-[#ffb681] hover:bg-[#ffa66a] rounded-full flex justify-center items-center transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
                <p className="text-[#242424] hover:text-[#292929] font-medium transition-colors duration-300">
                    Make a friend
                </p>
        </div>
        </div>
        </div>
  );
}