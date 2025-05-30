"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const ScrollToTop=()=>{
    const pathname = usePathname()

   useEffect(() => {
 
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;

}