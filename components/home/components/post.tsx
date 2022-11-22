import Link from "next/link";

type Props = {
  title: string;
};

const Post = (props: Props) => {
  return (
    <Link
      id="card"
      href="#"
      className="h-48 md:h-56 w-full transition-all md:hover:scale-110"
    >
      <article className="border-2 border-dusk bg-primaryBg hover:bg-dusk text-white p-5 h-full rounded-xl">
        <div className="space-y-2">
          <p className="text-lg font-medium">{props.title}</p>
        </div>
      </article>
    </Link>
  );
};

export default Post;
