import { TbStarFilled } from "react-icons/tb";
import testimonials from "../data/testimonialData";
import Carousel from "./Carousel/Carousel";


export default function Testimonials() {

  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='relative flex flex-col justify-start items-start'>
            <div className='flex space-x-2'>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-third-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-third-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-third-600'></div>
            </div>
            <h2 className='h2'>Join the Ranks of our Successful Graduates</h2>
            <p className='pt-4 p2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              perferendis veniam ab. Architecto, incidunt ullam praesentium,
              optio veritatis inventore magni facilis quas eum delectus
              cupiditate.
            </p>
          </div>

        </div>

        <div className='flex '>
          <Carousel loop>
          {testimonials.map((testimonial) => {
            return (
              <div key={testimonial.id} className='box flex min-w-[500px]'>
                <div className='w-16 h-16 bg-light-300 rounded-full flex-none'></div>
                <div className='ml-4'>
                  <div className='flex items-center text-third-600'>
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled />
                  </div>
                  <p className='h2'>&quot;{testimonial.excerpt}&quot;</p>
                  <p className='p3 py-3 text-sm'>
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className='uppercase h3 text-sm tracking-widest'>
                    {testimonial.student}
                  </p>
                </div>
              </div>
            );
          })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
