import Image from "next/image";
import React from "react";
import photo from "../../../assets/images/photo.png";
import arrow from "../../../assets/images/icons8-right-arrow-100 (1).png";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="md:flex w-full md:justify-between">
      <div className="py-5 md:hidden">
        <Image
          className="rounded-full w-12 "
          src={photo}
          alt="Image of Yonathan Dejene"
        />
      </div>
      <div className="md:w-2/3 w-full space-y-5">
        <div className="space-y-2">
          <p className="text-5xl font-bold">Yonathan Dejene</p>
          <p className="text-lg font-medium">Junior Software Engineer</p>
        </div>
        <div className="text-secondary space-y-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex tempore
            repellat nam dolor aliquid, voluptate, optio, sapiente adipisci aut
            soluta molestiae sint explicabo tempora at dolore est officia in
            dignissimos.
          </p>
          <div className="flex items-center space-x-3 max-w-fit cursor-pointer">
            <Link
              className="text-secondary hover:text-primaryBg dark:hover:text-white transition-all hover:underline"
              href="/boom"
            >
              Portion of my story
            </Link>
            <Image
              src={arrow}
              width={35}
              height={20}
              alt="Portion of my story"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-full hidden md:block w-12 md:w-28"
          src={photo}
          alt="Image of Yonathan Dejene"
        />
      </div>
    </div>
  );
};

export default Profile;
