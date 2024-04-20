import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-between max-w-full px-4 sm:px-8 md:px-12">
        <div className="flex flex-col items-center">
          <p className="text-2xl p-2">
            I love chicken tikka masala!
          </p>
          <Image
            height={100}
            width={2000}
            src="https://res.cloudinary.com/dexibw60d/image/upload/v1713612307/pe0ongzwhehz99me0ixl.jpg"
            alt="JUST BUY YOU DUMBFUCK!"
            className="object-cover object-top border-2 border-white mx-auto"
          ></Image>
        </div>
      </div>
    </main>
  );
}
