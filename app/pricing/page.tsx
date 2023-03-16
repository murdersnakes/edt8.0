import { Metadata } from "next";
import Image from "next/image";
import heroImage from "../../public/car-back.webp";
import Link from "next/link";
import React from "react";
import { TbAward, TbCheck } from "react-icons/tb";
import contacts from "../../data/contacts";
import stripeLinks from "../../data/payments";

export const metadata: Metadata = {
  title: "EDT | Pricing",
};

export default function page() {
  return (
    <div className='relative'>
      <Image
        src={heroImage}
        alt='edt hyundi i20 rear'
        className='h-[50vh] object-cover grayscale -z-10'
        priority
        quality={50}
      />
      <div className='cont -translate-y-36'>
        <section className=''>
          <div className='bg-white/75 backdrop-blur-md px-5 pt-12 py-24 rounded-2xl'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <div>
                <p className='inline-block sm:px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full text-primary-700'>
                  Pricing
                </p>
              </div>
              <h2 className='max-w-lg mb-6 h1 md:mx-auto'>
                Easy Online Payment Options
              </h2>
              <p className='p2'>
                When you choose EDT Car Lessons, you can trust that you will
                receive exceptional instruction from our experienced and
                certified instructors. We take pride in our high pass rate and
                the success of our students on their driving tests.
              </p>
            </div>
            <div className='grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto'>
              <div className='flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between pb-6 mb-6 border-b'>
                    <div>
                      <p className='text-sm font-bold tracking-wider uppercase font-head'>
                        Full EDT Course
                      </p>
                      <p className='text-4xl font-extrabold font-head'>€599</p>
                    </div>
                    <div className='flex items-center justify-center text-4xl rounded-full bg-light-50'>
                      <TbAward />
                    </div>
                  </div>
                  <div>
                    <p className='mb-2 font-bold tracking-wide'>Features</p>
                    <ul className='space-y-2'>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Full EDT training
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Hyundi i20 provided
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Pick-up & drop-off
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Official routes covered
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link
                    href={{ pathname: stripeLinks.fullCourse }}
                    className='btn_2 flex'
                  >
                    Pay for Course
                  </Link>

                  <p className='text-sm text-light-600 mt-4'>
                    Take the full EDT course with us and save!
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-between p-5 bg-white border rounded-2xl shadow-sm'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between pb-6 mb-6 border-b'>
                    <div>
                      <p className='text-sm font-bold tracking-wider uppercase font-head'>
                        Single Lesson
                      </p>
                      <p className='text-4xl font-extrabold font-head'>€55</p>
                    </div>
                    <div className='flex items-center justify-center text-4xl rounded-full bg-light-50'>
                      <TbAward />
                    </div>
                  </div>
                  <div>
                    <p className='mb-2 font-bold tracking-wide'>Features</p>
                    <ul className='space-y-2'>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          1 hour lesson
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Hyundi i20 provided
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Pick-up & drop-off
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <div className='mr-2'>
                          <TbCheck />
                        </div>
                        <p className='font-medium text-light-800'>
                          Official routes covered
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link
                    href={{ pathname: stripeLinks.single }}
                    className='btn_1 flex'
                  >
                    Pay for Lesson
                  </Link>

                  <p className='text-sm text-light-600 mt-4'>
                    Get the tools you need to succeed
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-8 mx-auto w-full text-center h3">looking for a voucher? <Link className="link" href="/vouchers">Click here</Link></p>
          </div>
        </section>
      </div>
    </div>
  );
}
