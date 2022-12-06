import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { posts } from "../../assets/data/postsData";
import arrow from "../../assets/images/icons8-right-arrow-100 (1).png";
import Post from "./components/post";

type Props = {};

const PostsSection = (props: Props) => {
  return (
    <div className="space-y-5">
      <p className="text-2xl md:text-3xl font-bold">Posts</p>
      <div className="space-y-3">
        <div
          id="posts"
          className="flex justify-between overflow-x-scroll md:overflow-x-visible space-x-5"
        >
          {posts.map((post) => (
            <Post key={uuidv4()} title={post.title} />
          ))}
        </div>
        <div className="py-5 flex items-center space-x-3 max-w-fit cursor-pointer">
          <p className="text-secondary font-medium hover:text-primaryBg dark:hover:text-white transition-all hover:underline">
            More posts
          </p>
          <Image src={arrow} width={35} height={20} alt="more projects" />
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
