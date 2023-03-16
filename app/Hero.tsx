import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../public/car-2.webp";

export default function Hero() {
  return (
    <div className='relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 items-center'>
      <div className='cont py-24'>
        <div className='max-w-lg mx-auto flex flex-col justify-start items-start  '>
          <div className='flex space-x-2'>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-secondary-600'></div>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-third-600'></div>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
          </div>
          <h2 className='h1'>
            Pass your test <br />
            first time
          </h2>
          <p className='pt-4 p1'>
            Get the essential training you need to pass your driving test with
            confidence. Damien O&apos; Reilly is a fully accredited ADI instructor and
            will guide you through what it takes to be a great driver.
          </p>
        </div>
      </div>
      <Image
        src={heroImage}
        alt='edt car lessons hyundi i20'
        priority
        quality={25}
        className='h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px] grayscale'
      />
    </div>
  );
}
