import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import moon from "../assets/images/icons8-moon-symbol-96.png";
import sun from "../assets/images/icons8-sun-50.png";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const { darkTheme, changeTheme } = useTheme();

  return (
    <div className="hidden md:flex w-screen fixed justify-center top-0 text-secondary py-8 bg-white dark:bg-primaryBg bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-20">
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
              className="cursor-pointer hover:text-primaryBg dark:hover:text-white transition-all hover:underline"
              href={route[1]}
            >
              {route[0]}
            </Link>
          ))}
        </div>
        <div
          onClick={() => changeTheme(darkTheme)}
          className="p-1 rounded-lg border-2 border-neutral-600 cursor-pointer"
        >
          <Image
            src={darkTheme ? sun : moon}
            width={25}
            height={25}
            alt="change theme"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
