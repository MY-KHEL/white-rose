import { ReactNode } from "react";
import { SideHeader } from "@/components/homePage/siteHeader";
import { ScrollToTop } from "@/components/homePage/scrollToTop";

export default function SideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <SideHeader />
        <ScrollToTop/>

      <main className="">{children}</main>
    </div>
  );
}