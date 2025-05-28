"use client"
import { motion, spring } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Volunteer = () => {
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
                                className="">
                                <h1 className="text-4xl my-4 font-semibold cormorant-font italic text-green text-center md:text-left">Join our Passionate community</h1>

                                <p className=" text-lg leading-6 rubik-font">If you&apos;re passionate about empowering young girls and creating positive change. Join us to unlock the potential of the beautiful girls in our community and build a brighter future. Volunteers are crucial in the work we do. </p>
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
                                <button className="bg-green/90 cursor-pointer hover:bg-green mt-4 rounded-full rubik-font text-lg text-white px-4 py-[8px] ">
                                    Become a Volunteer <ChevronRight size={18} color="white" className="inline-flex items-center" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="bg-yellow  w-[85%]  md:w-[350px] h-[350px] relative rounded-2xl mx-auto">
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

                            src={'/volunteer.jpg'} alt="about-image" className="absolute w-full h-full object-cover rounded-2xl " />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Volunteer;