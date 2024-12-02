import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Roboto ({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})

const FooterSection = () => {
  return (
    <div className="flex xl:w-[1280px] xl:h-[684px] xl:top-[6824px] xl:p-20 xl:gap-20 bg-[#FFFFFF] min-sm::w-[428px] min-sm:h-[1411px] min-sm:px-6 min-sm:py-12 min-sm:gap-12">
        <div className="flex flex-col xl:w-[1120px] xl:h-[524px] xl:gap-20 min-sm:w-[380px] min-sm:h-[1315px] min-sm:gap-12">
            <div className="grid sm:grid-cols-1 xl:flex xl:w-[1120px] xl:h-[82px] xl:justify-between min-sm:w-[380px] min-sm:h-[261px] min-sm:gap-6 min-sm:justify-center">
                <div className="flex flex-col xl:w-[500px] xl:h-[51px] min-sm:w-[287px] min-sm:h-[91px] min-sm:gap-4 min-sm:ml-10">
                    <p className={`${roboto.className} flex flex-col xl:w-[500px] h-[27px] xl:text-start font-semibold text-[18px] leading-[27px] text-[#000000] min-sm:w-[287px] min-sm:text-center`}>
                        Subscribe to our newsletter
                    </p>

                    <p className={`${roboto.className} flex flex-col xl:w-[500px] xl:text-start xl:h-6 text-[16px] leading-6 text-[#000000] min-sm:w-[287px] min-sm:h-12 min-sm:text-center`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="flex flex-col xl:w-[400px] xl:h-[82px] gap-4 min-sm:w-[380px] min-sm:h-[146px]">
                    <div className="grid grid-cols-1 xl:flex xl:w-[400px] xl:h-12 gap-4 min-sm:w-[380px] min-sm:h-[112px]">
                        <div className="flex xl:w-[265px] h-12 p-3 gap-2 rounded-[5px] border-[1px] border-[#000000] bg-[#FFFFFF] min-sm:w-[380px]">
                            <p className={`${roboto.className} flex xl:w-[241px] h-6 text-[16px] leading-6 text-[#505050] min-sm:w-[356px]`}>
                                Enter your email
                            </p>
                        </div>

                        <Button variant={"secondary"} className="flex xl:w-[119px] h-12 rounded-[5px] border-[1px] border-[#000000] px-6 py-3 gap-2 bg-[#FFFFFF] min-sm:w-[380px]">
                            <span className={`${roboto.className} flex w-[71px] h-6 text-[16px] leading-6 text-[#000000]`}>
                                Subscribe
                            </span>
                        </Button>
                    </div>

                    <p className={`${roboto.className} flex xl:w-[400px] xl:justify-start h-[18px] text-[12px] leading-[18px] text-[#000000] min-sm:w-[380px] min-sm:items-center`}>
                        By subscribing you agree to with our <span className={`${roboto.className} flex text-[12px] leading-[18px] text-[#000000] underline ml-1`}> Privacy Policy</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row xl:items-start xl:w-[1120px] xl:h-[225px] xl:gap-10 xl:ml-6 min-sm:w-[172px] min-sm:h-[811px] min-sm:gap-8 min-sm:items-center">
            <div className="flex xl:justify-start justify-center xl:w-[250px] h-10 min-sm:w-[172px]">
                <Image
                    src="images/Ddsgnr Library.svg"
                    width={130.6}
                    height={40}
                    alt="Ddsgnr Logo"
                    className="flex "
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 text-center xl:text-left">
                {/*===== 1 container ======*/}
                <div className="flex flex-col xl:w-[250px] h-[225px] gap-4 min-sm:w-[172px]">
                    <p className={`${roboto.className} flex flex-col xl:w-[250px] h-6 font-semibold text-[16px] leading-[27px] text-[#000000] min-sm:w-[172px] min-sm:justify-center`}>
                        Courses
                    </p>

                    <div className="flex flex-col xl:w-[250px] h-[185px] min-sm:w-[172px]">
                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Business
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Development
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Technology
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Design
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Programming
                            </p>
                        </div>
                    </div>

                </div>

                {/*===== 2 container ======*/}
                <div className="flex flex-col xl:w-[250px] h-[225px] gap-4 min-sm:w-[172px]">
                    <p className={`${roboto.className} flex flex-col xl:w-[250px] h-6 font-semibold text-[16px] leading-[27px] text-[#000000] min-sm:w-[172px] min-sm:justify-center`}>
                        Resources
                    </p>

                    <div className="flex flex-col xl:w-[250px] h-[185px] min-sm:w-[172px]">
                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Career
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Resume
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Learning
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Interview Preparation
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Jobs
                            </p>
                        </div>
                    </div>

                </div>

                {/*===== 3 container ======*/}
                <div className="flex flex-col xl:w-[250px] h-[225px] gap-4 min-sm:w-[172px]">
                    <p className={`${roboto.className} flex flex-col xl:w-[250px] h-6 font-semibold text-[16px] leading-[27px] text-[#000000] min-sm:w-[172px] min-sm:justify-center`}>
                        About Us
                    </p>

                    <div className="flex flex-col xl:w-[250px] h-[185px] min-sm:w-[172px]">
                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Contact
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Help/Support
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                FAQ
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Terms and Conditions
                            </p>
                        </div>

                        <div className="flex flex-col xl:w-[250px] h-[37px] py-2 min-sm:w-[172px]">
                            <p className={`${roboto.className} flex xl:w-[250px] h-[21px] text-[14px] leading-[21px] text-[#000000] min-sm:w-[172px]`}>
                                Partners
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="flex flex-col xl:w-[1120px] xl:h-[57px] gap-8 min-sm:w-[380px] min-sm:h-[147px]">
            <div className="flex xl:w-[1120px] h-[1px] bg-[#000000] min-sm:w-[380px]"></div>

            <div className="flex flex-col xl:flex-row xl:w-[1120px] xl:h-6 xl:justify-between min-sm:w-[380px] min-sm:h-[114px] min-sm:gap-6">
                <div className="flex flex-col xl:flex-row xl:w-[564px] xl:h-[21px] gap-6 min-sm:w-[345px] min-sm:h-[66px]">
                    <p className={`${roboto.className} flex w-[195px] h-[21px] text-[14px] leading-[21px] text-[#000000]`}>
                        2023 Ddsgnr. All right reserved.
                    </p>

                    <div className="flex w-[345px] h-[21px] gap-6">
                        <p className="flex w-[87px] h-[21px] underline text-[#000000] text-[14px] leading-[21px] whitespace-nowrap">
                            Privacy Policy
                        </p>

                        <p className="flex w-[105px] h-[21px] underline text-[#000000] text-[14px] leading-[21px] whitespace-nowrap">
                            Terms of Service
                        </p>

                        <p className="flex w-[105px] h-[21px] underline text-[#000000] text-[14px] leading-[21px] whitespace-nowrap">
                            Cookies Settings
                        </p>
                    </div>
                </div>

                <div className="flex w-[132px] h-[34px] gap-3">
                    <Image 
                        src="images/facebook-icon.svg"
                        width={24}
                        height={24}
                        alt="Facebook Icon"
                    />

                    <Image 
                        src="images/instagram-icon.svg"
                        width={24}
                        height={24}
                        alt="Instagram Icon"
                    />

                    <Image 
                        src="images/twitter-icon.svg"
                        width={24}
                        height={24}
                        alt="Twitter Icon"
                    />

                    <Image 
                        src="images/linkedin-icon.svg"
                        width={24}
                        height={24}
                        alt="Linkedin Icon"
                    />
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default FooterSection;