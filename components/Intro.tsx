"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hi, I am Tolyjeet, I jeet the fuck out of solana shit coins. I
drink lassi. Pancho friday ah! Oye papa ji! Andi mandi shandi, loda lassan!
`;

export default function Intro() {
  return (
    <div className="text-center text-lg text-balance">
      <TextGenerateEffect words={words} />
    </div>
  );
}
