"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `while(!succeed) try()); 

`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
