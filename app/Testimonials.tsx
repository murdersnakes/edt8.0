"use client";

import Link from "next/link";
import { useState } from "react";
import { TbStarFilled } from "react-icons/tb";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-3'>
          <div className='col-span-1 grid grid-cols-1 gap-4 my-10 translate-x-1'>
            <button
              onClick={(e): void => {
                e.preventDefault();
                setActiveTab(1);
              }}
              className={
                activeTab === 1
                  ? "box flex items-center justify-start border-l-8 border-primary-700 transition-all rounded-r-none shadow-none border-4 border-r-transparent bg-light-200"
                  : "box flex items-center justify-start border-l-8 border-transparent transition-all rounded-r-none shadow-inner-xl border-4 border-r-transparent"
              }
            >
              <div className='w-16 h-16 rounded-full bg-light-400'></div>
              <div className='p-4'>
                <div className='flex items-center justify-start text-third-600'>
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                </div>
                <span className='uppercase text-sm font-head font-bold'>
                  Mary Kenny |{" "}
                  <span className='text-light text-primary-700'>
                    passed 2022
                  </span>
                </span>
              </div>
            </button>
            <button
              onClick={(e): void => {
                e.preventDefault();
                setActiveTab(2);
              }}
              className={
                activeTab === 2
                  ? "box flex items-center justify-start border-l-8 border-primary-700 transition-all rounded-r-none shadow-none border-4 border-r-transparent bg-light-200"
                  : "box flex items-center justify-start border-l-8 border-transparent transition-all rounded-r-none shadow-inner-xl border-4 border-r-transparent"
              }
            >
              <div className='w-16 h-16 rounded-full bg-light-400'></div>
              <div className='p-4'>
                <div className='flex items-center justify-start text-third-600'>
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                </div>
                <span className='uppercase text-sm font-head font-bold'>
                  Mary Kenny |{" "}
                  <span className='text-light text-primary-700'>
                    passed 2022
                  </span>
                </span>
              </div>
            </button>
            <button
              onClick={(e): void => {
                e.preventDefault();
                setActiveTab(3);
              }}
              className={
                activeTab === 3
                  ? "box flex items-center justify-start border-l-8 border-primary-700 transition-all rounded-r-none shadow-none border-4 border-r-transparent bg-light-200"
                  : "box flex items-center justify-start border-l-8 border-transparent transition-all rounded-r-none shadow-inner-xl border-4 border-r-transparent"
              }
            >
              <div className='w-16 h-16 rounded-full bg-light-400'></div>
              <div className='p-4'>
                <div className='flex items-center justify-start text-third-600'>
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                  <TbStarFilled />
                </div>
                <span className='uppercase text-sm font-head font-bold'>
                  Mary Kenny |{" "}
                  <span className='text-light text-primary-700'>
                    passed 2022
                  </span>
                </span>
              </div>
            </button>
          </div>
          <div
            className="col-span-2 box shadow-none border-4 border-primary"
          >
            <div className={
              activeTab === 1
                ? "flex flex-col"
                : "hidden"
            }>
            <p className='h2 text-third-600'>
              &quot;I highly recommend them to anyone&quot;
            </p>
            <p className="p1">
              EDT Car Lessons has been a fantastic experience for me. Their
              instructors are highly trained and patient, which helped me to
              become a confident driver. I highly recommend them to anyone
              looking to learn how to drive.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
