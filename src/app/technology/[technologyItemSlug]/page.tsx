/** @format */

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { technology } from "@/data/technology";

export default function TechnologyPage({ params: { technologyItemSlug } }: { params: { technologyItemSlug: string } }) {
  const technologyItemIndex = technology.findIndex((technologyItem) => technologyItem.slug === technologyItemSlug);

  if (technologyItemIndex === -1) {
    redirect("");
  }

  const {
    name,
    images: { portrait, landscape },
    description,
  } = technology[technologyItemIndex];

  return (
    <main className="mx-auto mb-14 mt-8 max-w-layout transition-all md:mt-15 3xl:mt-34.25 3xl:flex 3xl:justify-start 3xl:gap-20">
      <figure className="relative mb-8.5 h-[10.625rem] transition-all xsm:h-[13.5625rem] sm:h-[16.5rem] md:mb-14 md:h-[19.375rem] lg:h-[23rem] xl:h-[27rem] 2xl:h-[31rem] 3xl:absolute 3xl:right-0 3xl:top-68 3xl:h-[32.9375rem] 3xl:w-[32.1875rem]">
        <Image
          src={landscape}
          alt={`Picture of ${name}`}
          fill
          priority
          quality={100}
          className="object-cover 3xl:hidden"
        />
        <Image
          src={portrait}
          alt={`Picture of ${name}`}
          fill
          priority
          quality={100}
          className="hidden 3xl:block 3xl:object-contain"
        />
      </figure>
      <ul className="mb-6.5 flex items-center justify-center gap-4 transition-all md:mb-11.25 3xl:mb-0 3xl:flex-col 3xl:gap-8">
        {technology.map((technology, index) => (
          <li key={technology.slug} className="grid place-items-center">
            <Link
              href={`/technology/${technology.slug}`}
              scroll={false}
              className={`grid h-10 w-10 place-items-center rounded-full border font-bellefair text-base leading-[1.125em] tracking-[1px] outline-none transition-all focus-visible:outline-color-light-violet md:h-15 md:w-15 md:text-2xl md:leading-[1.1667em] md:tracking-[1.5px] 3xl:h-20 3xl:w-20 3xl:text-h5 3xl:leading-[1.1563em] 3xl:tracking-[2px] ${
                technologyItemIndex === index
                  ? "border-color-white bg-color-white text-color-dark"
                  : "border-color-white/25 text-color-white hover:border-color-white focus-visible:border-color-white"
              }`}
            >
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
      <section className="space-y-4 px-6 transition-all 3xl:space-y-4.25 3xl:px-0">
        <div className="space-y-2.25 transition-all md:space-y-4 3xl:space-y-2.75">
          <p className="text-center font-barlow-condensed text-sm uppercase leading-[1.2143em] tracking-[2.362px] text-color-light-violet transition-all md:text-base md:leading-[1.1875em] md:tracking-[2.7px] 3xl:text-left">
            The terminology&#8230;
          </p>
          <h2 className="text-center font-bellefair text-2xl uppercase leading-[1.1667em] text-color-white transition-all md:text-[2.5rem] md:leading-[1.15em] 3xl:text-left 3xl:text-h4 3xl:leading-[1.1429em]">
            {name}
          </h2>
        </div>
        <p className="text-center font-barlow text-md text-color-light-violet transition-all md:mx-auto md:w-8/12 md:text-base md:leading-[1.75em] 3xl:mx-0 3xl:w-full 3xl:max-w-[27.75rem] 3xl:text-left 3xl:text-lg 3xl:leading-[1.7778em]">
          {description}
        </p>
      </section>
    </main>
  );
}
