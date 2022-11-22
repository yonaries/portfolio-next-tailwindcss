import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-screen md:pt-14 flex justify-center text-neutral-500">
      <div className="w-full mx-5 py-5 md:w-1/2 flex justify-between md:justify-start md:space-x-48 border-t-2 border-neutral-800">
        <div className="flex flex-col">
          <Link className="py-3 hover:text-white transition-all" href="#">
            About
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Blog
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Snippets
          </Link>
        </div>
        <div className="flex flex-col">
          <Link className="py-3 hover:text-white transition-all" href="#">
            Uses
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Playlists
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Intersets
          </Link>
        </div>
        <div className="flex flex-col">
          <Link className="py-3 hover:text-white transition-all" href="#">
            LinkedIn
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Github
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Twitter
          </Link>
          <Link className="py-3 hover:text-white transition-all" href="#">
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;