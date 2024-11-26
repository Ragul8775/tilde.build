"use client";
import React from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Header from "./Header";
import Image from "next/image";

const services = [
  "Web 2 Solutions",
  "Web 3 Solutions",
  "App Development",
  "Data Analytics",
  "UI & UX",
  "Q & A",
];

const servicesMob = [
  "Web 2 ",
  "Web 3 ",
  "App ",
  "Data Analytics",
  "UI & UX",
  "Q & A",
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center gap-4 w-full top-24 sm:top-0">
        <p className="font-poppins flex items-center gap-1 tracking-wider text-white font-light">
          <ChevronsLeft />
          SOFTWARE DEVELOPMENT STUDIO
          <ChevronsRight />
        </p>
        <div className="relative flex items-center flex-col">
          <h1 className="mb-6 text-6xl font-power metalic_gradient sm:text-[96px]">
            Crafting Digital
            <br />
            Experiences
          </h1>
          <p className="text-white/75 max-w-2xl mb-8 ">
            At Tilde, we craft pixel-perfect products that blend meticulous
            detail with the beauty of craftsmanship, leaving a lasting
            impression and elevating the user experience
          </p>

          <div className="flex justify-center mt-4">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white/5 text-white flex items-center space-x-2 px-6 py-3"
            >
              Coming Soon
            </HoverBorderGradient>
          </div>
          <div className="mt-12  hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[90%] sm:max-w-[100%] mx-auto">
            {services.map((service, index) => (
              <div
                className="rounded-full bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm flex gap-2 items-center"
                key={index}
              >
                <Image width={20} height={20} src="/tick.png" alt="ethereum" />
                {service}
              </div>
            ))}
          </div>
          <div className="mt-12  flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[90%] sm:max-w-[100%] mx-auto sm:hidden">
            {servicesMob.map((service, index) => (
              <div
                className="rounded-full bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm flex gap-2 items-center"
                key={index}
              >
                <Image width={20} height={20} src="/tick.png" alt="ethereum" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
