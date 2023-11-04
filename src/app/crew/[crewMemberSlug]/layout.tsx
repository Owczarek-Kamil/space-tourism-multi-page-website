/** @format */

import BackgroundImage from "@/components/common/BackgroundImage";
import ContentPageHeader from "@/components/common/ContentPageHeader";

export default function CrewPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentPageHeader indexNumber="02" title="Meet your crew" />
      <div className="mx-6 mb-13 mt-8 flex-1 md:mx-0 md:mb-0 md:mt-15 3xl:mt-0 3xl:flex">{children}</div>

      <BackgroundImage
        imgSrcMobile="/assets/destination/background-destination-mobile.jpg"
        imgSrcTablet="/assets/destination/background-destination-tablet.jpg"
        imgSrcDesktop="/assets/destination/background-destination-desktop.jpg"
      />
    </>
  );
}
