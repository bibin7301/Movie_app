import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const API_KEY = import.meta.env.VITE_API_KEY 

function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
        const res = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)

      const data = await response.json();
      setShows(data.results);
    };

    fetchShows();
  }, []);

  return (
    <div className="p-6 bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8">
        Popular TV Shows
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {shows.map((show) => (
          <Card key={show.id} post={{ ...show, title: show.name }} />
        ))}
      </div>
    </div>
  );
}

export default Shows;