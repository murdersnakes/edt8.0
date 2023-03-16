import Link from "next/link";
import React from "react";
import { TbDownload } from "react-icons/tb";

export default function Downloads() {
  return (
    <div>
      <h3 className='h3 text-base'>Downloads</h3>
      <ul className="flex flex-col mt-2">
      
        <li>
          <Link
          className="relative my-1 bg-light-300 flex justify-start items-center group transition-all"
            href={{
              pathname: `https://drive.google.com/file/d/1Pj1Gu934x4r_311zUbQKUdPYReZqmJOB/view?usp=sharing`,
            }}
            target='_blank'
          >
            <button className="flex items-center justify-center border-r border-light-400 group-hover:bg-primary-700 h-12 aspect-square transition-all"><TbDownload className="group-hover:scale-125 group-hover:text-white transition-all" /></button>
            <span className="p3 mx-3">EDT Information Booklet</span>
          </Link>
        </li>
        <li>
          <Link
          className="relative my-1 bg-light-300 flex justify-start items-center group transition-all"
            href={{
              pathname: `https://drive.google.com/file/d/1Pj1Gu934x4r_311zUbQKUdPYReZqmJOB/view?usp=sharing`,
            }}
            target='_blank'
          >
            <button className="flex items-center justify-center border-r border-light-400 group-hover:bg-primary-700 h-12 aspect-square transition-all"><TbDownload className="group-hover:scale-125 group-hover:text-white transition-all" /></button>
            <span className="p3 mx-3">Reduced EDT Information Booklet</span>
          </Link>
        </li>
        <li>
          <Link
          className="relative my-1 bg-light-300 flex justify-start items-center group transition-all"
            href={{
              pathname: `https://drive.google.com/file/d/1yMueJcjq4WygE-hO-YpWXJ4GK1bxHE7y/view?usp=sharing`,
            }}
            target='_blank'
          >
            <button className="flex items-center justify-center border-r border-light-400 group-hover:bg-primary-700 h-12 aspect-square transition-all"><TbDownload className="group-hover:scale-125 group-hover:text-white transition-all" /></button>
            <span className="p3 mx-3">EDT Learner Logbook</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
