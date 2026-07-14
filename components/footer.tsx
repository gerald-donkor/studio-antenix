"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import {
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Link from "next/link";
import React, { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const textSplit = SplitText.create(".footer-text", {
        type: "chars,lines",
        mask: "chars",
      });
      const tl = gsap.timeline({
        default: { duration: 1 },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top-center",
          // markers: true,
        },
      });

      tl.from(".footer-top", {
        opacity: 0,
        ease: "power2.inOut",
      })
        .from(
          ".footer-bottom",
          {
            opacity: 0,
            stagger: 0.03,
            ease: "power2.inOut",
          },
          "<+0.3",
        )
        .from(
          textSplit.chars,
          {
            xPercent: -100,
            stagger: 0.03,
            ease: "power2.inOut",
          },
          "<",
        );
    },
    { scope: footerRef },
  );
  return (
    <footer ref={footerRef} className="bg-secondary text-white">
      <div>
        {/* Footer top */}
        <div className="container grid lg:grid-cols-[1fr_0.6fr] divide-x divide-white/15 footer-top">
          {/* wrapper */}
          <div className="py-7 pr-8">
            <p>{"Let's get in touch"}</p>
            <h2 className="font-semibold text-3xl lg:text-4xl">
              design@studioantenix.com
            </h2>
            {/* wrapper */}
            <div className="flex items-center justify-between mt-8">
              <p>(Social media)</p>
              <div className="flex items-center gap-3">
                {[RiTwitterXLine, RiInstagramLine, RiLinkedinFill].map(
                  (Icon, idx) => (
                    <Link
                      href={"#"}
                      key={idx}
                      className="hover:text-primary transition-colors"
                    >
                      <Icon size={20} />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
          {/* spacer */}
          <div className="py-7 pl-8" />
        </div>
        <hr className="text-white/9" />
        {/* Footer bottom */}
        <div className="container pt-24 lg:pt-28 pb-6 footer-bottom">
          {/* List */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* our office */}
            <div className="space-y-3">
              <p className="text-xl font-semibold">(Our Office)</p>
              <p>112 Bloor Street West, Toronto, ON M5S 1T8, Canada</p>
            </div>
            {/* navigation */}
            <div className="grid gap-2">
              {["Home", "About", "Works", "Approach", "Expertise"].map(
                (label) => (
                  <Link href={"#"} className="hover:underline" key={label}>
                    {label}
                  </Link>
                ),
              )}
            </div>
            {/* contact */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">(Contact us)</p>
              <p>+1221234567</p>
            </div>
          </div>
          <h2 className="font-bold text-[90px] sm:text-[120px] lg:text-[170px] leading-snug footer-text">
            Studio Antenix
          </h2>
          {/* wrapper */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link href="#" className="hover-underline">
              Privacy policy
            </Link>
            <Link href="#" className="hover-underline">
              Terms of service
            </Link>
            <p>
              &copy; {new Date().getFullYear()} Studio Antenix. All rights
              reserved.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
