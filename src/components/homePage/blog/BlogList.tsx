import ArticleOne from "./ArticleOne";
import { Post } from "@/types/post";
import ArticleTwo from "./ArticleTwo";
import ArticleThree from "./ArticleThree";
import AllArticles from "./AllArticles";

interface BlogListProps {
  postsList: Post[];
}

export default function BlogList({ postsList }: BlogListProps) {
  if (!postsList) return null;

  return (
    <div className="md:flex flex-row-reverse gap-4">
      <ArticleOne post={postsList[0]} />
      <div className="md:w-[calc(50%-8px)] h-auto shrink-0">
        <div className="hidden md:block h-[calc(100%-152px)] xl:h-[calc(100%-106px)] mb-4 xl:flex xl:gap-4.5">
          <ArticleTwo post={postsList[1]} />
          <ArticleThree post={postsList[2]} />
        </div>
        <AllArticles />
      </div>
    </div>
  );
}
