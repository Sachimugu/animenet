import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Home Link */}
        <div className="flex items-center space-x-4">
          <div className="rounded-full p-2 flex items-center">
            {/* Your AnimeNet Logo */}
            <span className="text-red-500 text-lg font-bold">Anime</span>
            <span className="text-white font-semibold ml-1">Net</span>
          </div>
          <a href="/" className="text-white">
            Home
          </a>
        </div>

        {/* Search Bar - Visible on Desktop and Tablet */}
        <div className="lg:flex-grow lg:ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden sm:flex w-3/5 p-2 rounded-full border border-red-500 focus:outline-none focus:border-gray-300"
          />
        </div>

        {/* Login Button - Red Text Link */}
        <a href="/" className="text-red-500 hover:underline">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
