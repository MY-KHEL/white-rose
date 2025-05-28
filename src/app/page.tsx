
import { HomeAboutSection } from "@/components/homePage/AboutSection";
import { HeroSection } from "@/components/homePage/HeroSection";
import { MobileProjectSection } from "@/components/homePage/mobileProjectSection";
import { ProjectSection } from "@/components/homePage/ProjectSection";

export  default  function HomePage (){
 
  return(
    <>
    
    <HeroSection/>
    <HomeAboutSection/>
    <ProjectSection/>
    <MobileProjectSection/>
   
    </>
  )
}