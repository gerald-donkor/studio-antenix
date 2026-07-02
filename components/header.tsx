"use client";
import { gsap, useGSAP } from "@/lib/gsap";
import React, { useRef, useState } from "react";
import { navItems } from "./constant/data";
import Link from "next/link";
import { RiMenu4Line, RiCloseLine } from "@remixicon/react";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(
    () => {
      const links = gsap.utils.toArray<HTMLLinkElement>(
        ".link",
        headerRef.current,
      );
      const onMouseEnter = (e: MouseEvent) => {
        gsap.to(links, {
          opacity: 0.2,
          overwrite: true,
        });
        gsap.to(e.currentTarget, {
          opacity: 1,
          overwrite: true,
        });
      };

      const onMouseLeave = () => {
        gsap.to(links, {
          opacity: 1,
          overwrite: true,
        });
      };

      links.forEach((link) => {
        link.addEventListener("mouseover", onMouseEnter);
        link.addEventListener("mouseleave", onMouseLeave);
      });
      //clean up
      return () =>{
        links.forEach((link) => {
        link.removeEventListener("mouseover", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
      }
    },
    { scope: headerRef },
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full py-3 z-50 bg-linear-to-b from-black/40 to-95%"
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <span className="font-semibold text-white">Studio-Antenix</span>

        {/* Mobile Menu */}
        <ul
          className={`bg-primary text-white absolute top-full right-6 mt-2 p-7 space-y-2 rounded-lg scale-0 origin-top-right transition-transform z-50 ${isOpen && "scale-100"}`}
        >
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href} className="text-2xl font-bold link">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={"#"} className="text-2xl font-bold link">
              Stay connected
            </Link>
          </li>
        </ul>
        {/* Menu btn */}
        <button
          className="bg-primary text-white outline-1 p-2 rounded-md lg:hidden cursor-pointer relative z-50"
          onClick={handleClick}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
        {/* lg menu */}
        <ul className="hidden lg:flex items-center text-white">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href} className="text-lg px-6 link">
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-6">
            <Link href={"#"} className="text-lg link">
              Stay connected
            </Link>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      <div
        onClick={handleClick}
        className={`fixed top-0 left-0 inset-1 w-full h-full bg-black/25 opacity-0 transition-opacity invisible z-40 ${isOpen && "opacity-100 pointer-events-auto visible"}`}
      />
    </header>
  );
}
