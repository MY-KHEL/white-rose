"use client"
import {
    motion, spring
} from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Link from "next/link"
export const Footer = () => {
    const getYear = new Date().getFullYear()
    return (
        <>
            <div className="bg-green w-full p-2 md:p-10 lg:p-20">
                <div className="text-center text-white ">
                    <motion.div className=""
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
                        <h1 className="text-3xl cormorant-font ">Empowering Young Girls to Bloom with Purpose</h1>
                        <p className="rubik-font text-md mt-4 md:w-[500px] mx-auto p-2">At the The White Roses foundation, we nurture the potential of marginalized girls helping them discover who they are, what they can become, and how they can impact the world.</p>
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
                        className="w-fit mt-4 mx-auto">
                        <button className="border border-white px-4 py-[8px] rounded-full ">👋 Contact Us</button>
                    </motion.div>

                    <Separator className="my-4  lg:my-10" />
                </div>
                <div className=" text-white grid md:grid-cols-4 gap-8 p-2">
                    <div className="col-span-1">
                         <div className="w-[40px] ">
                                      <Image src={'/secondary-logo.png'} alt="site-logo" width={100} height={100} className="w-full"/>
                                    </div>
                    </div>
                     <div className="md:hidden col-span-1 text-right">
                        <div className="flex gap-4 items-center justify-end"> <Instagram size={24} color="white" />
                            <Linkedin size={24} color="white" />
                        </div>
                    </div>
                    <div className="col-span-2  text-center"> {getYear} Abigail X Mykhel. All Rights Reserved.</div>
                    <div className="hidden md:flex col-span-1 text-right">
                        <div className="flex gap-4 items-center justify-end"> 
                            <Link href={"https://www.instagram.com/whiterosesf?igsh=MTZobDV1aGVmMWUwdw==" } target="_blank"><Instagram size={24} color="white" /></Link>
                            
                        <Link href={"https://www.linkedin.com/company/the-white-roses-foundation/"} target="_blank" >
                            <Linkedin size={24} color="white" /></Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}