import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { navDetails } from "../data/navdata"

export const MobileNav=()=>{
    return(
        <>
        <div className="">
            {navDetails.map((item,index)=>(
                <Link href={item.link} key={index} className="block my-4  ">{item.title}</Link>
                            ))}
<Link href={"https://wa.chatfuel.com/Whiterosesfoundation"} target="_blank" >
<button className="bg-green text-white px-4 py-[8px] rounded-full">
              Make a Donation <ChevronRight size={18} color="white" className="inline-flex cursor-pointer items-center"/>
            </button></Link>
        </div>
        </>
    )
}