import Link from "next/link";
import React from "react";
import { useTheme } from "../app/context/ThemeContext";

type Props = {};

const Footer = (props: Props) => {
  const { isDark: darkTheme } = useTheme();

  return (
    <div
      className={`w-screen dark:bg-primaryBg md:pt-14 flex justify-center text-neutral-500`}
    >
      <div className="w-full mx-5 py-5 md:w-1/2 flex justify-between md:justify-start md:space-x-48 border-t-2 border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col">
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            About
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            Blog
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            Snippets
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            Uses
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            Playlists
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="#"
          >
            Interests
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="https://linkedin.com/yonathan-dejene"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="https://github.com/yonaries"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="https://twitter.com/yonathanDejene"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            className="py-3 hover:text-black dark:hover:text-white transition-all"
            href="https://t.me/yonathanDejene"
            target="_blank"
          >
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
