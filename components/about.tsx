import React from "react";
import Button from "./button";
import Image from "next/image";
import { RiAddLine, RiArrowRightLongLine } from "@remixicon/react";
import { services } from "./constant/data";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <div>
        {/* wrapper */}
        <div className="border-b border-black/15"></div>
        {/* Container */}
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.3fr] divide-x divide-black/15">
          {/* Content */}
          <div className="py-11 lg:py-16 pr-8">
            <p className="max-w-224.5 text-3xl font-semibold about-text">
              We are a full-service creative agency empowering bold brands to
              develop strategies, identities, and experiences that drive real
              growth.
            </p>
            {/* wrapper */}
            <div className="flex items-center justify-between flex-wrap space-y-4 mt-10 lg:mt-16">
              {/* Avatars */}
              <div className="flex items-center -space-x-4">
                {["/images/avatar-1.png", "/images/avatar-2.png"].map((img) => (
                  <div
                    key={img}
                    className="rounded-full overflow-hidden outline-2 outline-white"
                  >
                    <Image src={img} alt="avatar" width={72} height={72} />
                  </div>
                ))}

                {/* Plus icon */}
                <Button className="bg-primary size-16 outline-2 outline-white justify-center text-white rounded-full">
                  <RiAddLine />
                </Button>
              </div>
              {/* Btn */}
              <Button className="bg-black text-white rounded-full group">
                <span className="px-3.5 lg:px-4">Learn about us</span>
                <span className="size-11 flex items-center justify-center bg-white rounded-full text-black group-hover:-rotate-54 duration-200 transition-transform">
                  <RiArrowRightLongLine />
                </span>
              </Button>
            </div>
          </div>
          {/* Stats */}
          <div className="py-11 lg:py-16 flex flex-col">
            <p className="subtitle">ABOUT STUDIO-ANTENIX</p>
            {/* wrapper */}
            <div className="mt-auto">
              <h2 className="text-4xl lg:text-5xl font-bold">
                $259<span className="text-primary">M+</span>
              </h2>
              <p>Capital raised after collaboration</p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-black/15" />
        {/* Card wrapper */}
        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-3 my-10 container">
          {services.map(({ id, title, icon: Icon, desc }) => (
            <div
              key={id}
              className="p-6 lg:p-7 border-2 border-black/15 nth-[2]:bg-primary-2 rounded-xl group bg-white nth-[2]:border-primary/20"
            >
              {/* Icon */}
              <span className="size-18 flex items-center justify-center bg-gray-200 group-even:bg-primary group-even:text-white rounded-full">
                <Icon />
              </span>
              <h3 className="mt-10 mb-3 font-semibold text-xl">{title}</h3>
              <hr className="text-black/15" />
              <p className="mt-4 text-black/50">{desc}</p>
              <Link
                href={"#"}
                className="mt-16 lg:mt-20 inline-flex font-semibold hover:underline underline-offset-2"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
