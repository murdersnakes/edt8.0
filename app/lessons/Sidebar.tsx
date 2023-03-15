"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import slugify from "slugify";
import lessons from "../../data/lessons";
import Videos from "./Videos";

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex flex-col gap-10">
      <ul className='flex flex-col mr-24'>
        {lessons.map((lesson) => {
          return (
            <Link
              className={
                segment === slugify(lesson.title).toLocaleLowerCase()
                  ? "py-1 h3 text-sm underline text-primary-800"
                  : "py-1 h3 text-sm hover:underline"
              }
              href={`/lessons/${slugify(lesson.title).toLocaleLowerCase()}`}
              key={lesson.id}
            >
              {lesson.name}: <span className='font-normal'>{lesson.title}</span>
            </Link>
          );
        })}
      </ul>
      <Videos />
    </div>
  );
}
