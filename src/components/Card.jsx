import React from "react";
import { Link } from "react-router-dom";

function Card({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className="flex justify-center items-center "
    >
      <div className=" rounded-xl cursor-pointer shadow-lg shadow-black hover:shadow-yellow-400 ease-out md:ease-in ...">
        <div>
          <img
            className="rounded-t-xl "
            src={`https://image.tmdb.org/t/p/w500${post.poster_path}`}
            alt="{post.title}"
          />
        </div>
        <div className="">
          <div className="text-yellow-300 flex justify-center items-center">
            ★ {post.vote_average}
          </div>
          <div>
            <p className="flex justify-center items-center text-xl">
              {post.title}
            </p>
            <p className="flex justify-center items-center text-sm">
              {post.release_date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

// import React from 'react'

// export default function Card({ post }) {
//   const imageUrl = post.poster_path
//     ? `https://image.tmdb.org/t/p/w342${post.poster_path}`
//     : 'https://via.placeholder.com/342x513?text=No+Image'

//   return (
//     <li className="group flex-shrink-0 w-40 md:w-48 cursor-pointer">
//       <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/50 transition-transform duration-300 group-hover:scale-105 group-hover:z-10">
//         <img
//           src={imageUrl}
//           alt={post.title}
//           className="w-full aspect-[2/3] object-cover"
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
//           <div>
//             <p className="text-white text-sm font-semibold line-clamp-2">
//               {post.title}
//             </p>
//             <p className="text-red-400 text-xs font-bold mt-1">
//               ★ {post.vote_average?.toFixed(1)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </li>
//   )
// }

// import React from 'react'

// export default function Card({ post }) {
//   const imageUrl = post.poster_path
//     ? `https://image.tmdb.org/t/p/w500${post.poster_path}`
//     : 'https://via.placeholder.com/500x750?text=No+Image'

//   return (
//     <li className="group relative rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-lg shadow-black/30 ring-1 ring-white/10 hover:ring-amber-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-amber-500/20 hover:shadow-2xl">
//       <div className="relative aspect-[2/3] overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
//         <span className="absolute top-2 right-2 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full shadow">
//           ★ {post.vote_average?.toFixed(1)}
//         </span>
//       </div>

//       <div className="p-3">
//         <h2 className="text-sm font-semibold font-serif text-gray-100 truncate group-hover:text-amber-300 transition-colors">
//           {post.title}
//         </h2>
//         <p className="text-xs text-gray-400 mt-1">
//           {post.release_date?.slice(0, 4)}
//         </p>
//       </div>
//     </li>
//   )
// }
