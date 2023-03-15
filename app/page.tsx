import Link from "next/link";
import React from "react";
import Areas from "./Areas";
import Assurance from "./Assurance";
import Banner from "./Banner";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EDT | Home',
};

export default function page() {
  return (
    <>
      <Hero />
      <Banner />
      <Assurance />
      <Areas />
      <Testimonials />
    </>
  );
}
