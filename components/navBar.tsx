import React from "react";
import Link from "next/link";
import sun from "../assets/images/icons8-sun-50.png";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const NavBar = () => {
  return (
    <div className="hidden md:flex w-screen fixed justify-center top-0 text-secondary py-8 bg-primaryBg bg-opacity-80 backdrop-blur-sm z-20">
      <div className="flex w-1/2 justify-between items-center">
        <div className="space-x-5 text-base font-medium flex">
          {[
            ["Home", "#home"],
            ["Blog", "#blog"],
            ["Snippets", "#snippets"],
            ["Showcase", "#showcase"],
            ["Resume", "#resume"],
          ].map((route) => (
            <Link
              key={uuidv4()}
              className="cursor-pointer hover:text-white transition-all hover:underline"
              href={route[1]}
            >
              {route[0]}
            </Link>
          ))}
        </div>
        <div className="p-1 rounded-lg border-2 border-neutral-600 cursor-pointer">
          <Image src={sun} width={25} height={25} alt="change theme" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
