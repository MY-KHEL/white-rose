"use client"
import { motion, spring } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Leaf } from "./Leaf"
import Link from "next/link"
export const HeroSection = () => {

    return (
        <>
            <div className="w-full  bg-linear-to-b md:py-20 from-white from-10% to-lightgreen relative to-80% pb-10">
                <div className="md:w-[600px] mx-auto  md:mt-12 ">
                    <motion.div
                        initial={{
                            y: 30,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 2
                            }

                        }}
                        className="">
                        <h1 className="text-4xl text-center mt-14 md:mt-0 mb-10 md:my-4 md:mb-1 font-semibold italic cormorant-font ">Where every girl is a White Rose</h1>
                        <p className="text-center text-lg rubik-font"> Nurturing the beauty, power and purpose in every young girl</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: -30,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                delay: 2,
                                type: spring,
                            }

                        }}
                        className="w-fit  mx-auto">
                               <Link href={"https://wa.chatfuel.com/Whiterosesfoundation"} target="_blank" >
                        <button className="bg-green text-white mt-3 px-4 z-[40] relative cursor-pointer py-[8px] rounded-full">
                            Make a Donation <ChevronRight size={18} color="white" className="inline-flex items-center" />
                        </button></Link>
                        
                    </motion.div>
                </div>

                <div className="">
                    <Leaf />
                </div>
                
                   <div className="absolute  bottom-0  opacity-60 w-full h-full">
            <Image src={'/shiny.png'} alt="rose-image" fill className="w-full object-cover pointer-events-none"/>
           
        </div>           <div className="absolute bottom-0 left-0">
            <Image src={'/white_rose.png'} alt="rose-image" width={300} height={200} className="w-[100px] pointer-events-none lg:w-[200px]"/>
           
        </div>
        <div className="absolute -bottom-4   right-0">
            <Image src={'/rose2.png'} alt="rose-image" width={150} height={200} className="w-[90px] lg:w-[150px]pointer-events-none"/>
           
        </div>
            </div>




    
        </>
    )
}