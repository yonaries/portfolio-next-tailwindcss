import React from "react";
import { projectsData } from "../../assets/data/projectsData";
import Profile from "./components/profile";
import Project from "./components/Project";
import Image from "next/image";
import arrow from "../../assets/images/icons8-right-arrow-100 (1).png";
import { posts } from "../../assets/data/postsData";
import Post from "./components/post";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="scale-90 md:scale-100 md:w-1/2 md:pt-32 space-y-10 md:space-y-20 overflow-x-hidden md:overflow-x-visible">
      <Profile />
      <div className="space-y-5">
        <p className="text-2xl md:text-3xl font-bold">Featured Projects</p>
        <div id="projects" className="space-y-3">
          {projectsData.map((project) => (
            <Project
              key={Date.now()}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
        <div className="py-5 flex items-center space-x-3 max-w-fit cursor-pointer">
          <p className="text-secondary font-medium transition-all hover:text-white hover:underline">
            More projects
          </p>
          <Image src={arrow} width={35} height={20} alt="more projects" />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-2xl md:text-3xl font-bold">Posts</p>
        <div className="space-y-3">
          <div
            id="projects"
            className="flex justify-between overflow-x-scroll md:overflow-x-visible space-x-5"
          >
            {posts.map((post) => (
              <Post key={Date.now()} title={post.title} />
            ))}
          </div>
          <div className="py-5 flex items-center space-x-3 max-w-fit cursor-pointer">
            <p className="text-secondary font-medium hover:text-white transition-all hover:underline">
              More posts
            </p>
            <Image src={arrow} width={35} height={20} alt="more projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
