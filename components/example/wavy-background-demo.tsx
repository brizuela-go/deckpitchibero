"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Ai and the future of programming
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Use AI to write code, find bugs, and automate development tasks.
      </p>
    </WavyBackground>
  );
}
