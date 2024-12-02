import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400"],
    subsets: ["latin"]
})
    

const HeaderSection = () => {
  return (
    <div>
        {/*===== SMALL HEADER =====*/}
        <div className="hidden xl:block bg-[#F7F7F7] xl:h-[54px] xl:top-[100px] xl:left-[100px] xl:pr-16 xl:pl-[62px] border-b-[1px] border-[#000000]">
         <div className="container bg-[#F7F7F7] flex xl:w-[1154px] xl:h-[54px] xl:py-3 xl:gap-8 border-b-[1px] border-[#000000]">

            <div className="flex xl:w-[386px] xl:h-[30px] xl:gap-4">
              <p className={`${roboto.className} flex xl:w-[205px] xl:h-[21px] xl:text-[14px] xl:leading-[21px] whitespace-nowrap xl:py-1 text-[#000000]`}>Phone Number: 956 742 455 678</p>
              <div className="border border-[#676767] xl:h-[30px]"></div>
              <div className="flex xl:w-[149px] xl:h-[21px]">
                <p className={`${roboto.className} text-[#000000] xl:text-[14px] xl:leading-[21px] xl:py-1`}>Email:<span className={`${roboto.className} text-[#000000] xl:text-[14px] xl:leading-[21px] xl:py-1`}>info@ddsgnr.com</span></p>
              </div>

            </div>

            <div className="flex w-[736px] h-6 gap-4">
              <div className="w-[132px] h-6 gap-3">
                <div className="fixed top-0 right-12 m-4 flex space-x-4">
                  <Image
                    src="/images/facebook-icon.svg"
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                  <Image
                    src="/images/instagram-icon.svg"
                    width={24}
                    height={24}
                    alt="Instagram"
                  />
                  <Image
                    src="/images/twitter-icon.svg"
                    width={24}
                    height={24}
                    alt="Twitter"
                  />
                  <Image
                    src="/images/linkedin-icon.svg"
                    width={24}
                    height={24}
                    alt="Linkedin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*===== MAIN HEADER =====*/}
        <div className="flex h-[72px] xl:mt-4 xl:top-[170px] xl:left-[100px] xl:bg-[#F7F7F7] border-b-[1px] border-[#676767] xl:px-16 min-sm:px-6 min-sm:bg-[#FFFFFF]">
        <div className="container flex xl:w-[1152px] xl:h-[44px] xl:bg-[#F7F7F7] min-sm:bg-[#FFFFFF] min-sm:w-[380px] min-sm:h-[48px] min-sm:gap-8 my-3">
            <div className="flex min-sm:w-[300px] min-sm:h-[41px]">
                <Image
                    src="/images/Ddsgnr Library.svg"
                    width={130.6}
                    height={41}
                    alt="Ddsgnr Library Icon"
                    className="flex xl:gap-[10.5px] min-sm:h-[41px]"
                />
            </div>

                {/*===== MENUBAR FOR LARGE SCREEN ======*/}
                <div className="hidden lg:flex w-[910px] h-11 gap-8 bg-[#FFFFFF]">
                    <div className="flex w-[687px] h-11 gap-8">
                        <div className="flex w-16 h-11 border-b-[1px] border-[#000000] p-[10px] gap-[10px]">
                            <Link href="/home" className={`${roboto.className} flex w-11 h-6 text-[#000000] text-[16px] leading-6`}>
                                Home
                            </Link>
                        </div>

                        <div className="flex w-[79px] h-11 p-[10px] leading-[10px]">
                            <Link href="/courses" className={`${roboto.className} flex w-[59px] h-6 text-[#000000] text-[16px] leading-6`}>
                                Courses
                            </Link>
                        </div>
                            
                        <div className="flex w-[81px] h-11 p-[10px] leading-[10px]">
                            <Link href="/services" className={`${roboto.className} flex w-[61px] h-6 text-[#000000] text-[16px] leading-6`}>
                                Services
                            </Link>
                        </div>
                                                        
                        <div className="flex w-[113px] h-11 p-[10px] leading-[10px]">
                            <Link href="/achievement" className={`${roboto.className} flex w-[93px] h-6 text-[#000000] text-[16px] leading-6`}>
                                Achievement
                            </Link>
                        </div>
                                                                                    
                        <div className="flex w-[86px] h-11 p-[10px] leading-[10px]">
                            <Link href="/About-Us" className={`${roboto.className} flex w-[66px] h-6 text-[#000000] text-[16px] leading-6`}>
                              About Us
                            </Link>
                        </div>
                                                                                                                
                        <div className="flex w-[104px] h-11 p-[10px] leading-[10px]">
                            <Link href="/testimonial" className={`${roboto.className} flex w-[84px] h-6 text-[#000000] text-[16px] leading-6`}>
                                Testimonial
                            </Link>
                            </div>
                        </div>

                        {/*====== HEADER BUTTON ======*/}
                        <div className="flex w-[191px] h-10 gap-[16px]">
                            <Button variant={"secondary"} className="flex w-20 h-10 bg-[#FFFFFF] rounded-[5px] border-[1px] border-[#000000] px-10 py-2">
                                <span className={`${roboto.className} flex w-10 h-6 text-[#000000] text-[16px] leading-6`}>
                                    Login
                                </span>
                            </Button>

                            <Button className="flex w-[95px] h-10 bg-[#000000] rounded-[5px] border-[1px] border-[#000000] px-10 py-2">
                                <span className={`${roboto.className} flex w-[55px] h-6 text-[#FFFFFF] text-[16px] leading-6`}>
                                    Sign Up
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/*===== MENUBAR FOR SMALL SCREEN =====*/}
                    <div className="flex w-12 h-12 gap-6 justify-center absolute top-0 right-0 mr-4 mt-2 sm:mt-5 bg-[#FFFFFF]  sm:block lg:hidden xl:hidden">
                        <Image 
                            src="/images/Menu.svg"
                            width={24}
                            height={24}
                            alt="Menu Icon"
                        />
                    </div>
                </div>
            </div>
    </div>
  );
};

export default HeaderSection;