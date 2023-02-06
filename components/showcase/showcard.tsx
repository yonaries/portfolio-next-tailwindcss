import Image, { ImageLoaderProps, ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ShowCard = (props: Props) => {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://cdn.pixabay.com/photo/2022/10/16/13/17/${src}`;
  };

  return (
    <Link
      id="card"
      href="#"
      className="w-full transition-all md:hover:scale-110"
    >
      <article className="min-h-80 border-2 border-dusk dark:bg-primaryBg hover:bg-neutral-50 dark:hover:bg-dusk text-primaryBg dark:text-white p-5 rounded-xl">
        <Image
          //   loader={imageLoader}
          src={
            "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg"
          }
          width={350}
          height={200}
          alt="Project Images"
          className="rounded-md"
        />
        <div className="space-y-2">
          <p className="text-lg font-medium">{"advadvadv"}</p>
          <p className="text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
            dolorem, doloribus molestias maiores possimus sint id ducimus odio
            quos.
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ShowCard;
