import Link from "next/link";
import React from "react";
import { TbMail, TbPhone } from "react-icons/tb";
import contacts from "../data/contacts";

export default function Topbar() {
  return (
    <div className='bg-light-800 text-white'>
      <div className='cont py-1 flex justify-center gap-4'>
        <Link
          className='h3 text-base flex items-center gap-1 hover:underline'
          href={{ pathname: `tel:${contacts.tel}` }}
        >
          <TbPhone />
          <span>087 272 0764</span>
        </Link>
        <Link
          className='h3 text-base flex items-center gap-1 hover:underline'
          href={{ pathname: `mailto:${contacts.mail}` }}
        >
          <TbMail />
          <span>edtcarlessons@gmail.com</span>
        </Link>
      </div>
    </div>
  );
}
