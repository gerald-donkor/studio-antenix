"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { blogItems } from "./constant/data";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Blog() {
  const blogRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const blogTitleSplit = SplitText.create(".blog-title", {
        type: "words, lines",
        mask: "lines",
      });
      const blogSubtitleSplit = SplitText.create(".blog-subtitle", {
        type: "words, lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top center",
        },
      });

      tl.from(blogSubtitleSplit.words, {
        yPercent: 100,
        stagger: 0.06,
        ease: "power2.inOut",
      })
        .from(
          blogTitleSplit.words,
          {
            yPercent: 100,
            stagger: 0.03,
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          ".blog-card",
          {
            opacity: 0,
            stagger: 0.3,
            ease: "power2.inOut",
          },
          "<",
        );
    },
    { scope: blogRef },
  );
  return (
    <section ref={blogRef} className="bg-primary-2 mx-3.75 rounded-xl py-10">
      <div className="container">
        {/* title */}
        <div className="lg:grid grid-cols-[0.4fr_1fr] lg:gap-8 pb-5">
          <p className="blog-subtitle">From our journal</p>
          <h2 className="text-3xl font-bold lg:text-4xl max-w-150 ml-auto leading-tight blog-title">
            Insights, ideas, and stories from Studio Antenix team
          </h2>
          <hr className="text-black/20" />
        </div>
        {/* wrapper */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {blogItems.map(({ id, img, title, date, category }) => (
            // Card
            <div
              key={id}
              className="flex flex-col space-y-4 blog-card cursor-pointer blog-card"
            >
              {/* img */}
              <div className="rounded-xl overflow-hidden relative group">
                <Image
                  src={img}
                  alt={title}
                  width={405}
                  height={487}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {/* badge */}
                <span className="absolute bottom-4 right-4 bg-primary text-white font-semibold px-3 py-1 rounded-full">
                  {date}
                </span>
              </div>
              {/* content */}
              <div className="mt-auto">
                <Link
                  href={"#"}
                  className="text-xl font-semibold hover:text-primary focus:text-primary transition-colors"
                >
                  {title}
                </Link>
                <p className="text-black/45">{category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
