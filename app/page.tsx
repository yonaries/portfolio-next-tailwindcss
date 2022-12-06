"use client";
import Profile from "../components/home/profile";
import PostsSection from "../components/home/posts-section";
import ProjectSection from "../components/home/projects-section";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-screen md:flex md:justify-center">
      <div className="scale-90 md:scale-100 md:w-1/2 md:pt-32 space-y-14 overflow-x-hidden md:overflow-x-visible">
        <Profile />
        <ProjectSection />
        <PostsSection />
      </div>
    </div>
  );
};

export default Home;
