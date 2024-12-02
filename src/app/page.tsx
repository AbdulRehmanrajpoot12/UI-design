import React from "react";
import HeaderSection from "@/components/Header/page";
import HeroSection from "@/components/HeroPage/page";
import SponsorSection from "@/components/Sponsor/page";
import CoursesSection from "@/components/courses/page";
import AchievementSection from "@/components/Achievments/page";
import AchievmentSection2 from "@/components/Achievments/achievment-2/page"; 
import CoursesSection2 from "@/components/courses2/page";
import OurTeamSection from "@/components/OurTeam/page";
import TestimonialsSection from "@/components/Testimonials/page";
import FooterSection from "@/components/Footer/page";

export default function Home() {
  return (
    <div className="max-w-[1280px]">
      <HeaderSection />
      <HeroSection />
      <SponsorSection />
      <CoursesSection />
      <AchievementSection />
      <AchievmentSection2 />
      <CoursesSection2 />
      <OurTeamSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};