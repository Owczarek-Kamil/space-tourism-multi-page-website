/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data/navigationLinks";

export default function NavigationLinksBar() {
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[1];

  return (
    <ul className="hidden transition-all md:relative md:flex md:w-fit md:items-center md:gap-9.25 md:px-12 md:pb-9 md:pt-8.75 3xl:gap-12.5 3xl:pb-8.5 4xl:pl-30.75 4xl:pr-0">
      {navigationLinks.map((link) => (
        <li key={link.number} className="relative">
          <Link
            href={link.href}
            className="peer block p-1 font-barlow-condensed text-sm uppercase leading-[1.2143em] tracking-[2.362px] text-color-white outline-none transition-all focus-visible:outline-color-light-violet 3xl:text-base 3xl:leading-[1.1875em] 3xl:tracking-[2.7px]"
          >
            <span className="hidden 3xl:mr-3 3xl:inline-block 3xl:font-barlow-condensed 3xl:font-bold 3xl:tracking-[2.7px] 3xl:text-color-white">
              {link.number}
            </span>
            {link.label}
          </Link>
          <div
            aria-hidden
            className={`absolute -bottom-9 h-[3px] w-full bg-color-white transition-all ${
              currentRoute === link.route
                ? "bg-color-white"
                : "bg-color-white/0 peer-hover:bg-color-white/50 peer-focus-visible:bg-color-white/50"
            }`}
          />
        </li>
      ))}
      <div
        aria-hidden
        className="hidden md:absolute md:left-0 md:-z-10 md:block md:h-full md:w-[9999px] md:bg-color-white/5 md:backdrop-blur-2xl"
      />
    </ul>
  );
}
