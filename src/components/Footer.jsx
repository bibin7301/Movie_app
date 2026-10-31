import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-cyan-800 to-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MovieHub</h2>
          <p className="text-gray-300 text-sm">
            Your ultimate destination for movies, TV shows, trailers, celebrity
            news, and entertainment updates.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
            <li className="hover:text-yellow-400 cursor-pointer">TV Shows</li>
            <li className="hover:text-yellow-400 cursor-pointer">Watch</li>
            <li className="hover:text-yellow-400 cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-300">📧 support@moviehub.com</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>

          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-sky-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-500">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-violet-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} MovieHub. All Rights Reserved.
      </div>
    </footer>
  );
}