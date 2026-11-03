import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Details() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const postFun = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    const data = await res.json();
    setPost(data);
  };

  useEffect(() => {
    postFun();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900 text-yellow-400 text-xl">
        Loading.....
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800 px-4 sm:px-6 md:px-10 py-6">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/"
          className="inline-block text-yellow-400 hover:text-white transition duration-300 font-semibold"
        >
          ← Back
        </Link>
      </div>

      {/* Movie Details */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">

        {/* Movie Poster */}
        <div className="w-full max-w-70 sm:max-w-87.5 md:w-2/5 md:max-w-md shrink-0">
          <img
            className="w-full h-auto object-cover rounded-xl shadow-xl shadow-black/40"
            src={
              post.poster_path
                ? `https://image.tmdb.org/t/p/w500${post.poster_path}`
                : "https://placehold.co/500x750?text=No+Poster"
            }
            alt={post.title || "Movie poster"}
          />
        </div>

        {/* Movie Information */}
        <div className="w-full text-white p-2 sm:p-4 md:p-6">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-serif font-bold mb-4 text-center md:text-left">
            {post.title}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-5">
            <span className="text-yellow-400 text-lg font-semibold">
              ★ {post.vote_average?.toFixed(1)}
            </span>

            <span className="text-gray-300 text-sm">
              ({post.vote_count} Votes)
            </span>
          </div>

          {/* Release Date */}
          <p className="text-gray-300 text-sm sm:text-base mb-4 text-center md:text-left">
            <span className="text-yellow-400 font-semibold">
              Release Date:
            </span>{" "}
            {post.release_date || "Not available"}
          </p>

          {/* Runtime */}
          <p className="text-gray-300 text-sm sm:text-base mb-4 text-center md:text-left">
            <span className="text-yellow-400 font-semibold">
              Runtime:
            </span>{" "}
            {post.runtime ? `${post.runtime} minutes` : "Not available"}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
            {post.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-slate-900/70 border border-cyan-500/40 px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">
            Overview
          </h2>

          <p className="text-gray-200 text-sm sm:text-base leading-7 text-justify">
            {post.overview}
          </p>

        </div>
      </div>
    </div>
  );
}