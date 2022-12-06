import React from "react";
import Image from "next/image";
import { projectsData } from "../../assets/data/projectsData";
import Project from "./components/Project";
import { v4 as uuidv4 } from "uuid";
import arrow from "../../assets/images/icons8-right-arrow-100 (1).png";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="space-y-5">
      <p className="text-2xl md:text-3xl font-bold">Featured Projects</p>
      <div id="projects" className="space-y-3">
        {projectsData.map((project) => (
          <Project
            key={uuidv4()}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
      <div className="py-5 flex items-center space-x-3 max-w-fit cursor-pointer">
        <p className="text-secondary font-medium transition-all hover:text-primaryBg dark:hover:text-white hover:underline">
          More projects
        </p>
        <Image src={arrow} width={35} height={20} alt="more projects" />
      </div>
    </div>
  );
};

export default ProjectSection;
