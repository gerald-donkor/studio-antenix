"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Button from "./button";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function Hero() {
  useGSAP(() => {
    const split = SplitText.create(".loader-text", {
      type: "words, lines",
      mask: "lines",
    });
    const heroTitleSplit = SplitText.create(".hero-title", {
      type: "chars, lines",
      mask: "chars",
    });
    const heroTextSplit = SplitText.create(".hero-text", {
      type: "words, lines",
      mask: "lines",
    });
    gsap.set(".loader-text", { visibility: "visible" });
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });

    tl.from(split.words, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.25,
      ease: "power4.out",
    })
      .from(
        ".leader-text",
        {
          filter: "blur(10px)",
          ease: "power2.out",
        },
        "<",
      )
      .to({}, { duration: 0.5 }) // small pause
      .to(".loader-text", {
        y: -30,
        opacity: 0,
        ease: "power2.in",
      })
      .to(
        ".preloader-wrapper",
        {
          yPercent: -100,
          ease: "power4.inOut",
        },
        "-=0.2",
      )
      .from(
        ".line",
        {
          scaleY: 0,
          transformOrigin: "top center",
          stagger: 0.1,
          ease: "expo.out",
        },
        "-=0.2",
      )
      .from(
        heroTextSplit.words,
        {
          yPercent: 100,
          stagger: 0.05,
          ease: "power2.inOut",
        },
        "<",
      )
      .from(
        heroTitleSplit.chars,
        {
          xPercent: -100,
          stagger: 0.08,
          ease: "power2.Out",
        },
        "<",
      )
      .from(".hero-btn", {
        opacity: 0,
        y: 30,
        ease: "power2.out",
      },"-=75%");
  });
  return (
    <>
      {/* Preloader */}
      {/* <div className="preloader-wrapper h-screen z-60 fixed top-0 left-0 w-full bg-white flex items-center justify-center">
        <p className="loader-text font-bold text-3xl lg:text-6xl text-primary leading-normal invisible">
          Studio Antenix
        </p>
      </div> */}
      {/* Hero section */}
      <section className="bg-[url('/images/hero-bg-img.png')] min-h-screen bg-cover bg-center bg-no-repeat relative">
        {/* grid lines */}
        <div className="absolute inset-0 grid grid-cols-7">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="relative h-full">
              <div className="line absolute top-0 right-0 h-full w-px bg-white/15" />
            </div>
          ))}
        </div>
        <div className="container flex flex-col min-h-screen relative z-20">
          {/* content */}
          <div className="pt-20 space-y-6 lg:pace-y-8">
            <p className="text-white text-3xl md:text-4xl max-w-157 font-medium leading-tight overflow-hidden hero-text">
              Blending strategy with design, we help you capture attention,
              cultivate a loyal audience, and drive real conversions.
            </p>
            <Button className="bg-white rounded-full group hero-btn">
              <span className="px-4.5 lg:px-5 font-semibold">Get started</span>
              <span className="size-11 flex items-center justify-center bg-primary rounded-full text-white group-hover:-rotate-45 duration-200 transition-transform">
                <RiArrowRightLongLine />
              </span>
            </Button>
          </div>
          <h1 className="font-bold text-[92px] sm:text-[120px] max-w-max mt-auto text-white lg:text-[170px] leading-snug hero-title">
            Studio Antenix
          </h1>
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
