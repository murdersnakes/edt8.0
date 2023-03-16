import Link from "next/link";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandYoutube,
} from "react-icons/tb";

export default function Footer() {
  return (
    <footer aria-label='Site Footer' className='bg-white/50'>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
          <Link
            href='/'
            className='h1 text-lg hover:underline'
          >
            edt<span className='text-primary-700'>carlessons.ie</span>
          </Link>

            <p className='max-w-xs mt-4 text-light-500'>
              Maximising your road safety knowledge and behaviors helps you to
              develop the skills and confidence needed to share the road safely
              with others.
            </p>

            <ul className='flex gap-6 mt-8 text-2xl'>
              <li>
                <Link href='/'>
                  <TbBrandFacebook />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <TbBrandLinkedin />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <TbBrandYoutube />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <TbBrandInstagram />
                </Link>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
            <div>
              <p className='font-medium text-light-900'>Services</p>

              <nav aria-label='Footer Navigation - Services' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <Link
                      href='/lessons'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      EDT Lessons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Test Car Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/vouchers'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Vouchers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-light-900'>Company</p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Certification
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-light-900'>Helpful Links</p>

              <nav aria-label='Footer Navigation - Company' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      RSA Website
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Study Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className='font-medium text-light-900'>Legal</p>

              <nav aria-label='Footer Navigation - Legal' className='mt-6'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='text-light-700 transition hover:opacity-75'
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p className='text-xs text-light-500 mt-10'>
          &copy; {new Date().getFullYear()}. edtcarlessons.ie. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
