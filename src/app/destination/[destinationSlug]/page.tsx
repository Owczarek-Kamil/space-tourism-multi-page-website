/** @format */

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { destinations } from "@/data/destinations";

export default function DestinationPage({ params: { destinationSlug } }: { params: { destinationSlug: string } }) {
  const destinationIndex = destinations.findIndex((destination) => destination.name.toLowerCase() === destinationSlug);

  if (destinationIndex === -1) {
    redirect("/");
  }

  const {
    name,
    images: { webp },
    description,
    distance,
    travel,
  } = destinations[destinationIndex];

  return (
    <main className="mx-auto flex max-w-layout flex-col items-center 3xl:flex-row 3xl:items-start 3xl:gap-39.25">
      <div className="relative mb-6.5 aspect-square min-h-[13rem] transition-all md:mb-13.25 md:min-h-[18.75rem] 3xl:mt-8.25 3xl:min-h-[27.8125rem]">
        <Image src={webp} alt={`Picture of the ${name}`} fill priority className="object-contain" />
      </div>
      <div className="flex flex-col items-center 3xl:items-start">
        <ul className="mb-6.75 flex items-center gap-4.5 transition-all md:mb-10.75">
          {destinations.map((destination, index) => (
            <li key={destination.name.toLowerCase()} className="relative">
              <Link
                href={`/destination/${destination.slug}`}
                scroll={false}
                className={`peer block p-1 font-barlow-condensed text-sm uppercase leading-[1.1875em] tracking-[2.362px] outline-none transition-all focus-visible:outline-color-light-violet md:text-base md:leading-[1.1875em] md:tracking-[2.7px] ${
                  destinationIndex === index ? "text-color-white" : "text-color-light-violet"
                }`}
              >
                {destination.name}
              </Link>
              <div
                className={`absolute -bottom-2 h-[3px] w-full transition-all ${
                  destinationIndex === index
                    ? "bg-color-white"
                    : "peer-hover:bg-color-white/25 peer-focus-visible:bg-color-white/25"
                }`}
              />
            </li>
          ))}
        </ul>
        <div>
          <section className="space-y-2">
            <h2 className="text-center font-bellefair text-h4 uppercase leading-[1.1429em] text-color-white transition-all md:text-h3 md:leading-[1.15em] 3xl:text-left 3xl:text-h2 3xl:leading-[1.15em]">
              {name}
            </h2>
            <p className="text-center font-barlow text-md text-color-light-violet transition-all sm:mx-auto sm:w-9/12 md:w-full md:text-base md:leading-[1.75em] 3xl:text-left 3xl:text-lg 3xl:leading-[1.7778em]">
              {description}
            </p>
          </section>
          <div
            aria-hidden
            className="my-8 h-[1px] w-full bg-color-gray transition-all md:mb-7 md:mt-12.25 3xl:mt-13.5"
          />
          <section className="flex flex-col gap-8 transition-all sm:flex-row sm:justify-center sm:gap-20 3xl:justify-start">
            <p className="space-y-3">
              <span className="block text-center font-barlow-condensed text-sm uppercase leading-[1.2143em] tracking-[2.362px] text-color-light-violet 3xl:text-left">
                Avg. distance
              </span>
              <span className="block text-center font-bellefair text-h6 uppercase leading-[1.1429em] text-color-white 3xl:text-left">
                {distance}
              </span>
            </p>
            <p className="space-y-3">
              <span className="block text-center font-barlow-condensed text-sm uppercase leading-[1.2143em] tracking-[2.362px] text-color-light-violet 3xl:text-left">
                Est. travel time
              </span>
              <span className="block text-center font-bellefair text-h6 uppercase leading-[1.1429em] text-color-white 3xl:text-left">
                {travel}
              </span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
