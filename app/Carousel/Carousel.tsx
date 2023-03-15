"use client";

// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className='overflow-hidden py-12 my-12 bg-light-300 rounded-xl shadow-inner' ref={emblaRef}>
      <div className='flex'>{children}</div>
    </div>
  );
};
export default Carousel;
