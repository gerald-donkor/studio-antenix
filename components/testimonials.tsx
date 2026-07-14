"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Button from "./button";
import { RiArrowRightLongLine, RiDoubleQuotesL } from "@remixicon/react";
import { testimonials } from "./constant/data";
import Image from "next/image";
import { useRef } from "react";

export default function Testimonials() {
  const testiRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const testiTitleSplit = SplitText.create(".testi-title", {
        type: "words,lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: testiRef.current,
          start: "top-center",
          // markers: true,
        },
      });
      tl.from(".testi-subtitle", {
        opacity: 0,
        ease: "power2.inOut",
      });
      tl.from(
        testiTitleSplit.words,
        {
          yPercent: 100,
          stagger: 0.03,
          ease: "power2.inOut",
        },
        "<",
      )
        .from(
          ".testi-btn",
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          ".testi-wrapper",
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          ".testi-img",
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "<",
        );
    },
    { scope: testiRef },
  );
  return (
    <section ref={testiRef} className="bg-primary-2 py-12 lg:py-20">
      <div className="container grid gap-11 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col space-y-10">
          {/* Wrapper */}
          <div>
            <p className="testi-subtitle">Trusted by growth stage teams</p>
            <h2 className="font-semibold text-3xl lg:text-4xl leading-tight testi-title">
              Every project begins with strategy, built for impact, and
              supported by a team that cares.
            </h2>
            <Button className="bg-black rounded-full text-white mt-8 group testi-btn">
              <span className="px-4">More about us</span>
              <span className="size-11 bg-white flex items-center justify-center rounded-full text-black group-hover:-rotate-45 duration-200 transition-transform">
                <RiArrowRightLongLine />
              </span>
            </Button>
          </div>
          {/* Wrapper */}
          <div className="mt-auto testi-wrapper">
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
        <div className="lg:order-first max-w-max mx-auto rounded-xl overflow-hidden testi-img">
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
