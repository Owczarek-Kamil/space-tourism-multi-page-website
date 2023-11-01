/** @format */

import Image from "next/image";

type BackgroundImageProps = {
  imgSrcMobile: string;
  imgSrcTablet: string;
  imgSrcDesktop: string;
};

export default function BackgroundImage({ imgSrcMobile, imgSrcTablet, imgSrcDesktop }: BackgroundImageProps) {
  return (
    <>
      <Image
        src={imgSrcMobile}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 0vw"
        priority
        quality={100}
        className="-z-50 object-cover object-center sm:hidden"
      />
      <Image
        src={imgSrcTablet}
        alt=""
        fill
        sizes="(max-width: 639px) 0vw, (max-width: 1024px) 100vw, 0vw"
        priority
        quality={100}
        className="-z-50 hidden object-cover object-center sm:block xl:hidden"
      />
      <Image
        src={imgSrcDesktop}
        alt=""
        fill
        sizes="(max-width: 1023px) 0vw, 100vw"
        priority
        quality={100}
        className="-z-50 hidden object-cover object-center xl:block"
      />
    </>
  );
}
