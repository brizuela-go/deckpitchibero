import HeroHighlightDemo from "@/components/example/hero-highlight-demo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <HeroHighlightDemo />
      <Link
        className="flex justify-center items-center  flex-col px-4"
        href="/slides/1"
      >
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Comenzar la presentación
          </span>
        </button>
      </Link>
    </main>
  );
}
