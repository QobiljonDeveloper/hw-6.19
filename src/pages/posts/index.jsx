import React from "react";
import PostsView from "../../components/postsView";
import { useFetch } from "../../hooks/useFetch";

const Posts = () => {
  const { data, loading, error } = useFetch("/posts");
  return (
    <section>
      <div className="container">
        <h2 className="text-3xl text-[#0EA5E9]">Posts</h2>
        <PostsView data={data} loading={loading} error={error} />
      </div>
    </section>
  );
};

export default Posts;
