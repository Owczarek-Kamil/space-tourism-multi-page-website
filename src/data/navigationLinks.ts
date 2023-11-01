/** @format */

import { crew } from "./crew";
import { destinations } from "./destinations";
import { technology } from "./technology";

type NavigationLink = {
  number: string;
  href: string;
  label: string;
  route: string;
};

export const navigationLinks: NavigationLink[] = [
  {
    number: "00",
    href: "/",
    label: "Home",
    route: "",
  },
  {
    number: "01",
    href: `/destination/${destinations[0].slug}`,
    label: "Destination",
    route: "destination",
  },
  {
    number: "02",
    href: `/crew/${crew[0].slug}`,
    label: "Crew",
    route: "crew",
  },
  {
    number: "03",
    href: `/technology/${technology[0].slug}`,
    label: "Technology",
    route: "technology",
  },
];
