import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const API_KEY = import.meta.env.VITE_API_KEY

export default function Home() {
  const [posts, setPosts] = useState()

  const postFun = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => {
    postFun()
  }, [])

  if (!posts) {
    return (
      <h1 className="min-h-screen flex justify-center items-center bg-slate-900 text-yellow-400 text-xl">
        Loading.....
      </h1>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800">
      <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 p-3 sm:p-5 md:p-8 text-gray-200">
        {posts.results.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ol>
    </div>
  )
}