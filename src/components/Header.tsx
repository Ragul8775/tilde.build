import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 w-full py-6 px-8">
      <nav className="flex items-center justify-between">
        <div className="text-4xl font-light text-white font-cormorant">
          tilde.
        </div>
        <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8 py-6">
          <Link href={"/"} className="text-white/80 hover:text-white">
            {`{ About }`}
          </Link>
          <Link href={"/"} className="text-white/80 hover:text-white">
            {`{ Projects }`}
          </Link>
          <Link href={"/"} className="text-white/80 hover:text-white">
            {`{ Services }`}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
