import React from "react";
import Card from "../components/Card";


function Watch() {
  return (
    <div className="p-8 bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        My Watchlist
      </h1>

      <p className="text-gray-400">
        Your saved movies and TV shows will appear here.
      </p>
    </div>
  );
}

export default Watch;