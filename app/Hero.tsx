import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../public/car-2.webp";

export default function Hero() {
  return (
    <div className='relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 items-center'>
      <div className='cont py-24'>
        <div className='max-w-xl'>
          <h1 className='h1'>Pass Your Test<br/> <span className=" text-primary-700">First Time</span></h1>
          <p className='mt-4 mb-8 p1 text-light-600'>
            Get the essential training you need to pass your driving test with
            confidence. Our fully accredited ADI instructors and will guide you
            through what it takes to be a great driver.
          </p>
          <Link href='/' className='btn_1'>
            Book a Lesson
          </Link>
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
