import React, { useState } from "react";
import SearchBar from "../Search/Search";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shows", path: "/Shows" },
    { name: "Watch", path: "/Watch" },
    { name: "Community", path: "/Community" },
  ];

  return (
    <nav className="bg-linear-to-b from-slate-900 to-gray-800 shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Main Navbar */}
        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-yellow-400 shrink-0"
          >
            Movie<span className="text-white">Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition duration-300 ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="order-3 w-full md:order-none md:w-auto md:flex-1 md:max-w-xs lg:max-w-sm">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl p-2 hover:text-yellow-400 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile / Tablet Navigation */}
        {menuOpen && (
          <div className="lg:hidden mt-5 border-t border-gray-600 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium py-2 px-3 rounded-lg transition duration-300 ${
                    location.pathname === link.path
                      ? "text-yellow-400 bg-white/10"
                      : "text-white hover:text-yellow-400 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
