import React from "react";
import Button from "./button";
import { RiArrowRightLongLine, RiDoubleQuotesL } from "@remixicon/react";
import { testimonials } from "./constant/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-primary-2 py-12 lg:py-20">
      <div className="container grid gap-11 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col space-y-10">
          {/* Wrapper */}
          <div>
            <p className="">Trusted by growth stage teams</p>
            <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
              Every project begins with strategy, built for impact, and
              supported by a team that cares.
            </h2>
            <Button className="bg-black rounded-full text-white mt-8 group">
              <span className="px-4">More about us</span>
              <span className="size-11 bg-white flex items-center justify-center rounded-full text-black group-hover:-rotate-45 duration-200 transition-transform">
                <RiArrowRightLongLine />
              </span>
            </Button>
          </div>
          {/* Wrapper */}
          <div className="mt-auto">
            {/* wrapper */}
            <div className="flex items-center justify-between pb-2">
              <p>Hear what our customers say</p>
              <p className="subtitle">See our work</p>
            </div>
            <hr className="text-black/20" />
            {/* wrapper */}
            <div className="grid md:grid-cols-2 md:gap-11 mt-3 space-y-8">
              {testimonials.map(({ id, desc, author }) => (
                // Card
                <div key={id}>
                  <span>
                    <RiDoubleQuotesL />
                  </span>
                  <p>{desc}</p>
                  <p className="text-black/75 mt-4">{author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="lg:order-first max-w-max mx-auto rounded-xl overflow-hidden">
          <Image
            src={"/images/testimonails-img.png"}
            alt="testimonials image"
            width={528}
            height={591}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
