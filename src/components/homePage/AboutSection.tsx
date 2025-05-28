"use client"
import { motion, spring } from "framer-motion"
import { ChevronRight } from "lucide-react"
export const HomeAboutSection = () => {
    return (
        <>
            <div className="md:px-[80px] md:py-15 p-2">

                <div className="grid md:grid-cols-2 gap-8 ">

                    <div className="flex items-center justify-center">
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
                                className=" my-3">
                                <h1 className="text-4xl my-4 font-semibold italic cormorant-font text-green text-center md:text-left">About Us</h1>

                                <p className=" text-lg leading-6 rubik-font">The White Roses Foundation is a Faith-based Nonprofit organization dedicated to empowering the lives of marginalized girls between the age of 9 and 20 to discover purpose early and inspire global positive change.</p>
                            </motion.div>
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
                                className="">
                                <button className="bg-dark/90 cursor-pointer hover:bg-dark mt-4 rounded-full rubik-font text-lg text-white px-4 py-[8px] ">
                                    Read More <ChevronRight size={18} color="white" className="inline-flex items-center" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="bg-yellow mt-4  w-[85%]  md:w-[350px] h-[350px] relative rounded-2xl mx-auto">
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

                            src={'/IMG_6413.JPG'} alt="about-image" className="absolute w-full h-full object-cover rounded-2xl " />
                    </div>
                </div>
            </div>
        </>
    )
}