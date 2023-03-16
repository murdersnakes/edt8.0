"use client";

import { TbMenu2, TbX } from "react-icons/tb";
import Link from "next/link";
import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import slugify from "slugify";

import Topbar from "./Topbar";

const navLinks = [
  {
    name: "lessons",
  },
  {
    name: "pricing",
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
    <>
      <Topbar />

      <nav className='relative bg-white/25 py-6'>
        <div className='cont flex justify-between items-baseline'>
          <Link href='/' className='h1 text-lg hover:underline underline-offset-8'>
            edt<span className='text-primary-700'>carlessons.ie</span>
          </Link>
          <button
            onClick={handleMenuOpen}
            aria-label='open navigation'
            className='bg-light-300 p-2 rounded md:hidden'
          >
            {openMenu == false ? <TbMenu2 /> : <TbX />}
          </button>

          <ul className='hidden md:flex gap-2 lg:gap-6 text-sm p3 uppercase font-semibold font-head'>
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    className={
                      segment === link.name
                        ? "text-black underline underline-offset-8 text-primary-700"
                        : "text-light-500 hover:text-primary-700"
                    }
                    onClick={(e): void => setMenuOpen(false)}
                    href={{
                      pathname: `/${slugify(link.name).toLocaleLowerCase()}`,
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
