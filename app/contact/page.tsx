import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { TbBrandFacebook, TbMail, TbPhone } from "react-icons/tb";
import contacts from "../../data/contacts";

export const metadata: Metadata = {
  title: "EDT | Contact",
};

export default function page() {
  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='bg-light-100 box'>
            <span className='p3 uppercase font-bold text-sm text-primary-600'>
              Contact Us
            </span>
            <h1 className='h2'>Get in Touch Today</h1>
            <p className='p3 mt-2'>
              If you have any questions about our driver education programs or
              would like to learn more about how we can help you become a safe
              and confident driver, please don&apos;t hesitate to get in touch
              with us. Our friendly and knowledgeable staff are always available
              to answer your questions and provide you with the information you
              need.
            </p>
            <div className='mt-6 flex'>
              <Link
                className='h2 transition-all duration-300 p-3 m-1 bg-light-200 rounded-xl hover:bg-primary-700 hover:text-white'
                href={{ pathname: contacts.tel }}
              >
                <TbPhone />
              </Link>

              <Link
                className='h2 transition-all duration-300 p-3 m-1 bg-light-200 rounded-xl hover:bg-primary-700 hover:text-white'
                href={{ pathname: contacts.mail }}
              >
                <TbMail />
              </Link>

              <Link
                target="_blank"
                className='h2 transition-all duration-300 p-3 m-1 bg-light-200 rounded-xl hover:bg-primary-700 hover:text-white'
                href={{ pathname: contacts.facebook }}
              >
                <TbBrandFacebook />
              </Link>
            </div>
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.7267357625105!2d-6.286458199999998!3d53.383938699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670de4448e7a2d%3A0xcd012f51abbcc032!2s1%20Fairways%20Green%2C%20Finglas%20East%2C%20Dublin%2C%20D11%20T0A9!5e0!3m2!1sen!2sie!4v1678975658949!5m2!1sen!2sie'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-96 sm:h-full box p-0'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
