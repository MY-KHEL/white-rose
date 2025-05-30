"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const ScrollToTop=()=>{
    const pathname = usePathname()

    useEffect(()=>{
         const timeout = setTimeout(() => {
      // Try all possible scroll contexts
      window.scrollTo({ top: 0, behavior: "auto" });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 50); // Delay helps on iOS


    },[pathname]);
    
    return null
}