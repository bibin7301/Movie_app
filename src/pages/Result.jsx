import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function Result() {
  const [post, setPost] = useState();
  const { state } = useLocation();

  useEffect(() => {
    setPost(state?.data);
  }, [state]);

  if (!post) return <h1 className="min-h-screen flex justify-center items-center bg-slate-900 text-yellow-400 text-xl">Loading...</h1>;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-800 via-cyan-800 to-slate-900">
      <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 p-3 sm:p-5 md:p-8">
        {post.results.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ol>
    </div>
  );
}