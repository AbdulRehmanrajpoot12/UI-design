import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})



const CoursesSection2 = () => {
  return (
    <div className="flex flex-col items-center xl:w-[1280px] xl:h-[1742px] xl:top-[3326px] xl:left-[100px] xl:px-16 xl:py-28 xl:gap-[60px] bg-[#FFFFFF] min-sm:w-[428px] min-sm:h-[2135px] min-sm:px-6 min-sm:py-12 min-sm:gap-12">
      <div className="flex flex-col justify-center items-center xl:w-[768px] xl:h-[118px] gap-4 min-sm:w-[249px] min-sm:h-[93px]">
        <h1 className={`${roboto.className} flex flex-col justify-center xl:w-[768px] xl:h-[67px] font-bold xl:text-[56px] xl:leading-[67.2px] text-[#000000] text-center min-sm:w-[119px]  min-sm:h-[42px] min-sm:text-[32px] min-sm:leading-[41.6px]`}>
          Courses
        </h1>

        <p className={`${roboto.className} flex flex-col xl:w-[768px] xl:h-[26px] text-[18px]leading-[27px] text-center text-[#000000] min-sm:w-[249px] min-sm:h-[27px]`}>
          Your Ultimate Guide to learning
        </p>
      </div>

      <div className="flex flex-col items-center xl:w-[1152px] xl:h-[1340px] gap-16 min-sm:w-[380px] min-sm:h-[1898px]">
        <div className="flex w-[336px] h-10">
          <div className="flex w-[87px] h-10 border-b-[1px] border-[#676767] px-4 py-2 gap-2">
            <p className={`${roboto.className} flex w-[55px] h-6 text-[#000000] text-[16px] leading-6`}>
              Popular
            </p>
          </div>

          <div className="flex w-[140px] h-10 px-4 py-2 gap-2">
            <p className={`${roboto.className} flex w-[108px] h-6 text-[#000000] text-[16px] leading-6`}>
              Recommended
            </p>
          </div>

          <div className="flex w-[109px] h-10 px-4 py-2 gap-2">
            <p className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6`}>
              Best  Price
            </p>
          </div>
        </div>

        <div className="flex justify-center xl:w-[1152px] xl:h-[1132px] gap-16 relative min-sm:w-[380px] min-sm:h-[1690px]">
          
          {/*===== 1 ROW =====*/}
          <div className="absolute xl:w-[1260px] xl:h-[534px] gap-8 min-sm:w-[380px] min-sm:h-[1690px]">

            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/*===== ! course ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-2.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Design
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex xl:w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000] min-sm:w-[191px]`}>
                    UX/UI Design 201
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/*===== 2 COURSE ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-3.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Programmimg
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000]`}>
                    Introduction to Python
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/*====== 3 course ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-4.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Business
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000]`}>
                    Data Analysis for Beginners
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/*===== 2 ROW =====*/}
          <div className="absolute xl:w-[1260px] xl:h-[534px] mt-[600px] gap-8 min-sm:w-[380px] min-sm:h-[1690px] hidden lg:block">

            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/*===== ! course ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-5.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Art
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex xl:w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000] min-sm:w-[191px]`}>
                    Art Specialization
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/*===== 2 COURSE ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-6.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Law
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000]`}>
                    Rule of Law
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/*====== 3 course ======*/}
            <div className="flex flex-col xl:w-[416px] xl:h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[558px]">
              <Image
                src="images/Image-7.svg"
                width={416}
                height={300}
                alt="Desktop Icon"
                className="flex xl:w-[416px] xl:h-[300px] min-sm:w-[380px] min-sm:h-[300px] top-0 xl:rounded-none min-sm:rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-center xl:w-[416px] xl:h-[210px] px-4 pb-6 gap-6 min-sm:w-[380px] min-sm:h-[234px]">
                <div className="flex flex-col xl:w-[382px] xl:h-[122px] gap-2 min-sm:w-[348px] min-sm:h-[146px]">
                  <div className="flex xl:w-[382px] h-6 xl:gap-2 min-sm:w-[348px]">
                    <p className={`${roboto.className} flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]`}>
                      Tech
                    </p>

                    <div className="flex w-12 h-6 gap-1">
                      <Image
                        src="/images/Star 1.svg"
                        width={24}
                        height={24}
                        alt="Star Icon"
                      />

                      <p className={`${roboto.className}flex w-5 h-6 font-semibold text-[14px] leading-[21px] text-[#000000] text-right`}>
                        5.0
                      </p>
                    </div>
                  </div>

                  <h5 className={`${roboto.className} flex w-[382px] h-[34px] font-bold leading-[33.6px] text-[#000000]`}>
                    Introduction to webflow
                  </h5>

                  <p className={`${roboto.className} flex xl:w-[382px] xl:h-[48px] text-[16px] leading-6 text-[#000000] min-sm:w-[326px] min-sm:h-[72px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>

                <div className="flex w-[382px] h-10 gap-4">
                  <Button variant={"secondary"} className="flex w-[117px] h-10 rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[77px] h-6 text-[#000000] text-[16px] leading-6 `}>
                      Enroll Now
                    </span>
                  </Button>

                  <Button variant={"secondary"} className="flex w-[77px] h-10 rounded-[5px] px-5 py-2 gap-2">
                    <span className={`${roboto.className} flex w-[37px] h-6 text-[#000000] text-[16px] leading-6 font-medium`}>
                      $400
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*===== BUTTON ======*/}
        <div className="flex w-[152px] h-10 rounded-[5px] border-[1px] border-[#000000] px-4 py-2 gap-2">
          <p className={`${roboto.className} flex w-[120px] h-6 text-[16px] text-[#000000] leading-6 whitespace-nowrap`}>
            View All Courses
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CoursesSection2;