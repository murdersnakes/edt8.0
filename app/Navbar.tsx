"use client";

import { TbMenu2, TbX } from "react-icons/tb";
import Link from "next/link";
import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import slugify from "slugify";

const navLinks = [
  {
    name: "lessons",
  },
  {
    name: "pricing",
  },
  {
    name: "about",
  },
  {
    name: "contact",
  },
  {
    name: "vouchers",
  },
];

export default function Navbar() {
  // menu handler
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenuOpen = (): void => {
    if (openMenu == false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  // nav highlight
  const segment = useSelectedLayoutSegment();

  return (
    <nav className=''>
      <div className='relative cont flex justify-between items-baseline'>
        <Link href='/' className='p2 py-3'>
          edt<span className='text-primary-700'>carlessons.ie</span>
        </Link>
        <button
          onClick={handleMenuOpen}
          aria-label='open navigation'
          className='bg-light-300 p-2 rounded md:hidden'
        >
          {openMenu == false ? <TbMenu2 /> : <TbX />}
        </button>

        <ul
          className={
            openMenu == true
              ? "z-10 absolute top-14 left-0 h-fit w-full bg-light-300/90 p-10 flex flex-col items-center md:hidden uppercase font-semibold font-head"
              : "hidden"
          }
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className='p-3 border-4 border-transparent hover:border-b-primary-700'
              >
                <Link href={`${slugify(link.name).toLocaleLowerCase()}`}></Link>
              </li>
            );
          })}
        </ul>

        <ul className='hidden md:flex gap-2 lg:gap-6 text-xs uppercase font-semibold font-head'>
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={
                    segment === link.name
                      ? "p-3 border-4 border-transparent border-b-primary-700"
                      : "p-3 border-4 border-transparent hover:border-b-light-400"
                  }
                  onClick={(e): void => setMenuOpen(false)}
                  href={`/${slugify(link.name).toLocaleLowerCase()}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
