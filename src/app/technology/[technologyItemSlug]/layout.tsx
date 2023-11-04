/** @format */

import BackgroundImage from "@/components/common/BackgroundImage";
import ContentPageHeader from "@/components/common/ContentPageHeader";

export default function TechnologyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentPageHeader indexNumber="03" title="Space launch 101" />
      <div>{children}</div>

      <BackgroundImage
        imgSrcMobile="/assets/destination/background-destination-mobile.jpg"
        imgSrcTablet="/assets/destination/background-destination-tablet.jpg"
        imgSrcDesktop="/assets/destination/background-destination-desktop.jpg"
      />
    </>
  );
}
