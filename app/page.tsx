import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import TokenAddress from "@/components/TokenAddress";
import TooltipViewer from "@/components/TooltipViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-between max-w-full px-4 sm:px-8 md:px-12">
        <div className="flex flex-col items-center">
          <Image
            height={100}
            width={100}
            src="https://res.cloudinary.com/dexibw60d/image/upload/v1713391939/WhatsApp_Image_2024-04-17_at_12.02.10_AM_sjuyqw.jpg"
            alt="Tolyjeet photo"
            className="object-cover object-top rounded-full h-40 w-40 border-2 border-white mx-auto"
          ></Image>
          <p className="text-2xl font-medium mt-1">$TOLYJEET</p>
          <p>Bt9tUAuuoJTihrLvgK1kWErBJduaGEeQbF2VhAPHtYm4</p>
          <div className="mx-auto"></div>
        </div>
        <Intro />
        <HeroSection />
        <TooltipViewer />
        <div className="p-4">
          <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">JEET</span>
          </button>
        </div>
      </div>
    </main>
  );
}
