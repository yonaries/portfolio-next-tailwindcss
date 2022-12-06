import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center bg-white dark:bg-dusk">
      <p className="text-5xl text-primaryBg dark:text-white font-bold">
        Loading
      </p>
    </div>
  );
};

export default Loading;
