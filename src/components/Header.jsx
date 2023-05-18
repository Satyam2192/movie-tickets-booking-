import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setNumLikes(numLikes + (liked ? -1 : 1));
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex items-center">
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </NavLink>
          {/* Search bar */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <input
              type="text"
              className="bg-gray-700 text-white rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search..."
            ></input>
            <button className="ml-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Search
            </button>
          </div>
          {/* Navigation links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <NavLink
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Home
              </NavLink>
              <NavLink
                to="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Trending Movies
              </NavLink>
              <NavLink
                to="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Offers
              </NavLink>
            </div>
          </div>
          {/* Like button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-none" onClick={handleLikeClick}>
              <img
                src={
                  liked
                    ? "https://www.svgrepo.com/show/474891/like.svg"
                    : "https://www.svgrepo.com/show/229012/like-good.svg"
                }
                className="h-9 w-9 bg-none"
                alt="Like"
              ></img>
              <span className="ml-2 text-white">{numLikes}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;