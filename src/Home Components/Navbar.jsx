import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="text-white py-4 px-10 bg-[#1b1a2ea9] shadow-[0_10px_10px_-10px_rgba(9,5,29,0.171)] backdrop-blur-lg fixed right-0 left-0 z-[1]">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase px-7 text-[rgb(205,95,248)] transition ease-in-out duration-1000 hover:scale-150">
          <Link to="/" onClick={closeMenu}>
            Tayyab J.
          </Link>
        </h1>
        <ul className="hidden md:flex space-x-4 gap-10 text-xl">
          <li className="gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-500 cursor-pointer flex">
            <FaHome className="mt-1" />
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-500 cursor-pointer flex">
            <CgProfile className="mt-1" />
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-500 cursor-pointer flex">
            <GrProjects className="mt-1" />
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>{" "}
          </li>
          <li className="gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-500 cursor-pointer flex">
            <FaAddressCard className="mt-1" />
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
        </ul>
        <ul className="md:hidden">
          <button
            className="text-[rgb(205,95,248)] text-3xl "
            onClick={toggleMenu}
          >
            <FaBarsStaggered />
          </button>
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-transparent p-4 flex flex-col gap-5">
          <li className="gap-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 412"
              width="1rem"
              className="p-[1px]"
            >
              <path
                fill="#ffffff"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>{" "}
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="gap-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 412"
              width="1rem"
              className="p-[1px]"
            >
              <path
                fill="#ffffff"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="gap-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 412"
              width="1rem"
              className="p-[1px]"
            >
              <path
                fill="#ffffff"
                d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"
              />
            </svg>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="gap-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 412"
              width="1rem"
              className="p-[1px]"
            >
              <path
                fill="#ffffff"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
