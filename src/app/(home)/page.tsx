/** @format */

import Link from "next/link";
import BackgroundImage from "@/components/common/BackgroundImage";
import { navigationLinks } from "@/data/navigationLinks";

export default function Home() {
  return (
    <>
      <div className="grow 3xl:flex 3xl:items-end">
        <main className="mx-auto flex max-w-layout flex-col items-center gap-20.25 p-6 pb-12 md:gap-39 md:px-0 md:pb-22.5 md:pt-26.5 3xl:flex-row 3xl:items-end 3xl:pb-32.75 3xl:pt-0">
          <header className="space-y-4 md:space-y-6">
            <h1 className="space-y-4 md:space-y-6">
              <span className="block text-center font-barlow-condensed text-base uppercase leading-[1.1875em] tracking-[2.7px] text-color-light-violet md:text-xl md:leading-[1.2em] md:tracking-[3.375px] 3xl:text-left 3xl:text-h6 3xl:leading-[1.2143em]">
                So, you want to travel to
              </span>
              <span className="block text-center font-bellefair text-h3 uppercase leading-[1.25em] text-color-white md:text-h1 md:leading-[1em] 3xl:text-left 3xl:leading-[1.1467em]">
                Space
              </span>
            </h1>
            <p className="text-center font-barlow text-md leading-[1.6667em] text-color-light-violet md:mx-auto md:w-6/12 md:text-base md:leading-[1.75em] 3xl:m-0 3xl:w-7/12 3xl:text-left 3xl:text-lg 3xl:leading-[1.7778em]">
              Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not
              hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this
              world experience!
            </p>
          </header>
          <Link
            href={navigationLinks[1].href}
            className="block aspect-square rounded-full bg-color-white pb-14.75 pl-7.25 pr-6.75 pt-17 font-bellefair text-xl uppercase leading-[1.15em] tracking-[1.25px] text-color-dark outline-none ring-color-white/25 transition-all duration-300 hover:ring-[33px] focus-visible:outline-color-light-violet focus-visible:ring-[25px] md:pb-25.5 md:pl-11.5 md:pr-12 md:pt-25.75 md:text-h5 md:leading-[1.1563em] md:hover:ring-[55px] md:focus-visible:ring-[55px] 3xl:hover:ring-[88px] 3xl:focus-visible:ring-[88px]"
          >
            Explore
          </Link>
        </main>
      </div>

      <BackgroundImage
        imgSrcMobile="/assets/home/background-home-mobile.jpg"
        imgSrcTablet="/assets/home/background-home-tablet.jpg"
        imgSrcDesktop="/assets/home/background-home-desktop.jpg"
      />
    </>
  );
}
