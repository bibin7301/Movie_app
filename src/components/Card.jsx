import React from "react";
import { Link } from "react-router-dom";

function Card({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className="group w-full max-w-70 mx-auto"
    >
      <div className="h-full overflow-hidden rounded-xl cursor-pointer bg-gray-900 shadow-lg shadow-black hover:shadow-yellow-400 transition-all duration-300 hover:-translate-y-2">

        {/* Movie Poster */}
        <div className="overflow-hidden">
          <img
            className="w-full aspect-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
            src={
              post.poster_path
                ? `https://image.tmdb.org/t/p/w500${post.poster_path}`
                : "https://placehold.co/500x750?text=No+Poster"
            }
            alt={post.title || post.name || "Movie poster"}
            loading="lazy"
          />
        </div>

        {/* Movie Details */}
        <div className="p-3 sm:p-4">

          {/* Rating */}
          <div className="text-yellow-400 flex justify-center items-center gap-1 text-sm sm:text-base font-semibold mb-2">
            ★ {post.vote_average?.toFixed(1) || "N/A"}
          </div>

          {/* Title */}
          <p className="text-white text-center text-sm sm:text-base md:text-lg font-semibold line-clamp-2 min-h-10">
            {post.title || post.name}
          </p>

          {/* Release Date */}
          <p className="text-gray-400 text-center text-xs sm:text-sm mt-2">
            {post.release_date || post.first_air_date || "Release date unavailable"}
          </p>

        </div>
      </div>
    </Link>
  );
}

export default Card;