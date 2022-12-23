"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../../app/context/ThemeContext";
import moon from "../../assets/images/icons8-moon-symbol-96.png";
import sun from "../../assets/images/icons8-sun-50.png";

const MobileNavBar = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const { isDark, switchTheme } = useTheme();

  return (
    <div>
      <div
        className={`${
          isDark && "dark"
        } md:hidden fixed top-0 w-full p-5 flex justify-end space-x-5 bg-white dark:bg-primaryBg bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-20`}
      >
        <button
          onClick={() => setIsOn(true)}
          className="px-3 py-1 text-sm text-primaryBg dark:text-secondary font-semibold bg-white dark:bg-dusk border-2 border-primaryBg dark:border-neutral-600 rounded-full"
        >
          Menu
        </button>
        <div
          onClick={() => switchTheme(isDark)}
          className="p-1 rounded-lg border-2 border-neutral-600"
        >
          <Image
            src={isDark ? sun : moon}
            width={25}
            height={25}
            alt="change theme"
          />
        </div>
      </div>
      {isOn && (
        <div className="md:hidden w-full h-screen fixed p-5 z-20 bg-white dark:bg-primaryBg bg-opacity-60 dark:bg-opacity-60 backdrop-blur-sm">
          <div className=" h-fit top-5 text-primaryBg dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-darker-dusk p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-sm text-neutral-500">
                Navigation
              </p>
              <p className="cursor-pointer" onClick={() => setIsOn(false)}>
                X
              </p>
            </div>
            <div className="flex flex-col divide-y-1 dark:divide-neutral-850 divide-neutral-200">
              {[
                ["Home", "#home"],
                ["Blog", "#blog"],
                ["Snippets", "#snippets"],
                ["Showcase", "#showcase"],
                ["Resume", "#resume"],
              ].map((route) => (
                <Link
                  key={uuidv4()}
                  className="cursor-pointer py-3"
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
