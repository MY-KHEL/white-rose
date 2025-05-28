import { ReactNode } from "react";
import { SideHeader } from "@/components/homePage/siteHeader";

export default function SideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <SideHeader />
      <main className="">{children}</main>
    </div>
  );
}