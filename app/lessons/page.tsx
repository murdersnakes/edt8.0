import { Metadata } from "next";
import React from "react";
import lessons from "../../data/lessons";
import slugify from "slugify";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EDT | Lessons",
};

export default function page() {
  return (
    <div className='max-w-lg relative flex flex-col justify-start items-start'>
      <div className='flex space-x-2'>
        <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
        <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
        <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-primary-600'></div>
      </div>
      <span className='p3 uppercase font-bold text-primary-700'>
        The Official RSA Lesson Plans
      </span>
      <h2 className='h2'>Essential Driver Training (EDT) Syllabus</h2>
      <p className='pt-4 p2'>
        Our Essential Driver Training (EDT) syllabus is based on the official
        lesson plans provided by the Road Safety Authority (RSA) of Ireland.
        Each lesson plan is designed to help you become a safe and responsible
        driver on the road. Our expert instructors will guide you through each
        lesson, providing you with the knowledge and skills you need to succeed.
      </p>
      <p className='pt-4 p2'>
        The EDT program is divided into 12 modules, each focusing on a different
        aspect of driving. You&apos;ll learn everything from basic car control
        to more advanced driving techniques. With our syllabus, you can easily
        track your progress and prepare for each lesson. So, whether you&apos;re
        a beginner or an experienced driver looking to improve your skills, our
        EDT syllabus is the perfect tool to help you become a safe and confident
        driver on the road.
      </p>
    </div>
  );
}
