/** @format */

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { crew } from "@/data/crew";

const crewMembersImagesFinalDimensions: { [key: string]: { finalWidth: string; finalHeight: string } } = {
  "douglas-hurley": { finalWidth: "3xl:w-[35.5000rem]", finalHeight: "3xl:h-[44.5000rem]" },
  "mark-shuttleworth": { finalWidth: "3xl:w-[28.3125rem]", finalHeight: "3xl:h-[40.8750rem]" },
  "victor-glover": { finalWidth: "3xl:w-[34.6250rem]", finalHeight: "3xl:h-[42.5625rem]" },
  "anousheh-ansari": { finalWidth: "3xl:w-[38.4375rem]", finalHeight: "3xl:h-[37.9375rem]" },
};

export default function CrewPage({ params: { crewMemberSlug } }: { params: { crewMemberSlug: string } }) {
  const crewMemberIndex = crew.findIndex((crewMember) => crewMember.slug === crewMemberSlug);

  if (crewMemberIndex === -1) {
    redirect("");
  }

  const {
    name,
    slug,
    role,
    bio,
    images: { webp },
  } = crew[crewMemberIndex];

  const { finalWidth, finalHeight } = crewMembersImagesFinalDimensions[`${slug}`];

  return (
    <main className="relative mx-auto flex max-w-layout flex-col 3xl:flex-1">
      <figure
        className={`relative z-50 mb-8 h-[13.8750rem] border-b border-color-gray transition-all xsm:h-[18.7186rem] sm:h-[23.5625rem] md:order-last md:mb-0 md:mt-auto md:h-[33.2500rem] md:border-b-0 lg:h-[36.0625rem] xl:h-[38.8750rem] 2xl:h-[41.6875rem] 3xl:absolute 3xl:-right-5 3xl:bottom-0 ${finalWidth} ${finalHeight}`}
      >
        <Image
          src={webp}
          alt={`Picture of ${name} crew member`}
          fill
          priority
          quality={100}
          className="object-contain"
        />
      </figure>
      <div className="flex flex-col 3xl:mt-38.5">
        <ul className="mb-8 flex justify-center gap-4 md:order-last md:mb-10 3xl:justify-start 3xl:gap-6">
          {crew.map((member, index) => (
            <li key={member.slug} className="grid place-items-center">
              <Link
                href={`/crew/${member.slug}`}
                scroll={false}
                aria-label={`Crew member: ${member.name}`}
                className={`h-2.5 w-2.5 rounded-full outline-none transition-all focus-visible:outline-color-light-violet 3xl:h-3.75 3xl:w-3.75 ${
                  crewMemberIndex === index
                    ? "bg-color-white"
                    : "bg-color-white/20 hover:bg-color-white/50 focus-visible:bg-color-white/50"
                }`}
              />
            </li>
          ))}
        </ul>
        <section className="space-y-4 md:mb-10 3xl:mb-30 3xl:space-y-6.75 ">
          <div className="space-y-2 3xl:space-y-3.75">
            <p className="text-center font-bellefair uppercase leading-[1.125em] text-color-white/50 md:text-h6 md:leading-[1,1667em] 3xl:text-left 3xl:text-h5 3xl:leading-[1.1563em]">
              {role}
            </p>
            <p className="text-center font-bellefair text-2xl uppercase leading-[1.1667em] text-color-white md:text-5xl md:leading-[1.15em] 3xl:text-left 3xl:text-h4 3xl:leading-[1.1429em]">
              {name}
            </p>
          </div>
          <p className="text-center font-barlow text-md text-color-light-violet md:mx-auto md:min-h-[7rem] md:w-9/12 md:text-base md:leading-[1.75em] xl:w-6/12 3xl:mx-0 3xl:w-full 3xl:max-w-[27.75rem] 3xl:text-left">
            {bio}
          </p>
        </section>
      </div>
    </main>
  );
}
