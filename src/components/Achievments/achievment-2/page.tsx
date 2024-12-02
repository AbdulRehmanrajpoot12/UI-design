import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto ({
    weight: ["400", "700"],
    subsets: ["latin"]
})

const AchievmentSection2 = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center xl:w-[1280px] xl:h-[488px] xl:top-[2713px] xl:left-[100px] xl:px-16 xl:py-28 xl:gap-20 bg-[#FFFFFF]">
        {/*===== CONTENT SECTION ======*/}
        <div className="flex flex-col items-center xl:w-[1152px] xl:h-[264px] gap-6">
          <div className="flex flex-col xl:w-[1152px] xl:h-[136px] gap-4">
            <h2 className={`${roboto.className} flex justify-center xl:w-[1152px] xl:h-[58px] font-bold text-center xl:text-[48px] xl:leading-[57.6px] text-[#000000]`}>
              Our Achivements
            </h2>

            <p className={`${roboto.className}flex justify-center text-center w-[1152px] h-[54px] text-[#000000] text-[18px] leading-[27px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>

          {/*====== LIST SECTION ======*/}
          <div className="flex flex-col lg:flex-row lg:justify-center xl:w-[1256px] xl:h-[96px] gap-6">
            <div className="flex xl:w-[616px] xl:h-24 py-2 xl:gap-6">
              <div className="flex flex-col justify-center items-center xl:w-[296px] xl:h-20 gap-2">
                <h3 className={`${roboto.className} flex xl:w-[91px] xl:h-12 font-bold xl:text-[40px] xl:leading-[48px] text-[#000000]`}>
                  +200
                </h3>

                <p className={`${roboto.className} flex w-[59px] h-6 text-[16px] leading-6 text-[#000000]`}>
                  Courses
                </p>
              </div>

              <div className="flex flex-col justify-center items-center xl:w-[296px] xl:h-20 gap-2">
              <h3 className={`${roboto.className} flex xl:w-[72px] xl:h-12 font-bold xl:text-[40px] xl:leading-[48px] text-[#000000]`}>
                  50K
                </h3>

                <p className={`${roboto.className} flex w-[59px] h-6 text-[16px] leading-6 text-[#000000]`}>
                  Mentors
                </p>
              </div>
            </div>

            <div className="flex xl:w-[616px] xl:h-24 py-2 xl:gap-6">
              <div className="flex flex-col justify-center items-center xl:w-[296px] xl:h-20 gap-2">
                <h3 className={`${roboto.className} flex xl:w-[91px] xl:h-12 font-bold xl:text-[40px] xl:leading-[48px] text-[#000000]`}>
                  370k
                </h3>

                <p className={`${roboto.className} flex w-16 h-6 text-[16px] leading-6 text-[#000000]`}>
                  Students
                </p>
              </div>

              <div className="flex flex-col justify-center items-center xl:w-[296px] xl:h-20 gap-2">
                <h3 className={`${roboto.className} flex xl:w-[91px] xl:h-12 font-bold xl:text-[40px] xl:leading-[48px] text-[#000000]`}>
                  100+
                </h3>

                <p className={`${roboto.className} flex w-[85px] h-6 text-[16px] leading-6 text-[#000000]`}>
                  Recognition
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AchievmentSection2;