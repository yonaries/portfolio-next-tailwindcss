import ShowCard from "@ui/showcase/showcard";
import React from "react";

type Props = {};

const Showcase = (props: Props) => {
  return (
    <div
      className={`w-screen p-5 md:p-10 pt-40 md:flex md:flex-col md:items-center dark:bg-primaryBg bg-white dark:text-white text-primaryBg-screen`}
    >
      <div>
        <p className="text-5xl font-bold">Here are some of my works</p>
      </div>
      <div className="mt-20 gap-10 grid grid-col-1 md:grid-cols-3 h-fit">
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </div>
    </div>
  );
};

export default Showcase;
