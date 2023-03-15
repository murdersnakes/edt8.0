import React from 'react'
import lessons from '../../../data/lessons'
import slugify from 'slugify'

export default function page({params}) {

    const lesson = lessons.find((x) => slugify(x.title).toLocaleLowerCase() == params.slug)
  return (
    <article className="bg-light-100 p-8 rounded-2xl">
    <div>
      <p className='uppercase text-md font-semibold mb-4 text-emerald-600'>
        {lesson?.name}
      </p>
      <h1 className='uppercase font-head font-bold text-xl sm:text-2xl text-gray-700'>
        {lesson?.title}
      </h1>
      <div
        className='prose prose-h2:text-gray-700 prose-h3:text-gray-500 prose-h3:underline prose-p:text-neutral-600 mt-10'
        dangerouslySetInnerHTML={{ __html: `${lesson?.body}` }}
      />
    </div>
  </article>
  )
}
