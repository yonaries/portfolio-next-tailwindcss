import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="hidden md:flex w-screen fixed justify-center top-0 text-secondary py-8 bg-primaryBg bg-opacity-80 backdrop-blur-sm z-20">
      <div className="w-1/2 space-x-5 text-base font-medium flex">
        {[
          ["Home", "#home"],
          ["Blog", "#blog"],
          ["Snippets", "#snippets"],
          ["Showcase", "#showcase"],
          ["Resume", "#resume"],
        ].map((route) => (
          <Link
            className="cursor-pointer hover:text-white transition-all hover:underline"
            href={route[1]}
          >
            {route[0]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
