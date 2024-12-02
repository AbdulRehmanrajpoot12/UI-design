import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto ({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})


const OurTeamSection = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:w-[1280px] xl:h-[980px] xl:top-[4991px] xl:px-16 xl:py-28 xl:gap-16 bg-[#F7F7F7] min-sm:w-[428px] min-sm:h-[1075px] min-sm:px-6 min-sm:py-12 min-sm:gap-12">
        <div className="flex flex-col xl:w-[768px] xl:h-[109px] gap-4 min-sm:w-[363px] min-sm:h-[120px]">
            <h2 className={`${roboto.className} flex justify-center xl:w-[768px] xl:h-[58px] font-bold xl:text-[48px] xl:leading-[57.6px] text-center text-[#000000] min-sm:w-[363px] min-sm:h-[42px] min-sm:text-[32px] min-sm:leading-[41.6px]`}>
                Our team
            </h2>

            <p className={`${roboto.className} flex justify-center xl:w-[768px] xl:h-[27px] text-[18px] leading-[27px] text-[#000000] text-center min-sm:w-[363px] min-sm:h-[54px]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
        </div>

        <div className="flex flex-col xl:w-[1280px] xl:h-[482px] gap-24 min-sm:w-[380px] min-sm:h-[723px]">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/*====== Row 1 ======*/}
            <div className="flex flex-col lg:flex-row xl:w-[1280px] xl:h-[273px] gap-12">
                {/*====== Team Member 1 ======*/} 
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam1.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                James Nduku
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                Marketing Coordinator
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            
            {/*===== Team member 2 ======*/}
            <div className="flex flex-col xl:w-[1280px] xl:h-[273px] xl:gap-12">
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam2.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                Joseph Munyambu
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                Nursing Assistant
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            </div>

            {/*===== Team member 3 ======*/}
            <div className="flex flex-col xl:w-[1280px] xl:h-[273px] xl:gap-12">
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam3.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                Joseph Munyambu
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                Nursing Assistant
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            </div>
            </div>
            </div>
            
            {/*====== Row 2 ======*/}
            <div className="hidden lg:flex xl:w-[1280px] xl:h-[273px] xl:gap-12 ">
                {/*====== Team Member 1 ======*/} 
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam4.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                Erick Kipkemboi
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                Web Designer
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            
            {/*===== Team member 2 ======*/}
            <div className="flex xl:w-[1280px] xl:h-[273px] xl:gap-12">
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam5.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                Stephen Kerubo
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                President of Sales
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            </div>

            {/*===== Team member 3 ======*/}
            <div className="flex xl:w-[1280px] xl:h-[273px] xl:gap-12">
                <div className="flex flex-col justify-center items-center w-[394.67px] xl:h-[273px] min-sm:h-[209px] gap-6">
                    <Image
                        src="images/Ourteam6.svg"
                        width={80}
                        height={80}
                        alt="Image Icon"
                    />

                    <div className="flex xl:w-[394.67px] xl:h-[121px] xl:gap-1">
                        <div className="flex flex-col w-[394.67px] h-[57px] min-sm:gap-1">
                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[30px] font-semibold text-[#000000] text-[20px] leading-[30px] text-center`}>
                                John Leboo
                            </p>

                            <p className={`${roboto.className} flex justify-center w-[394.67px] h-[27px] text-[#000000] text-[18px] leading-[27px] text-center `}>
                                Dog Trainer
                            </p>
                        </div>
                    </div>

                    <div className="flex w-[100px] h-6 gap-[14px]">
                        <Image 
                            src="images/linkedin-icon.svg"
                            width={24}
                            height={24}
                            alt="linkedin icon"
                        />

                        <Image 
                            src="images/twitter-icon.svg"
                            width={24}
                            height={24}
                            alt="Twitter Icon"
                        />

                        <Image 
                            src="images/Dribble.svg"
                            width={24}
                            height={24}
                            alt="Dribble Icon"
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="flex lg:hidden w-[89px] h-10 rounded-[5px] border-[1px] px-4 py-2 gap-2 border-[#000000]">
            <p className={`${roboto.className} w-[54px] h-6 text-[16px] text-[#000000] leading-6 whitespace-nowrap`}>View All </p>
        </div>
    </div>
  );
};

export default OurTeamSection;