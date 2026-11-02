import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY 

export default function SearchBar() {
  const [query, setQuery] = useState(""); 
  const navigate = useNavigate();

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log(e.preventDefault)

    if (!query.trim()) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await res.json();

    if (data.results.length > 0) {
      navigate("/result",{
        state:{data}
      });
    } else {
      alert("Movie not found!");
    }
  };

  return (
 <div className="text-gray-100 border-amber-50">
    <form onSubmit={searchMovie} className="flex gap-2">
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-lg border outline-none"
      />

      <button type="submit"
        className="bg-red-900/15 text-white px-4 rounded-lg"
      >
        Search
      </button>
    
    </form>
</div>
  );
}