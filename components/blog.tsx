import React from "react";
import { blogItems } from "./constant/data";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="bg-primary-2 mx-3.75 rounded-xl py-10">
      <div className="container">
        {/* title */}
        <div className="lg:grid grid-cols-[0.4fr_1fr] lg:gap-8 pb-5">
          <p className="">From our journal</p>
          <h2 className="text-3xl font-bold lg:text-4xl max-w-150 ml-auto leading-tight">
            Insights, ideas, and stories from Studio Antenix team
          </h2>
          <hr className="text-black/20" />
        </div>
        {/* wrapper */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {blogItems.map(({ id, img, title, date, category }) => (
            <div
              key={id}
              className="flex flex-col space-y-4 blog-card cursor-pointer"
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
