"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto w-full max-w-[1530px] px-4 py-2 sm:px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <img
              src="/logo-bg.png"
              alt="Logo"
              className="h-[45px] w-auto sm:h-[55px] md:h-[70px]"
            />
          </Link>

          <nav className="hidden items-center gap-6 sm:flex md:gap-10">
            <Link
              href="/"
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 md:text-base"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 md:text-base"
            >
              ABOUT
            </Link>

            <a
              href="#contact"
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500 md:text-base"
            >
              CONTACT
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer flex-col gap-1 sm:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-[2px] w-6 bg-black"></span>
            <span className="block h-[2px] w-6 bg-black"></span>
            <span className="block h-[2px] w-6 bg-black"></span>
          </button>
        </div>

        {isOpen && (
          <nav className="mt-4 flex flex-col items-center gap-4 sm:hidden">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500"
            >
              HOME
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500"
            >
              ABOUT
            </Link>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] transition hover:text-gray-500"
            >
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}