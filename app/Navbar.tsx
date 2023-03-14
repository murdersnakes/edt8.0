"use client";
import { TbPhone, TbMail, TbBrandFacebook } from "react-icons/tb";
import Link from "next/link";

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
  return (
    <nav className="shadow-xl">
      <div className='cont flex justify-between items-baseline'>
        <Link href='/' className='p2 py-3'>
          edt<span className="text-primary-700">carlessons.ie</span>
        </Link>
        <ul className='flex gap-6 text-xs uppercase font-semibold font-head'>
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className='p-3 border-4 border-transparent hover:border-b-primary-700'
              >
                <Link href={`/${link.name}`}>{link.name}</Link>
              </li>
            );
          })}
          <li className='p-3 border-4 border-transparent hover:border-b-primary-700'>
            <Link href='/'>
              <TbPhone size={15} />
            </Link>
          </li>
          <li className='p-3 border-4 border-transparent hover:border-b-primary-700'>
            <Link href='/'>
              <TbMail size={15} />
            </Link>
          </li>
          <li className='p-3 border-4 border-transparent hover:border-b-primary-700'>
            <Link href='/'>
              <TbBrandFacebook size={15} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
