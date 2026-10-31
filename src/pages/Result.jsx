import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function Result() {
  const [post, setPost] = useState();
  const { state } = useLocation();

  useEffect(() => {
    setPost(state?.data);
  }, [state]);

  if (!post) return <h1>Loading</h1>;
  return (
    <div className="bg-gradient-to-b from-gray-800 via-cyan-800 to-slate-900  ">
      <ol className="grid grid-cols-5 gap-4">
        {post.results.map((post) => (
          <Card post={post} />
        ))}
      </ol>
    </div>
  );
}
