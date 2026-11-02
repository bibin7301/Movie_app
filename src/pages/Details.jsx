import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY 
export default function Details() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const postFun = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    );
    const data = await res.json();
    setPost(data);
  };

  useEffect(() => {
    postFun();
  }, []);
  if (!post) return <h1>Loading.....</h1>;
  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-800 to-gray-800 ">
      <Link to="/" className="text-yellow-400 ml-5">
        Back
      </Link>
      <div className="flex p-2">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${post.poster_path}`}
            alt=""
          />
        </div>

        <div className="text-white p-6">
          <h1 className=" text-4xl text-yellow-400 font-serif">{post.title}</h1>
          <p>{post.vote_average}</p>
          <p>{post.release_data}</p>
          <p>{post.overview}</p>
          <p>{post.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
