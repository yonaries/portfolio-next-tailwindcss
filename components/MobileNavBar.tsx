"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavBar = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <div className="">
      <div>
        <button className="absolute right-5 top-5 px-2 py-1 text-sm text-secondary bg-dusk border-2 border-neutral-600 rounded-full">
          Menu
        </button>
      </div>
      {isOn && (
        <div className="md:hidden w-full h-screen fixed p-5 z-20 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" h-fit top-5 text-neutral-300 border-2 border-neutral-700 bg-darker-dusk p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-sm text-neutral-500">
                Navigation
              </p>
              <p>X</p>
            </div>
            <div className="flex flex-col divide-y-2 divide-neutral-850">
              {[
                ["Home", "#home"],
                ["Blog", "#blog"],
                ["Snippets", "#snippets"],
                ["Showcase", "#showcase"],
                ["Resume", "#resume"],
              ].map((route) => (
                <Link
                  className="cursor-pointer py-3 hover:text-white transition-all hover:underline"
                  href={route[1]}
                >
                  {route[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
