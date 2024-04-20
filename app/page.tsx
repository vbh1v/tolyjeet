import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import WebsiteLinks from "@/components/Links";
import MarqueeComponent from "@/components/MarqueeComponent";
import Starfield from "@/components/StarField";
import TokenAddress from "@/components/TokenAddress";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col">
      <main className="flex items-center justify-center h-full">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <div className="flex flex-col items-center justify-between max-w-full px-4 sm:px-8 md:px-12">
          <div className="flex flex-col items-center">
            <Image
              height={100}
              width={100}
              src="https://res.cloudinary.com/dexibw60d/image/upload/v1713391939/WhatsApp_Image_2024-04-17_at_12.02.10_AM_sjuyqw.jpg"
              alt="Tolyjeet photo"
              className="object-cover object-top rounded-full h-40 w-40 border-2 border-white mx-auto"
            ></Image>
            <p className="text-2xl font-medium mt-1">TOLYJEET $TOLY</p>
            <TokenAddress />
            <div className="mx-auto"></div>
          </div>
          <WebsiteLinks />
          <Intro />
          <HeroSection />
        </div>
      </main>
      <MarqueeComponent />
    </div>
  );
}
