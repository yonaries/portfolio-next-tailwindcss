"use client";
import Link from "next/link";
import React, { useState } from "react";
import sun from "../assets/images/icons8-sun-50.png";
import Image from "next/image";

const MobileNavBar = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <div className="">
      <div className="md:hidden fixed top-0 w-full p-5 flex justify-end space-x-5 bg-primaryBg bg-opacity-80 backdrop-blur-sm z-20">
        <button
          onClick={() => setIsOn(true)}
          className="px-3 py-1 text-sm text-secondary font-semibold bg-dusk border-2 border-neutral-600 rounded-full"
        >
          Menu
        </button>
        <div className="p-1 rounded-lg border-2 border-neutral-600">
          <Image src={sun} width={25} height={25} alt="change theme" />
        </div>
      </div>
      {isOn && (
        <div className="md:hidden w-full h-screen fixed p-5 z-20 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" h-fit top-5 text-neutral-300 border-2 border-neutral-700 bg-darker-dusk p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-sm text-neutral-500">
                Navigation
              </p>
              <p className="cursor-pointer" onClick={() => setIsOn(false)}>
                X
              </p>
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
