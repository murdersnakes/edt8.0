import React from "react";
import lessons from "../../../data/lessons";
import slugify from "slugify";

export default function page({ params }) {
  const lesson = lessons.find(
    (x) => slugify(x.title).toLocaleLowerCase() == params.slug
  );
  return (
    <article className="pb-24 sm:py-0">
      <div>
        <p className='uppercase text-md font-semibold text-primary-600'>
          {lesson?.name}
        </p>
        <h1 className='uppercase font-head font-bold text-xl sm:text-2xl text-light-700'>
          {lesson?.title}
        </h1>
        <div
          className='prose prose-h2:text-light-800 prose-h3:text-secondary-800 prose-h3:underline prose-p:text-light-700 mt-10'
          dangerouslySetInnerHTML={{ __html: `${lesson?.body}` }}
        />
      </div>
    </article>
  );
}
