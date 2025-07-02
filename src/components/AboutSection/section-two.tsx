"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
export const SecondSection =()=>{
    const events =[
        {
            title:'Community Outreach',
            link:"https://www.instagram.com/p/C1ZUxJwMcoW/?igsh=MmxyeGlidzZ1cnNz"
        },
        {
            title:'WRF Annual Girls Summit',
            link:"https://www.instagram.com/p/DEVbisAIOwO/?igsh=bWliM2ZzZTd5cDYw"
        },
        {
            title:'School Outreach Program',
            link:"https://www.instagram.com/reel/DGAU_YpI5Bv/?igsh=MTJ0Mm00cHFpOTFidA=="
        },
        {
            title:'Mentorship Program',
            link:"https://www.instagram.com/reel/DA0YExGocPF/?igsh=dDQ2aXA1ODB4dHBh"
        },
    ]
    return(
        <>
              <div className="md:px-[120px] md:py-15 p-2">

                <div className="grid md:grid-cols-2 gap-8 ">

                    <div className="">
                        <div className="lg:w-[400px]">
                            <motion.div
                                initial={{
                                    y: 60,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1
                                    }

                                }}
                                viewport={{
                                    once:true
                                }}
                                className=" my-3">
                                <h1 className="text-4xl my-4 font-semibold text-green cormorant-font italic text-center md:text-left">Our Story</h1>

                                <p className=" text-md leading-6 rubik-font">The White Roses Foundation began with a simple act of love and faith. In 2023, our founder, <b>Mary Ntekim</b> , began visiting a compound in Ijesha, Lagos, every Sunday to share the gospel and connect with young girls dealing with rejection, depression, and a loss of purpose.</p>
                                <p className=" text-md leading-6 rubik-font mt-3">What began as small community gatherings quickly grew into a movement committed to mental health advocacy, spiritual mentorship, and purpose discovery. Today, White Roses Foundation has reached over 1,000 young girls across Nigeria through initiatives like:</p>

                                <div className=" my-3">
                                    {events.map((detail,index)=>(
                                        <div className="flex items-center gap-8 " key={index}>
                                        <div className="flex items-center gap-2">
                                            <Image src="/green-flower.png" alt='bullet-image' width={15} height={15} className="w-[15px]"/>
                                            <p>{detail.title}</p>
                                        </div>

                                        <Link href={detail.link} className="underline">see more</Link>
                                    </div>
                                    ))}
                                    
                                </div>
                                <p className=" text-md leading-6 rubik-font mt-3">Our programs are designed to help girls grow in faith, live a purpose driven life and inspire global positive change. </p>
                            </motion.div>
                        
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <div className="bg-yellow   w-[95%]  md:w-[350px] h-[350px] relative rounded-2xl mx-auto">
                        <motion.img
                            initial={{
                                rotate:0
                            }}
                            whileInView={
                                {
                                    rotate:6,
                                    transition:{   
                                        duration:2
                                    }
                                }
                            }
                            viewport={{
                                once:true
                            }}
                            src={'/groupphoto.jpg'} alt="about-image" className="absolute w-full h-full object-cover rounded-2xl " />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}