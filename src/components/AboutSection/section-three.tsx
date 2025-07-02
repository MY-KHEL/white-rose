"use client"
import { easeIn, easeOut, motion } from "framer-motion"
import Link from "next/link"
export const ThirdSection = () => {
    const texts = [
        {
            content: "Mary Ntekim is a passionate advocate for girls' empowerment in Nigeria, a wellness entrepreneur, and the visionary behind The White Roses Foundation."
        },
        {
            content: "With over 10 years of experience in massage therapy and spa administration, Mary is the founder of Kim's Therapy, a mobile massage brand trusted by major organizations such as Julius Berger and PwC."
        },
        {
            content: "Her heart, however, lies in advocacy and transformation. Through the White Roses Foundation, she channels her faith and life experience into supporting vulnerable girls in rural Nigerian communities, helping them build confidence, faith, and life-changing skills."
        },
        {
            content: "Mary is also a trained security professional and former Investigator at Strict Guards Security Agency, where she developed leadership and operational expertise. She holds a degree in criminology and security studies from the prestigious National open university of Nigeria. She brings this same commitment and excellence to her work in social impact."
        },
        {
            content: "Under her leadership, White Roses Foundation continues to be a growing light in the lives of girls who need it most."
        },
        {
            content: "She's also a blog writer on Wordpress specializing on topics about purpose."
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
        hidden: { opacity: 0, y: 3, },
        show: {
            opacity: 1, y: 0,
            transition: {
                ease: easeIn,
            }
        }
    }
    return (
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
                                        duration: 1,
                                        ease: easeOut,
                                    }

                                }}
                                viewport={{
                                    once: true
                                }}
                                className=" my-3">
                                <h1 className="text-4xl my-4 font-semibold text-green cormorant-font italic text-center md:text-left">Meet the Founder</h1>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="">



                                    {texts.map((text, index) => (
                                        <motion.p variants={itemVariants} key={index} className=" text-md leading-6 rubik-font mt-3">{text.content}</motion.p>
                                    ))}


                                </motion.div>
                            </motion.div>

                        </div>
                    </div>



                    <div className="flex items-center justify-center ">
                        <div className="w-full">
                            <div className="bg-yellow w-[95%]  md:w-[350px] h-[350px] relative rounded-2xl mx-auto">
                                <motion.img
                                    initial={{
                                        rotate: 0
                                    }}
                                    whileInView={
                                        {
                                            rotate: 6,
                                            transition: {
                                                duration: 2
                                            }
                                        }
                                    }
                                    viewport={{
                                        once: true
                                    }}
                                    src={'/classic.jpg'} alt="about-image" className="absolute w-full h-full object-cover rounded-2xl " />
                            </div>
                            <Link href={"https://maryntekim.wordpress.com/cv-bio/"}  target="_blank">
                            
                            
                            <h1 className=" mt-8 px-4 py-2 rounded-md text-center w-fit mx-auto border border-green cormorant-font">MARY NTEKIM</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}