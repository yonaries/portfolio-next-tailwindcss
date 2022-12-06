"use client";
import Profile from "../components/home/profile";
import PostsSection from "../components/home/posts-section";
import ProjectSection from "../components/home/projects-section";
import Footer from "../components/footer";
import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import { useTheme } from "../context/ThemeContext";

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

export function App({ children }: { children: React.ReactNode }) {
  const { darkTheme } = useTheme();
  return (
    <html className={`${darkTheme && "dark"}`}>
      <head />
      <body className="dark:bg-primaryBg bg-white dark:text-white text-primaryBg">
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Home;
