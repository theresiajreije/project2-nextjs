"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto w-full max-w-[1530px] px-4 py-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div>
            <img
              src="/logo-bg.png"
              alt="Logo"
              className="h-[45px] w-auto sm:h-[55px] md:h-[70px]"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-10">
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer md:text-base"
            >
              HOME
            </a>
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer md:text-base"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer md:text-base"
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile Burger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 sm:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="block h-[2px] w-6 bg-black"></span>
            <span className="block h-[2px] w-6 bg-black"></span>
            <span className="block h-[2px] w-6 bg-black"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mt-4 flex flex-col items-center gap-4 sm:hidden">
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer"
            >
              HOME
            </a>
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 cursor-pointer"
            >
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}