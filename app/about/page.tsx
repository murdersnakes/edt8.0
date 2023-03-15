import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import contacts from "../../data/contacts";
import heroImage from "../../public/car-back.webp";

export const metadata: Metadata = {
  title: "EDT | About",
};

export default function page() {
  return (
    <div className='relative'>
      <Image
        src={heroImage}
        alt='back of learner car'
        className='object-cover object-top w-full h-[50vh] grayscale bg-fixed'
        priority
        quality={25}
      />
      <div className='cont py-24'>
        <div className='flex flex-col -translate-y-56 box bg-white max-w-xl'>
          <h1 className='h1'>Welcome to EDT Car Lessons</h1>
          <p className='p1 mt-4'>
            EDT Car Lessons is a driving school run by accredited ADI instructor
            Damien O&apos; Reilly. With years of experience as a pro driver and
            instructor, Damien is dedicated to providing the highest quality
            driver education to his students. At EDT Car Lessons, we pride
            ourselves on our excellent pass success rate and positive feedback
            from our students.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col items-center'>
            <div className='w-36 h-36 rounded-full bg-light-400'></div>
            <h2 className='h2 mt-4'>Meet Damien O&apos; Reilly</h2>
            <Link href={contacts.tel} className='link'>
              087 272 0764
            </Link>
          </div>

          <div className='prose'>
            <h2>Damien O&apos; Reilly</h2>
            <p>
              Damien O&apos; Reilly is a highly skilled driver and instructor
              with a passion for helping students become safe, responsible, and
              confident drivers. With his expertise and years of experience,
              Damien has built a reputation as one of the best driving
              instructors in the industry.
            </p>
            <p>
              He is committed to providing a personalized, engaging, and
              effective teaching approach that meets the needs of each
              individual student.
            </p>
            <h3>Expertise and Experience</h3>
            <p>
              At EDT Car Lessons, we believe that our students deserve the best
              possible instruction, which is why we are proud to have Damien
              O&apos;Reilly as our lead instructor. Damien&apos;s extensive
              experience as a pro driver and instructor has allowed him to
              develop a unique teaching approach that emphasizes safety,
              responsibility, and confidence-building.
            </p>
            <p>
              His excellent pass success rate and positive feedback from
              students demonstrate his ability to deliver high-quality driver
              education.
            </p>
            <h4>Our Philosophy</h4>
            <p>
              At EDT Car Lessons, we believe that driving is a privilege that
              comes with great responsibility. Our philosophy is to teach our
              students the necessary skills and knowledge to become safe,
              responsible, and confident drivers. We are committed to providing
              a supportive and engaging learning environment that allows our
              students to achieve their driving goals and develop lifelong
              driving habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
