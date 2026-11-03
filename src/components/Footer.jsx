import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-slate-900 via-cyan-800 to-gray-800 text-white mt-auto">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Movie<span className="text-yellow-400">Hub</span>
          </h2>

          <p className="text-gray-300 text-sm leading-6 max-w-sm mx-auto sm:mx-0">
            Your ultimate destination for movies, TV shows, trailers, celebrity
            news, and entertainment updates.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-400">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/Movies" className="hover:text-yellow-400 transition">
                Movies
              </Link>
            </li>

            <li>
              <Link to="/Shows" className="hover:text-yellow-400 transition">
                TV Shows
              </Link>
            </li>

            <li>
              <Link to="/Watch" className="hover:text-yellow-400 transition">
                Watch
              </Link>
            </li>

            <li>
              <Link to="/Community" className="hover:text-yellow-400 transition">
                Community
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-400">
            Contact Us
          </h2>

          <div className="space-y-3 text-gray-300 text-sm">
            <p>📧 support@moviehub.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-start gap-5 mt-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="YouTube" className="hover:text-red-400 transition">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 text-center px-4 py-5 text-gray-300 text-xs sm:text-sm">
        © {new Date().getFullYear()} MovieHub. All Rights Reserved.
        <p className="mt-1 text-gray-400">
          Made with ❤️ for movie lovers.
        </p>
      </div>

    </footer>
  );
}
