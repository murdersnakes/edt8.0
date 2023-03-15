import Link from "next/link";
import React from "react";
import { TbClock, TbAward } from "react-icons/tb";

export default function Assurance() {
  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='relative flex flex-col justify-start items-start'>
            <div className='flex space-x-2'>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
            </div>
            <h2 className='h2'>
              The Smart Choice for Safe and Confident Driving
            </h2>
            <p className='pt-4 p2'>
              We understand that driving can be intimidating, but with our EDT
              Car Lessons program, you can feel safe and confident behind the
              wheel. Our experienced instructors will guide you every step of
              the way, helping you become a skilled and responsible driver.
            </p>
          </div>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <Link
            href='/'
            className='flex flex-col justify-center items-center text-center rounded-2xl p-8 bg-light-300/25 hover:bg-light-300/75 transition-all duration-500 group hover:-translate-y-2'
          >
            <h2 className='h3 font-bold'>
              Professional and Experienced Instructors
            </h2>
            <p className='p3 my-4 text-light-700 line-clamp-4'>
              Our team of registered ADI driving instructors have years of
              experience helping learners pass their driving test and become
              confident drivers. We are committed to helping you achieve the
              same success.
            </p>
            <span className='link group-hover:underline group-hover:text-primary-700'>
              Find out more
            </span>
          </Link>
          <Link
            href='/'
            className='flex flex-col justify-center items-center text-center rounded-2xl p-8 bg-light-300/25 hover:bg-light-300/75 transition-all duration-500 group hover:-translate-y-2'
          >
            <h2 className='h3 font-bold'>Flexible Scheduling</h2>
            <p className='p3 my-4 text-light-700 line-clamp-4'>
              We offer flexible scheduling options to fit around your lifestyle.
              Whether you need training during the week, on weekends, or in thev
              evenings, we can accommodate your schedule. Our instructors are
              available to work with you at a time and place that&apos;s
              convenient for you.
            </p>
            <span className='link group-hover:underline group-hover:text-primary-700'>
              Find out more
            </span>
          </Link>
          <Link
            href='/'
            className='flex flex-col justify-center items-center text-center rounded-2xl p-8 bg-light-300/25 hover:bg-light-300/75 transition-all duration-500 group hover:-translate-y-2'
          >
            <h2 className='h3 font-bold'>Competitive Pricing</h2>
            <p className='p3 my-4 text-light-700 line-clamp-4'>
              We believe that high-quality driver training should be accessible
              to everyone, which is why we offer competitive pricing for our EDT
              training programs. We offer affordable rates and flexible payment
              options, so you can get the training you need without breaking the
              bank.
            </p>
            <span className='link group-hover:underline group-hover:text-primary-700'>
              Find out more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
