import React from 'react';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <span
      onClick={() => window.scroll(0, 0)}
      className="flex justify-center header bg-gradient-to-r from-green-400 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-400 transition duration-500 ease-in-out text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 rounded-md"
    >
      Sk Movies
    </span>
  );
};

export default Header;