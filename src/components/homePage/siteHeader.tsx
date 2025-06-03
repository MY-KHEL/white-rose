"use client"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { MobileNav } from "./mobileNav";
import { Navbar } from "./navBar";
import Link from "next/link";



export const SideHeader = () => {
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (window.scrollY > 10) {
        header?.classList.add("bg-white", "shadow-lg");
        header?.classList.remove("none");
      } else {
        header?.classList.add("bg-white");
        header?.classList.remove("bg-white", "shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="bg-white z-50 p-2 md:px-[10px] lg:px-[80px] w-full sticky top-0  transition-all duration-300 "
        id="header"
      >
        <div className="flex justify-between items-center">
          <div className="logo">
            <div className="w-[50px] ">
              <Image src={'/logo.jpg'} alt="site-logo" width={100} height={100} className="w-full"/>
            </div>
          </div>
          <div className="hidden md:inline-flex">
            <Navbar />
          </div>

          <div className="button hidden md:inline-flex  ">
            <Link href={"https://wa.chatfuel.com/Whiterosesfoundation"} target="_blank" >
            <button className="bg-green text-white px-4 py-[8px] rounded-full cursor-pointer">
              Make a Donation <ChevronRight size={18} color="white" className="inline-flex items-center"/>
            </button></Link>
          </div>
          <div className="md:hidden">
            <Drawer>

              <DrawerTrigger>

                <Menu size={24} color="black" />

              </DrawerTrigger>
              <DrawerTitle></DrawerTitle>
              <DrawerContent className="w-full p-3">

                <MobileNav />
              </DrawerContent>
            </Drawer>
          </div>

        </div>
      </div>


    </>
  );
};