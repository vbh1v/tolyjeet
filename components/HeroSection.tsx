"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center h-[20rem]">
      <TextRevealCard
        text="You can't jeet the boss"
        revealText="I can't jeet the boss."
      ></TextRevealCard>
    </div>
  );
}
