
"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { useRef } from "react"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

export const MobileProjectSection = () => {
    const plugin = useRef<any>(
        AutoScroll({ startDelay: 1000, stopOnInteraction: false })
    )
    const projectDetails = [
        {
            title: 'WRF Annual Girls summit',
            imageLink: '/african-summit.jpg'
        },
        {
            title: 'Mentorship program',
            imageLink: '/monitoring-greatness.jpg'
        },
        {
            title: 'School Outreach Program',
            imageLink: '/people.jpg'
        },
    ]
    return (
        <>
        <div className="p-4 block md:hidden">
            <h1 className="text-center text-4xl text-green my-10 font-semibold  italic cormorant-font">Our Projects</h1>
            <Carousel
                plugins={[plugin.current]}
                className="w-full "
                opts={{
                    loop: true
                }}
            >
                <CarouselContent>
                    {projectDetails.map((detail, index) => (

                        <CarouselItem key={index}>
                            <div className=" w-full border-2 border-green rounded-2xl p-4">

                                <Image src={detail.imageLink} alt='corresponding-image' width={300} height={250} className=" w-full object-cover  mx-auto h-[250px] " />

                                <p className="text-center text-lg my-4 italic cormorant-font">{detail.title}</p>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>

            </Carousel>
              <div className=" w-fit mx-auto  md:w-[200px] text-green">
                    <button className="border border-green px-4 py-[8px] mt-6 rounded-full "> Read More <ChevronRight size={18} color="#5C9341" className="inline-flex items-center"/></button>
                </div>
            </div>
        </>
    )
}



