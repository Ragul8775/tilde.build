import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Header = () => {
  const services = [
    { title: "About", href: "/" },
    { title: "Projects", href: "/" },
    { title: "Services", href: "/" },
  ];
  return (
    <header className="absolute top-0 w-full py-6 px-8">
      <nav className="flex items-center justify-between">
        <div className="text-4xl font-base text-white font-garet">tilde.</div>
        <div className="hidden absolute  bottom-0 left-1/2 transform -translate-x-1/2 sm:flex gap-8 py-6">
          {services.map((service, index) => (
            <Link
              href={"/"}
              className="text-white/80 hover:text-white"
              key={index}
            >
              {`{ ${service.title} }`}
            </Link>
          ))}
        </div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-transparent text-white flex items-center space-x-2 px-4 sm:px-6 py-1 sm:py-2"
        >
          Contact Us
        </HoverBorderGradient>
      </nav>
    </header>
  );
};

export default Header;
