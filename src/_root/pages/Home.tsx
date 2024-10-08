import BigLoader from "@/components/shared/BigLoader";
import PostCard from "@/components/shared/PostCard";
import TestimonialLable from "@/components/shared/TestimonialLable";
import { useGetRecentPost } from "@/lib/react-query/queriesAndMutation";
import { Models } from "appwrite";

const Home = () => {
  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPost();
  return (
    <div className="home-container">
      <div className="home-posts">
        <h2 className="h3-bold md:h2-bold text-left w-full px-4">
          Feed
        </h2>

        {isPostLoading || !posts || isErrorPosts ? (
          <BigLoader />
        ) : (
          <ul className="flex flex-1 flex-col w-full gap-3 ">
            {posts?.documents?.map((post: Models.Document) => (
              <li key={post.$id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
        <TestimonialLable />
      </div>
    </div>
  );
};

export default Home;
