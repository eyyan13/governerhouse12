"use client";
import { VscChevronDown } from "react-icons/vsc";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

const navLinks = [
  { id: 1, title: "Home", Link: "/" },
  { id: 2, title: "Contact", Link: "/contact" },
  { id: 3, title: "About", Link: "/about" },
  { id: 4, title: "Sign Up", Link: "/signup" }
];

export default function Header() {
  const [open, setOpen] = useState(false);  // Mobile menu state
  // const [showMenu, setShowMenu] = useState(false);  // Controls mobile menu visibility

  return (
    <>
      {/* Banner Section */}
      <div className="bg-black w-full text-white flex justify-center items-center py-3 lg:gap-x-4 relative text-center">
        <p className="hidden text-center lg:block text-xs font-semibold">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p className="text-center lg:hidden font-semibold text-xs">
          Summer Sale For All Swim Suits upto OFF 50%!
        </p>
        <span className="underline text-center text-xs font-semibold">
          Shop Now
        </span>
        <span className="right-20 absolute lg:flex text-center items-center justify-center hidden text-xs">
          English <VscChevronDown />
        </span>
      </div>

      {/* Navbar Section */}
      <div className=" z-30 w-full bg-custom-blue  print:hidden mt-10">
        <div className="m-auto flex h-16 w-[95%] lg:w-[85%] justify-between items-center">
          {/* Logo and Left Side */}
          <div className="flex items-center">
            {/* Menu Icon (Visible on mobile) */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              <FiMenu size={24} />
            </button>

            <Link href="/" className="text-2xl tracking-wider font-semibold font-inter text-black ">
              Exclusive
            </Link>
          </div>

          {/* Navbar Links (Visible on desktop) */}
          <div className="hidden lg:flex space-x-9">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.Link}
                className="text-black text-lg px-4 "
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Icons (Cart, Heart, Search) */}
          <div className="flex justify-center items-center lg:gap-x-8">
  <div className="relative">
  <input 
    className="bg-gray-100 p-2 pr-16 pl-8 w-full hidden lg:block" 
    type="text" 
    placeholder="What are you looking for?" 
  />
  <CiSearch size={25} className="absolute right-2 top-1/2 transform -translate-y-1/2 " />
</div>
  <GoHeart size={22} className="hidden lg:block"/>
 <Link href={"/cart"}><MdOutlineShoppingCart size={25} /></Link>
  </div>

  

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-70 z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="bg-white w-3/4 h-full p-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold text-black">
              Your Brand
            </Link>
            <button onClick={() => setOpen(false)}>
              <RxCross1 size={24} className="text-black" />
            </button>
          </div>
          <ul className="mt-8 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.Link}
                  className="text-lg text-black block"
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
