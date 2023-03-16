"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import slugify from "slugify";
import lessons from "../../data/lessons";
import Downloads from "./Downloads";
import Videos from "./Videos";

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      <div className='flex flex-col mt-12 sm:mt-0'>
        <h3 className='h3 mb-2 text-base'>Lessons</h3>
        <ul className='flex flex-col mb-12'>
          {lessons.map((lesson) => {
            return (
              <Link
                className={
                  segment === slugify(lesson.title).toLocaleLowerCase()
                    ? "py-1 h3 text-xl sm:text-sm  underline text-primary-800"
                    : "py-1 h3 text-xl sm:text-sm  hover:underline"
                }
                href={`/lessons/${slugify(lesson.title).toLocaleLowerCase()}`}
                key={lesson.id}
              >
                {lesson.name}:{" "}
                <span className='font-normal'>{lesson.title}</span>
              </Link>
            );
          })}
        </ul>
        <Downloads />
      </div>
    </>
  );
}
