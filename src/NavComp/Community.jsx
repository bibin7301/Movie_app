import React from "react";


const API_KEY = import.meta.env.VITE_API_KEY 


function Community() {
  return (
    <div className="p-8 bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Movie Community
      </h1>

      <p className="text-gray-400">
        Discuss your favourite movies and TV shows with other movie lovers.
      </p>
    </div>
  );
}

export default Community;