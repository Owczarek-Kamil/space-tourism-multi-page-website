/** @format */

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavigationLinksBar from "./NavigationLinksBar";

export default function NavigationBar() {
  return (
    <div>
      <nav className="relative mx-auto flex max-w-layout items-center justify-between p-6 transition-all md:py-0 md:pl-9.75 md:pr-0 3xl:mt-10 4xl:p-0">
        <Image
          src="/assets/shared/logo.svg"
          alt="Space tourism logo"
          height={48}
          width={48}
          className="transition-all 4xl:absolute 4xl:-left-16 4xl:-translate-x-full"
        />
        <MobileMenu />
        <div aria-hidden className="hidden 4xl:relative 4xl:block 4xl:flex-1">
          <div className="4xl:absolute 4xl:-right-7.5 4xl:left-0 4xl:h-[1px] 4xl:bg-color-white/25" />
        </div>
        <NavigationLinksBar />
      </nav>
    </div>
  );
}
