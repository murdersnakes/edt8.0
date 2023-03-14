import Link from "next/link";
import React from "react";
import Assurance from "./Assurance";
import Banner from "./Banner";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function page() {
  return (
    <>
      <Hero />
      <Banner />
      <Assurance />
      <Testimonials />
    </>
  );
}
