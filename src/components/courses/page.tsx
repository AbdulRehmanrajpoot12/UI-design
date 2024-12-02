import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400", "700"],
    subsets: ["latin"]
})

const CoursesSection = () => {
  return (
    <div className="flex flex-col xl:w-[1280px] xl:h-[1049px] xl:top-[1266px] xl:left-[100px] xl:px-16 xl:py-28 xl:gap-20 xl:justify-center xl:items-center bg-[#FFFFFF] min-sm:w-[428px] min-sm:h-[1000px] min-sm:px-6 min-sm:py-12 min-sm:gap-12">
            {/*====== MAIN CONTENT ======*/}
            <div className="flex flex-col xl:w-[768px] xl:h-[109px] gap-4 min-sm:w-[385px] min-sm:h-[162px]">
                <h2 className={`${roboto.className} flex xl:w-[768px] xl:h-[58px] font-bold text-[#000000] xl:text-[48px] xl:leading-[57.6px] min-sm:w-[385px] min-sm:h-[84px] text-[32px] leading-[41.6px] min-sm:text-center`}>
                    Explore Courses By Category
                </h2>

                <p className={`${roboto.className} flex xl:w-[768px] xl:h-[27px] text-[#000000] xl:text-[18px] xl:leading-[27px] min-sm:w-[385px] min-sm:h-[54px] min-sm:text-center min-sm:text-[18px] min-sm:leading-[27px]`}>
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>

            <div className="flex flex-col xl:w-[1280px] xl:h-[636px] gap-24 bg-[#FFFFFF] min-sm:w-[380px] min-sm:h-[556px]">
                {/*====== 1 COURSES CONTENT ======*/}
                <div className="flex flex-wrap lg:flex-row md:flex-col xl:w-[1280px] xl:h-[132px] xl:gap-6 min-sm:bg-[#FFFFFF] min-sm:w-[380px] min-sm:h-[556px] min-sm:gap-24">
                    
                    {/*===== 1 ICON =====*/}
                    <div className="flex lg:flex-row md:flex-col xl:w-[410.67px] xl:h-[132px] xl:rounded-[5px] p-4 gap-8 bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[132px]">
                        <div className="flex w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                            <Image
                                src="/images/pen-tool-2.svg"
                                width={32}
                                height={32}
                                alt="D&D Icon"
                            />
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col xl:w-[246.67px] h-[57px] gap-1 min-sm:w-[216px]">
                                <h5 className={`${roboto.className} flex xl:w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] min-sm:w-[216px]`}>
                                    Design & Development
                                </h5>

                                <p className={`${roboto.className} flex xl:w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] min-sm:w-[216px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/*===== 2 ICON =====*/}
                    <div className="flex lg:flex-row md:flex-col xl:w-[410.67px] xl:h-[132px] xl:rounded-[5px] p-4 gap-8 bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[132px]">
                        <div className="flex w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                            <Image 
                                src="/images/volume-high.svg"
                                width={32}
                                height={32}
                                alt="Marketing Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col xl:w-[246.67px] h-[57px] gap-1 min-sm:w-[216px]">
                                <h5 className={`${roboto.className} flex xl:w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] min-sm:w-[216px]`}>
                                    Marketing
                                </h5>

                                <p className={`${roboto.className} flex xl:w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] min-sm:w-[216px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*===== 3 ICON =====*/}
                    <div className="flex lg:flex-row md:flex-col xl:w-[410.67px] xl:h-[132px] xl:rounded-[5px] p-4 gap-8 bg-[#F7F7F7] min-sm:w-[380px] min-sm:h-[132px]">
                        <div className="flex w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                            <Image 
                                src="/images/group.svg"
                                width={32}
                                height={32}
                                alt="Development Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col xl:w-[246.67px] h-[57px] gap-1 min-sm:w-[216px]">
                                <h5 className={`${roboto.className} flex xl:w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] min-sm:w-[216px]`}>
                                    Development
                                </h5>

                                <p className={`${roboto.className} flex xl:w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] min-sm:w-[216px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====== 2 COURSES CONTENT ======*/}
                <div className="hidden lg:flex flex-row w-[1280px] h-[132px] gap-6">
                    {/*====== 4 ICON ======*/}
                    <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/microphone.svg"
                                width={34}
                                height={34}
                                alt="Communication Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Communication
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div> 

                    {/*====== 5 ICON ======*/}
                    <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/link.svg"
                                width={34}
                                height={34}
                                alt="Digital Marketing Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Digital Marketing
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*====== 6 ICON ======*/}
                    <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/arrow-2.svg"
                                width={34}
                                height={34}
                                alt="Self Development Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Self Development
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====== 3 COURSES CONTENT ======*/}
                <div className="hidden lg:flex w-[1280px] h-[132px] gap-6">
                    {/*===== 7 ICON */}
                <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/briefcase.svg"
                                width={34}
                                height={34}
                                alt="Business Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Business
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div> 

                    {/*====== 8 ICON ======*/}
                    <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/book.svg"
                                width={34}
                                height={34}
                                alt="Finance Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Finance
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*====== 9  ICON ======*/}
                    <div className="flex w-[410.67px] h-[132px] rounded-[5px] bg-[#F7F7F7] p-4 gap-8">
                        <div className="flex w-[100px] h-[100px] bg-[#FFFFFF] rounded-[5px] p-[34px] gap-[10px]">
                            <Image 
                                src="/images/book-2.svg"
                                width={34}
                                height={34}
                                alt="Consulting Icon"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-[246.67px] h-[57px] gap-1">
                                <h5 className={`${roboto.className} flex w-[246.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px]`}>
                                    Consulting
                                </h5>

                                <p className={`${roboto.className} flex w-[246.67px] h-[27px] text-[#000000] text-[18px] leading-[27px]`}>
                                    50+ Courses Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====== BUTTON ======*/}
                <div className="flex justify-center">
                    <Button variant={"secondary"} className="flex w-[155px] h-12 bg-[#FFFFFF] rounded-[5px] border-[#000000] border-[1px] px-6 py-3">
                        <span className={`${roboto.className} flex w-[120px] h-6 text-[#000000] text-[16px] leading-6`}>
                            View All Courses
                        </span>
                    </Button>
                </div>
            </div>
        </div>
  );
};

export default CoursesSection;