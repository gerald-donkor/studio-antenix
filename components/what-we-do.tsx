"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { faqItems } from "./constant/data";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Button from "./button";
import Image from "next/image";
import { useRef, useState } from "react";
type OpenState = string | null;

export default function WhatWeDo() {
  const [isOpen, setIsOpen] = useState<OpenState>(null);
  const faqRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const faqTitleSplit = SplitText.create(".faq-title", {
        type: "words,lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top center",
          // markers: true,
        },
      });

      tl.from(faqTitleSplit.words, {
        yPercent: 100,
        stagger: 0.03,
        ease: "power2.inOut",
      })
        .from(
          ".faq-text",
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          ".accordio",
          {
            opacity: 0,
            filter: "blur(5px)",
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          ".faq-img",
          {
            opacity: 0,
            ease: "power3.input",
          },
          "<",
        );
    },
    { scope: faqRef },
  );
  return (
    <section ref={faqRef} className="py-20">
      <div className="container">
        {/* title */}
        <div className="lg:grid grid-cols-[1fr_0.3fr] lg:gap-8 pb-5 space-y-6">
          <h2 className="text-3xl font-semibold lg:text-4xl max-w-4xl leading-tight faq-title">
            We partner with founders to build brands from scratch research,
            design, and strategy, all in one place.
          </h2>
          <div className="space-y-2 faq-text">
            <p className="subtitle">what we do</p>
            <p className="text-black/55">
              Capital has been raised after collaboration
            </p>
          </div>
        </div>
        <hr className="text-black/20" />
        {/* wrapper */}
        <div className="grid grid-cols-1 gap-11 lg:grid-cols-2 lg:gap-8 mt-18">
          {/* Accordion */}
          <div className="divide-y divide-black/20 accordio">
            {faqItems.map(({ id, title, desc }) => (
              <div key={id} className="py-3.5">
                {/* Trigger */}
                <div
                  className="flex justify-between items-center gap-5"
                  onClick={() => setIsOpen(isOpen === id ? null : id)}
                >
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-xl lg:text-3xl">
                      ({id})
                    </span>
                    <h3 className="font-bold text-xl lg:text-3xl">{title}</h3>
                  </div>
                  <Button>
                    {isOpen === id ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </Button>
                </div>
                <div
                  className={`h-0 overflow-y-hidden ${isOpen === id && "h-auto overflow-y-auto"}`}
                >
                  <p className="py-3 px-1.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="bg-primary rounded-xl max-w-max mx-auto faq-img">
            <Image
              src={"/images/faq-img.png"}
              alt="faq image"
              width={456}
              height={473}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
