"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <code>
          throw new Error
          <Highlight className="text-black dark:text-white">
            ("Degree not Required");
          </Highlight>
        </code>
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" mt-6 text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl text-center mx-auto"
      >
        An entrepreneur's journey by <Highlight>Juan Brizuela</Highlight>
      </motion.p>
    </HeroHighlight>
  );
}
