import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400", "700"],
    subsets: ["latin"]
})

const SponsorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:w-[1280px] xl:h-[228px] xl:top-[1038px] xl:left-[100px] xl:px-[60px] xl:py-20 xl:gap-6 xl:bg-[#F7F7F7] min-sm:w-[428px] min-sm:h-[239.34px] min-sm:bg-[#FFFFFF] min-sm:px-6 min-sm:py-12 min-sm:gap-6">
      <h5 className={`${roboto.className} hidden lg:flex w-[320px] h-[68px] font-bold leading-[33.6px] text-[#000000]`}>
        Trusted by 2000+ companies<br /> worldwide.
      </h5>

      <p className={`${roboto.className} lg:hidden w-[327px] h-[54px] text-[#000000] font-bold text-[18px] leading-[27px]`}>
        Trusted by the world's best companies [social proof to build credibility]
      </p>

      <div className="grid lg:grid-cols-6 xl:w-[880px] xl:h-14 xl:py-[8.74px] xl:gap-[19.12px] min-sm:w-[408px] min-sm:h-[170px] min-sm:px-4 min-sm:py-4 min-sm:gap-4 min-sm:leading-3 min-sm:grid-cols-3 min-sm:justify-center min-sm:items-center">
        <Image 
          src="/images/Airbnb Logo.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb Image"
        />

        <Image 
          src="/images/Airbnb-Logo1.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb 1 Image"
        />

        <Image 
          src="/images/Airbnb-Logo2.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb 2 Image"
        />

        <Image 
          src="/images/Airbnb-Logo3.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb 3 Image"
          className="hidden lg:block"
        />

        <Image 
          src="/images/Airbnb-Logo4.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb 4 Image"
          className="hidden lg:block"
        />

        <Image 
          src="/images/Airbnb-Logo5.svg"
          width={123.8}
          height={38.52}
          alt="Airbnb 5 Image"
          className="hidden lg:block"
        />

        <div className="flex lg:hidden ml-16 items-center justify-center col-span-2 w-full">
          <Button className={`${roboto.className} bg-[#FFFFFF] rounded-[5px] border-[#000000] border-[1px] text-[#000000]`}>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;