import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto ({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col xl:w-[1280px] xl:h-[830.89px] xl:bg-[#F7F7F7] xl:top-[5886px] xl:px-16 xl:py-28 xl:gap-20 min-sm:w-[428px] min-sm:h-[681.89px] min-sm:px-6 min-sm:py-12 min-sm:gap-12 min-sm:bg-[#FFFFFF]">
        <div className="hidden lg:flex flex-col w-[560px] h-[109px] gap-6">
            <h2 className={`${roboto.className} flex w-[560px] h-[58px] font-bold text-[48px] leading-[57.6px] text-[#000000]`}>
                Customer testimonials
            </h2>

            <p className={`${roboto.className} flex flex-col w-[560px] h-[27px] text-[18px] leading-[27px] text-[#000000]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        <div className="lg:hidden justify-center flex flex-col w-[361px] h-[120px] gap-6">
            <h4 className={`${roboto.className} w-[315px] h-[42px] font-bold text-[#000000] text-[32px] leading-[41.6px] text-center ml-6`}>
                What Our Student Say
            </h4>

            <p className={`${roboto.className} text-center`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        <div className="flex justify-center flex-col xl:w-[1260px] xl:h-[390.89px] gap-12 min-sm:w-[380px] min-sm:h-[417.89px]">
            <div className="flex xl:w-[1260px] xl:h-[294.8px] gap-8 min-sm:w-[380px] min-sm:h-[321.89px]">

                {/*====== 1 testimonial ======*/}
                <div className="flex flex-col xl:w-[362.67px] h-[321.89px] border-[1px] border-[#000000] p-8 gap-6 min-sm:w-[380px]">
                    <Image 
                        src="images/Stars2.svg"
                        width={116}
                        height={18.89}
                        alt="Stars"
                        className="flex gap-1"
                    />

                    <div className="flex flex-col xl:w-[352px] xl:h-[188px] gap-4 min-sm:w-[316px] min-sm:h-[215px]">
                        <p className={`${roboto.className} flex flex-col xl:w-[298.67px] xl:h-[135px] text-[18px] leading-[27px] text-[#000000] min-sm:w-[316px] min-sm:h-[135px]`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </p>

                        <div className="flex xl:w-[254px] h-14 gap-5 ">
                            <Image 
                                src="images/Ourteam3.svg"
                                width={56}
                                height={56}
                                alt="Pic"
                                className="flex rounded-full"
                            />

                            <div className="flex flex-col w-[178px] h-12">
                                <p className="flex flex-col w-[99px] h-6 font-semibold text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    James Nduku
                                </p>

                                <p className="flex flex-col w-[139px] h-6 text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    Software Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====== 2 testimonial ======*/}
                <div className="hidden lg:flex flex-col xl:w-[362.67px] h-[321.89px] border-[1px] border-[#000000] p-8 gap-6 min-sm:w-[380px]">
                    <Image 
                        src="images/Stars2.svg"
                        width={116}
                        height={18.89}
                        alt="Stars"
                        className="flex gap-1"
                    />

                    <div className="flex flex-col xl:w-[352px] xl:h-[188px] gap-4 min-sm:w-[316px] min-sm:h-[215px]">
                        <p className={`${roboto.className} flex flex-col xl:w-[298.67px] xl:h-[135px] text-[18px] leading-[27px] text-[#000000] min-sm:w-[316px] min-sm:h-[135px]`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </p>

                        <div className="flex xl:w-[254px] h-14 gap-5 ">
                            <Image 
                                src="images/Ourteam1.svg"
                                width={56}
                                height={56}
                                alt="Pic"
                                className="flex rounded-full"
                            />

                            <div className="flex flex-col w-[178px] h-12">
                                <p className="flex flex-col w-[117px] h-6 font-semibold text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    Erick Kipkemboi
                                </p>

                                <p className="flex flex-col w-[101px] h-6 text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    Scrum Master
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====== 3 testimonial ======*/}
                <div className="hidden lg:flex flex-col xl:w-[362.67px] h-[321.89px] border-[1px] border-[#000000] p-8 gap-6 min-sm:w-[380px]">
                    <Image 
                        src="images/Stars2.svg"
                        width={116}
                        height={18.89}
                        alt="Stars"
                        className="flex gap-1"
                    />

                    <div className="flex flex-col xl:w-[352px] xl:h-[188px] gap-4 min-sm:w-[316px] min-sm:h-[215px]">
                        <p className={`${roboto.className} flex flex-col xl:w-[298.67px] xl:h-[135px] text-[18px] leading-[27px] text-[#000000] min-sm:w-[316px] min-sm:h-[135px]`}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </p>

                        <div className="flex xl:w-[254px] h-14 gap-5 ">
                            <Image 
                                src="images/Ourteam6.svg"
                                width={56}
                                height={56}
                                alt="Pic"
                                className="flex rounded-full"
                            />

                            <div className="flex flex-col w-[178px] h-12">
                                <p className="flex flex-col w-[115px] h-6 font-semibold text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    Stephen Kerubo
                                </p>

                                <p className="flex flex-col w-[109px] h-6 text-[#000000] text-[16px] leading-6 whitespace-nowrap">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex xl:w-[1152px] h-12 justify-between min-sm:w-[380px]">
                <Image 
                    src="images/Slider Dots.svg"
                    width={72}
                    height={8}
                    alt="Dots"
                    className="flex gap-2"
                />

                <div className="flex w-[111px] h-12 gap-[15px]">
                    <div className="flex w-12 h-12 rounded-[50px] border-[1px] p-3 gap-2 border-[#000000]">
                        <Image
                            src="images/arrow1.svg"
                            width={24}
                            height={24}
                            alt="Arrow"
                        />
                    </div>

                    <div className="flex w-12 h-12 rounded-[50px] border-[1px] p-3 gap-2 border-[#000000]">
                        <Image
                            src="images/arrow2.svg"
                            width={24}
                            height={24}
                            alt="Arrow"
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default TestimonialsSection;