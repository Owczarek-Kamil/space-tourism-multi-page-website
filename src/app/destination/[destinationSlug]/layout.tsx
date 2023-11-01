/** @format */

import BackgroundImage from "@/components/common/BackgroundImage";
import ContentPageHeader from "@/components/common/ContentPageHeader";

export default function DestinationPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentPageHeader indexNumber="01" title="Pick your destination" />
      <div className="mx-6 mb-14 mt-3 transition-all md:mx-24.25 md:mt-9.75 3xl:mb-29.5 3xl:mt-16">{children}</div>

      <BackgroundImage
        imgSrcMobile="/assets/destination/background-destination-mobile.jpg"
        imgSrcTablet="/assets/destination/background-destination-tablet.jpg"
        imgSrcDesktop="/assets/destination/background-destination-desktop.jpg"
      />
    </>
  );
}
