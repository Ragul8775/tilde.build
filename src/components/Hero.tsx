import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Cover } from "./ui/cover";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="grainOverlay" />
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center gap-4 w-full">
        <p className="font-poppins flex items-center gap-1  tracking-wider text-white font-light">
          <ChevronsLeft />
          SOFTWARE DEVELOPMENT STUDIO
          <ChevronsRight />
        </p>
        <h1 className="mb-6 text-6xl font-power text-[#D6D6D6] sm:text-[96px]">
          Crafting Digital
          <br />
          Experience
        </h1>
        <p className="text-white/75 max-w-2xl mb-8">
          At Tilde, we craft pixel-perfect products that blend meticulous detail
          with the beauty of craftsmanship, leaving a lasting impression and
          elevating the user experience
        </p>
        {/*    <Cover className="text-4xl p-4">Coming Soon</Cover> */}

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-white/5 text-white  flex items-center space-x-2 "
        >
          Coming Soon
        </HoverBorderGradient>
      </main>
    </section>
  );
};

export default Hero;
