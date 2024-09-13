"use client";

import BackgroundBeamsDemo from "@/components/example/background-beams-demo";
import BackgroundLinesDemo from "@/components/example/background-lines-demo";
import CanvasRevealEffectDemo from "@/components/example/canvas-reveal-effect-demo";
import CardHoverEffectDemo from "@/components/example/card-hover-effect-demo";
import CompareDemo from "@/components/example/compare-autoplay-demo";
import CoverDemo from "@/components/example/cover-demo";
import FlipWordsDemo from "@/components/example/flip-words-demo";
import LinkPreviewDemo from "@/components/example/link-preview-demo";
import MacbookScrollDemo from "@/components/example/macbook-scroll-demo";
import TextGenerateEffectDemo from "@/components/example/text-generate-effect-demo-2";
import TextHoverEffectDemo from "@/components/example/text-hover-effect-demo";
import TextHoverEffectDemo2 from "@/components/example/text-hover-effect-demo2";
import TextHoverEffectDemo3 from "@/components/example/text-hover-effect-demo3";
import TextRevealCardPreview from "@/components/example/text-reveal-card-demo";
import TimelineDemo from "@/components/example/timeline-demo";
import VortexDemo from "@/components/example/vortex-demo";
import WavyBackgroundDemo from "@/components/example/wavy-background-demo";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

type Props = {
  params: {
    number: string;
  };
};

const slides = [
  {
    number: 1,
    component: () => TextGenerateEffectDemo,
  },
  {
    number: 2,
    component: () => TimelineDemo,
  },
  {
    number: 3,
    component: () => LinkPreviewDemo,
  },
  {
    number: 4,
    component: () => CardHoverEffectDemo,
  },
  {
    number: 5,
    component: () => WavyBackgroundDemo,
  },
  {
    number: 6,
    component: () => CoverDemo,
  },
  {
    number: 7,
    component: () => VortexDemo,
  },
  {
    number: 8,
    component: () => CanvasRevealEffectDemo,
  },
  {
    number: 9,
    component: () => MacbookScrollDemo,
  },
  {
    number: 10,
    component: () => FlipWordsDemo,
  },
  {
    number: 11,
    component: () => TextHoverEffectDemo,
  },
  {
    number: 12,
    component: () => TextHoverEffectDemo2,
  },
  {
    number: 13,
    component: () => TextHoverEffectDemo3,
  },
  {
    number: 14,
    component: () => TextRevealCardPreview,
  },
  {
    number: 15,
    component: () => BackgroundBeamsDemo,
  },
  {
    number: 16,
    component: () => BackgroundLinesDemo,
  },
];

export default function ({ params }: Props) {
  const { number } = params;

  const slide = slides.find((slide) => slide.number === Number(number));

  if (!slide) {
    return (
      <div className="flex justify-center font-semibold text-4xl items-center min-h-screen animate-pulse">
        Slide not found 😢
      </div>
    );
  }

  const SlideComponent = slide.component();

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SlideComponent />
      <div
        className="fixed
        bottom-4 right-4 flex justify-center items-center
        gap-4 mt-4"
      >
        <Link href={number === "1" ? "/" : `/slides/${Number(number) - 1}`}>
          <button className="bg-slate-950 text-white px-4 py-2 rounded-md flex justify-center items-center gap-2">
            <GoChevronLeft />
          </button>
        </Link>
        {Number(number) !== slides.length && (
          <Link href={`/slides/${Number(number) + 1}`}>
            <button className="bg-slate-950 text-white px-4 py-2 rounded-md flex justify-center items-center gap-2">
              <GoChevronLeft className="transform rotate-180" />
            </button>
          </Link>
        )}
      </div>
      <p className="fixed bottom-4 left-4 text-sm mt-4 text-primary">
        Slide {number} of {slides.length}
      </p>
    </motion.div>
  );
}
