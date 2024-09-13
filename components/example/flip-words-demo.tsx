import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsDemo() {
  const words = [
    "better",
    "faster",
    "stronger",
    "way more profitable",
    "way more fun to develop",
    "way more practical",
    "way more accessible",
    "way more secure",
    "way more reliable",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Web Apps are
        <FlipWords words={words} /> <br />
        than ever
      </div>
    </div>
  );
}
