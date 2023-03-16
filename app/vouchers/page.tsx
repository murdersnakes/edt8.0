import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import stripeLinks from "../../data/payments";
import heroImage from '../../public/voucher.webp'

export const metadata: Metadata = {
  title: "EDT | Vouchers",
};

export default function page() {
  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <span className='p3 uppercase font-bold text-sm text-primary-700'>
              A Perfect Present for Any Occasion
            </span>
            <h1 className='h1 pt-1'>
              Give the Gift of Safe Driving with EDT Car Lessons Vouchers
            </h1>
            <p className='p1 pt-4'>
              Looking for a unique and thoughtful gift for a friend or family
              member? Give them the gift of safe driving with our EDT Car
              Lessons Vouchers! Choose any amount you&apos;d like, and
              we&apos;ll send a beautifully designed voucher straight to your
              email.
            </p>
            <p className='p2 pt-4 mb-12'>
              Our expert instructors provide the highest quality driving
              lessons, ensuring your loved one learns everything they need to
              know to be a safe and confident driver on the road. Whether
              they&apos;re a complete beginner or looking to brush up on their
              skills, our vouchers are the perfect present for any occasion.
              Purchase now and give someone you love the gift of driving!
            </p>
            <p></p>
            <p></p>
            <Link className='btn_1' href={{ pathname: stripeLinks.voucher }}>
              Buy a Voucher
            </Link>
          </div>

          <Image src={heroImage} alt="edt voucher for €250"/>
        </div>
      </div>
    </div>
  );
}
