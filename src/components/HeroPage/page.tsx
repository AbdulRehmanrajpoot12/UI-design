import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400", "700"],
    subsets: ["latin"]
})


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/*====== TEXT AND BUTTON SECTION =======*/}
      <div className="flex xl:w-[1280px] xl:h-[800px] xl:top-[141px] bg-[#FFFFFF] min-sm:h-[390px]">
          <div className="flex xl:w-1/2 xl:h-[300px] xl:my-[248px] xl:pr-[60px] xl:pl-20 min-sm:w-[428px] min-sm:h-[390px] min-sm:px-6 min-sm:py-16 min-sm:gap-6">
              <div className="grid xl:w-[500px] xl:h-[212px] gap-6 min-sm:w-[380px] min-sm:h-[174px]">
                <h1 className={`${roboto.className} flex xl:w-[500px] xl:h-[134px] xl:text-[56px] xl:leading-[67.2px] text-[#000000] font-bold min-sm:w-[380px] min-sm:h-24 min-sm:text-[40px] min-sm:leading-[48px]`}>
                  Learn new skills online with ease
                </h1>

                <p className={`${roboto.className} grid xl:w-[500px] xl:h-[54px] text-[18px] leading-[27px] text-[#000000]`}>
                  Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>

                <div className="grid grid-cols-2 w-[358px] h-16 pt-4 gap-4">
                  <Button className="flex w-[178px] h-12 border-[1px] border-[#000000] rounded-[5px] px-6 py-3 gap-2">
                    <span className={`${roboto.className} flex text-[#FFFFFF] w-[130px] h-6 text-[16px] leading-6`}>
                      Start learning now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[164px] h-12 bg-[#FFFFFF] border-[1px] border-[#000000] rounded-[5px] px-6 py-3 gap-2">
                    <span className={`${roboto.className} flex text-[#000000] w-[116px] h-6 text-[16px] leading-6`}>
                      Explore Courses
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <Image 
              src="/images/Image.svg"
              width={640}
              height={900}
              alt="Hero Image"
              className="hidden lg:block md:hidden"
            />
          </div>

      {/*====== IMAGE SECTION ======*/}
      <Image 
            src="/images/Image.svg"
            width={640}
            height={900}
            alt="Hero Image"
            className="object-cover object-top min-sm:w-[428px] min-sm:h-[390px]  hidden min-sm:block lg:hidden"
          />
    </div>
  );
};

export default HeroSection;