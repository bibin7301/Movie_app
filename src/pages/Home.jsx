import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'


const API_KEY = import.meta.env.VITE_API_KEY 
export default function Home() {

  const [posts,setPosts]=useState()
  const postFun = async()=>{
    const res = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const data = await res.json()
    setPosts(data)
    
    
  }

  useEffect(()=>{postFun()},[])


  if(!posts) 
    return <h1>Loading.....</h1>
  return (
    <div>
      
      <ol className='grid grid-cols-5 gap-8 bg-gradient-to-b from-slate-900 via-cyan-800 to-gray-800 text-gray-200 text-xl font-semibold font-thin'>

        {posts.results.map((post)=> ( <Card key={post.id}post={post}/>))}
      </ol>
    </div>
  )
}





// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'

// const API_KEY = "863e7ec9a7db93034c00e2feda9e6e8e"

// export default function Home() {
//   const [posts, setPosts] = useState()
//   const [loading, setLoading] = useState(true)

//   const postFun = async () => {
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//       )
//       const data = await res.json()
//       setPosts(data)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     postFun()
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <div className="flex flex-col items-center gap-3">
//           <div className="w-10 h-10 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
//           <p className="text-red-500 text-sm font-medium tracking-[0.3em] uppercase">
//             Loading
//           </p>
//         </div>
//       </div>
//     )
//   }

//   const featured = posts.results[0]
//   const rest = posts.results.slice(1)

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero / Featured banner */}
//       <div className="relative h-[60vh] w-full overflow-hidden">
//         <img
//           src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
//           alt={featured.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

//         <div className="absolute bottom-10 left-6 md:left-12 max-w-xl">
//           <span className="inline-block text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
//             #1 Trending Now
//           </span>
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
//             {featured.title}
//           </h1>
//           <p className="mt-3 text-gray-300 text-sm md:text-base line-clamp-3 max-w-md">
//             {featured.overview}
//           </p>
//           <div className="mt-5 flex items-center gap-3">
//             <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition">
//               ▶ Play
//             </button>
//             <button className="bg-white/20 backdrop-blur text-white font-semibold px-5 py-2 rounded-md hover:bg-white/30 transition">
//               + Watchlist
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Row title */}
//       <div className="px-6 md:px-12 mt-8">
//         <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
//           Popular on Movieflix
//           <span className="h-px flex-1 bg-gradient-to-r from-red-600/60 to-transparent" />
//         </h2>

//         {/* Horizontal scroll row */}
//         <ol className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
//           {rest.map((post) => (
//             <Card key={post.id} post={post} />
//           ))}
//         </ol>
//       </div>
//     </div>
//   )
// }






// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'

// const API_KEY = "863e7ec9a7db93034c00e2feda9e6e8e"

// export default function Home() {
//   const [posts, setPosts] = useState()
//   const [loading, setLoading] = useState(true)

//   const postFun = async () => {
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//       )
//       const data = await res.json()
//       setPosts(data)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     postFun()
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
//           <p className="text-amber-300 text-lg font-semibold font-serif tracking-wide">
//             Loading movies...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 px-6 py-10">
//       <header className="mb-10 text-center">
//         <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 tracking-tight">
//           Popular Movies
//         </h1>
//         <p className="mt-2 text-gray-400 font-medium">
//           Trending picks everyone's watching right now
//         </p>
//         <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
//       </header>

//       <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
//         {posts.results.map((post) => (
//           <Card key={post.id} post={post} />
//         ))}
//       </ol>
//     </div>
//   )
// }







// import React, { useEffect, useState } from "react";
// import Card from "../components/Card";

// const API_KEY = "863e7ec9a7db93034c00e2feda9e6e8e";

// export default function Home() {
//   const [posts, setPosts] = useState();

//   const postFun = async () => {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//     );
//     const data = await res.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     postFun();
//   }, []);

//   if (!posts) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
//         <div className="w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//         <h1 className="mt-5 text-2xl font-semibold text-white">
//           Loading Movies...
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 px-6 py-10">
//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-3">
//         🎬 Popular Movies
//       </h1>

//       <p className="text-center text-gray-400 mb-10">
//         Discover the latest trending movies from around the world.
//       </p>

//       {/* Movie Grid */}
//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {posts.results.map((post) => (
//           <Card key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }