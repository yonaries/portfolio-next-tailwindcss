import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  tech: string[];
  title: string;
  description: string;
};

const Project = (props: Props) => {
  return (
    <div
      id="card"
      className="p-1 bg-gradient-to-r  bg-fuchsia-400 from-yellow-300 rounded-xl transition-all md:hover:scale-110"
    >
      <Link href="#">
        <article className="rounded-lg min-h-fit bg-white dark:bg-primaryBg hover:bg-neutral-50 dark:hover:bg-dusk text-primaryBg dark:text-white p-10 w-full flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold" id="cardTitle">
              {props.tech.join(" ")}
            </p>
            <p className="text-2xl font-semibold">{props.title}</p>
            <p className="text-sm text-secondary">{props.description}</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Project;
