import React from "react";
import SearchBar from "../Search/Search";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="bg-gradient-to-b from-slate-900 via-cyan-800 to-gray-800 ">
        <div>
          <SearchBar />
          <div className="">
            <Link to="/">Home</Link>
            <Link to="Movies">Movies</Link>
            <Link to="Shows">Shows</Link>
            <Link to="Watch">Watch</Link>
            <Link to="Community">Community</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
