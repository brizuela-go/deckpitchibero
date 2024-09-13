import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "An online payment processing for internet businesses. Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes.",
    link: "https://stripe.com",
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
    link: "https://nextjs.org",
  },
  {
    title: "VS Code",
    description:
      "A source-code editor developed by Microsoft for Windows, Linux, and macOS.",
    link: "https://code.visualstudio.com",
  },
  {
    title: "TypeScript",
    description:
      "An open-source language that builds on JavaScript by adding static type definitions.",
    link: "https://typescriptlang.org",
  },
  {
    title: "AWS",
    description:
      "A subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments.",
    link: "https://aws.amazon.com",
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    link: "https://tailwindcss.com",
  },
  {
    title: "Vercel",
    description:
      "A cloud platform for static sites and serverless functions that enables developers to host websites and web services that deploy instantly.",
    link: "https://vercel.com",
  },
  {
    title: "Framer Motion",
    description:
      "A production-ready motion library for React that enables developers to create animations and interactions.",
    link: "https://www.framer.com/motion",
  },
  {
    title: "Expo",
    description:
      "An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
    link: "https://expo.dev",
  },
];
