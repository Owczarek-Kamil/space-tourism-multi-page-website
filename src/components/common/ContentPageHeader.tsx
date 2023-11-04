/** @format */

type ContentPageHeaderProps = {
  indexNumber: string;
  title: string;
};

export default function ContentPageHeader({ indexNumber, title }: ContentPageHeaderProps) {
  return (
    <div className="transition-all md:ml-9.5 md:mt-10 3xl:mx-0 3xl:mt-19">
      <header className="mx-auto max-w-layout">
        <h1 className="space-x-4.5 text-center transition-all md:text-left 3xl:space-x-7">
          <span className="font-barlow-condensed font-bold leading-[1.1875em] tracking-[2.7px] text-color-white/25 transition-all md:text-xl md:leading-[1.2em] md:tracking-[3.375px] 3xl:text-h6 3xl:leading-[1.2143em] 3xl:tracking-[4.725px]">
            {indexNumber}
          </span>
          <span className="font-barlow-condensed font-normal uppercase leading-[1.1875em] tracking-[2.7px] text-color-white transition-all md:text-xl md:leading-[1.2em] md:tracking-[3.375px] 3xl:text-h6 3xl:leading-[1.2143em] 3xl:tracking-[4.725px]">
            {title}
          </span>
        </h1>
      </header>
    </div>
  );
}
