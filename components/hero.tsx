import React from "react";
import Button from "./button";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function Hero() {
  return (
    <>
      {/* Preloader */}
      <div className=""></div>
      {/* Hero section */}
      <section className="bg-[url('/images/hero-bg-img.png')] min-h-screen bg-cover bg-center bg-no-repeat relative">
        {/* grid lines */}
        <div className="absolute inset-0 grid grid-cols-7">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="relative h-full">
              <div className="absolute top-0 right-0 h-full w-px bg-white/15" />
            </div>
          ))}
        </div>
        <div className="container flex flex-col min-h-screen relative z-20">
          {/* content */}
          <div className="pt-20 space-y-6 lg:pace-y-8">
            <p className="text-white text-3xl md:text-4xl max-w-157 font-medium leading-tight overflow-hidden">
              Blending strategy with design, we help you capture attention, cultivate a loyal audience, and drive real conversions. 
            </p>
            <Button className="bg-white rounded-full group">
              <span className="px-4.5 lg:px-5 font-semibold">Get started</span>
              <span className="size-11 flex items-center justify-center bg-primary rounded-full text-white group-hover:-rotate-45 duration-200 transition-transform">
                <RiArrowRightLongLine />
              </span>
            </Button>
          </div>
          <h1 className="font-bold text-[92px] sm:text-[120px] max-w-max mt-auto text-white lg:text-[170px] leading-snug">Studio Antenix</h1>
          {/* wrapper */}
          <div className="flex items-center justify-between text-white mb-4">
            <p className="text-sm">©2026 All Rights Reserved.</p>
            <p className="">(Scroll down)</p>
          </div>
        </div>
      </section>
    </>
  );
}