/** @format */

"use client";

import Link from "next/link";
import IconHamburger from "../icons/IconHamburger";
import IconClose from "../icons/IconClose";
import { useState, useEffect, Fragment } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Transition, Dialog } from "@headlessui/react";
import { navigationLinks } from "@/data/navigationLinks";

export default function MobileMenu() {
  const matches = useMediaQuery("(min-width: 768px)");
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (matches) {
      closeModal();
    }
  }, [matches]);

  return (
    <>
      <button
        onClick={openModal}
        aria-label="menu"
        className="relative -right-1 p-1 outline-none transition-all focus-visible:outline-color-light-violet md:hidden"
      >
        <IconHamburger />
      </button>

      <Transition appear as={Fragment} show={isOpen}>
        <Dialog onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="float-right h-full min-w-[16rem] space-y-14 bg-color-white/[0.04] pl-7 pr-5.5 pt-8.5 backdrop-blur-2xl">
                <button
                  onClick={closeModal}
                  aria-label="menu"
                  className="float-right p-1 outline-none transition-all focus-visible:outline-color-light-violet"
                >
                  <IconClose />
                </button>
                <ul className="flex flex-col gap-6">
                  {navigationLinks.map((link) => (
                    <li key={link.number} className="">
                      <Link
                        href={link.href}
                        onClick={closeModal}
                        className="inline-block space-x-2.75 p-1 font-barlow-condensed text-base uppercase leading-[1.1875em] tracking-[2.7px] text-color-white outline-none transition-all focus-visible:outline-color-light-violet"
                      >
                        <span className="font-bold">{link.number}</span>
                        <span className="font-normal">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
