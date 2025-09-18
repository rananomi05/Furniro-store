"use client";
import { useState } from "react";
import Logo from "../Assets/Frame168.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-20">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src={Logo.src} className="h-8 w-auto" alt="Furniro" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 font-medium">
            <li><Link href="/" className="text-gray-900">Home</Link></li>
            <li><Link href="/Shop" className="text-gray-900">Shop</Link></li>
            <li><Link href="/About" className="text-gray-900 hover:text-gray-500">About</Link></li>
            <li><Link href="/Contact" className="text-gray-900">Contact</Link></li>
            <li><Link href="/Blogs" className="text-gray-900">Blogs</Link></li>
          </ul>
          <ul className="flex items-center ml-60 space-x-5">
            <li><Link href="/Dashboard"><FontAwesomeIcon icon={faCircleUser} className="text-xl" /></Link></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl cursor-pointer" /></li>
            <li><FontAwesomeIcon icon={faHeart} className="text-xl cursor-pointer" /></li>
            <li><Link href="/Cart"><FontAwesomeIcon icon={faCartShopping} className="text-xl cursor-pointer" /></Link></li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center space-x-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
          <FontAwesomeIcon icon={faHeart} className="text-lg" />
          <Link href="/Cart"><FontAwesomeIcon icon={faCartShopping} className="text-lg" /></Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4 font-medium">
            <li><Link href="/" className="block">Home</Link></li>
            <li><Link href="/Shop" className="block">Shop</Link></li>
            <li><Link href="/About" className="block">About</Link></li>
            <li><Link href="/Contact" className="block">Contact</Link></li>
            <li><Link href="/Blogs" className="block">Blogs</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
