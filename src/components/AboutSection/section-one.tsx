"use client"
import { easeIn, motion } from "framer-motion"
export const FirstSection =()=>{
    const texts =[
        {
            content:"The White Roses Foundation is a faith-based nonprofit organization in Nigeria dedicated to empowering marginalized young girls between the ages of 9 and 21. We support girls to discover purpose early and inspire global positive change"
        },
        {
            content:"Our mission is to provide life skills training and spiritual guidance to young girls in underserved communities. By creating a safe, nurturing space rooted in Christian values, we help these girls heal, grow, and build confidence in their God-given purpose."
        },
        {
            content:"We are passionate about helping girls rise above their circumstances, find identity in Christ, and become equipped with the tools to thrive, generate income, and lead change in their communities."
        },
    ]
     const container = {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.5
                }
            }
        }
        const itemVariants = {
            hidden: { opacity: 0 ,y: 3,},
            show: { opacity: 1 ,y: 0,
                transition:{
                    ease:easeIn,
                }
            }
        }
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
                                className=" my-3">
                                   
                                <h1 className="text-4xl my-4 font-semibold text-green cormorant-font italic text-center md:text-left">About Us</h1>

                                
                                  <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{once:true}}
                                    className="">
                                    

                               
                                    {texts.map((text,index)=>(
                                        <motion.p variants={itemVariants} key={index} className=" text-md leading-6 rubik-font mt-3">{text.content}</motion.p> 
                                    ))}
                               
                               
                                 </motion.div>
                            </motion.div>
                                
                           
                        
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <div className="bg-yellow  w-[95%]  md:w-[350px] h-[350px] relative rounded-2xl mx-auto">
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

                            src={'/fairLady.png'} alt="about-image" className="absolute w-full h-full object-cover rounded-2xl " />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}