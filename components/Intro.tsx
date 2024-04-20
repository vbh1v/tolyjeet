"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Yo, it's ya boy Tolyjeet, the desi Jeet in town! I'm Anatoly's Indian fam, and I'm all about that tunak tunak life and dhinchak dhinchak vibes! Let's unite and build the Jeet squad on Solana. While our Russian cousin's busy with Solana and Ukraine drama, us South Asians gotta HODL it down! BUY, SPLURGE, and TUNAK TUNAK! And don't jeet because you can't jeet the boss!`;

export default function Intro() {
  return (
    <div className="text-center text-lg text-balance sm:w-3/4 ">
      <TextGenerateEffect words={words} />
    </div>
  );
}
