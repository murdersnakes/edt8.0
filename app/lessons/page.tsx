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
            <h2 className='h2'>
                Lesson Syllabus
            </h2>
            <p className='pt-4 p2'>
              Explore our lesson syllabus to better prepare you for a lesson. 
            </p>
          </div>
       
  );
}
