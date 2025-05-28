"use client"
import { ChevronRight } from "lucide-react"

import { motion, spring } from "framer-motion"
import Image from "next/image"

export const SubFooter = ()=>{

    return(
        <>
        <div className="lg:px-[160px] md:py-10 px-2 py-3">

            <div className="w-full h-[200px]  md:h-[350px] rounded-4xl relative">
                <Image src={'/subFooter.png'} alt="subFooter-image" fill className="object-cover rounded-4xl"/>
          
            <div className="absolute w-full h-full text-white text-center rounded-4xl bg-black/50 top-0 ">   
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
            
                                            }}>
            <h1 className=" text-3xl md:text-4xl mt-6 md:mt-15 cormorant-font italic p-2 ">Join Our Community</h1>
            <p className="text-md md:w-[400px] mx-auto mt-4 hidden md:block rubik-font text-lg">If you`&apos;`re passionate about empowering young girls and creating positive change. Together let`&apos;`s unlock the potential of our girls and build a brighter future.</p></motion.div>
                    <motion.div
                                    initial={{
                                        x: -30,
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1,
                                            type: spring,
                                        }
            
                                    }}
                                    className="w-fit mt-4 mx-auto">
                                    <button className="bg-green text-white mt-3 px-4 py-[8px] rounded-full">
                                        Make a Donation <ChevronRight size={18} color="white" className="inline-flex items-center" />
                                    </button>
                                </motion.div>
           
            </div>
            </div>
        </div>
        </>
    )
}