import Link from "next/link";
import React from "react";
import { TbClock, TbAward } from "react-icons/tb";

export default function Assurance() {
  return (
    <div>
      <div className='cont py-24'>
      <div className='relative w-full lg:w-1/3 mx-auto flex flex-col justify-center items-center'>
          <div className='flex space-x-2'>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-700'></div>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-700'></div>
            <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-700'></div>
          </div>
          <h2 className='h2 mb-12 text-center'>
            The Smart Choice for Safe and Confident Driving
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <Link
            href='/'
            className='box border-2 border-transparent group hover:-translate-y-2 hover:border-primary-700 transition-all duration-500'
          >
            <h2 className='h2'>Professional and Experienced Instructors</h2>
            <p className="p3 my-4">
              Our team of registered ADI driving instructors have years of
              experience helping learners pass their driving test and become
              confident drivers. We are committed to helping you achieve the
              same success.
            </p>
            <span className="link group-hover:underline group-hover:text-primary-700">Find out more</span>
          </Link>
          <Link
            href='/'
            className='box border-2 border-transparent group hover:-translate-y-2 hover:border-primary-700 transition-all duration-500'
          >
            <h2 className='h2'>Flexible Scheduling</h2>
            <p className="p3 my-4">
            We offer flexible scheduling options to fit around your lifestyle.
              Whether you need training during the week, on weekends, or in the
              evenings, we can accommodate your schedule. Our instructors are
              available to work with you at a time and place that&apos;s
              convenient for you.
            </p>
            <span className="link group-hover:underline group-hover:text-primary-700">Find out more</span>
          </Link>
          <Link
            href='/'
            className='box border-2 border-transparent group hover:-translate-y-2 hover:border-primary-700 transition-all duration-500'
          >
            <h2 className='h2'>Competitive Pricing</h2>
            <p className="p3 my-4">
            We believe that high-quality driver training should be accessible
              to everyone, which is why we offer competitive pricing for our EDT
              training programs. We offer affordable rates and flexible payment
              options, so you can get the training you need without breaking the
              bank.
            </p>
            <span className="link group-hover:underline group-hover:text-primary-700">Find out more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
