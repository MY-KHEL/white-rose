"use client"
import { easeInOut, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export const ProjectSection =()=>{
    const container ={
        initial:{
            opacity:0,

        },
        animate:{
            opacity:1,
            transition:{
                duration:2,
                 staggerChildren:0.7
                
            }
        }
    }

    const item ={
        initial:{
            opacity:0,
            y:20
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
               ease:easeInOut
            }
        }
    }
   const projectDetails=[
    {
        title:'WRF Annual Girls summit',
        imageLink:'/african-summit.jpg'
    },
    {
        title:'Mentorship program',
        imageLink:'/monitoring-greatness.jpg'
    },
    {
        title:'School Outreach Program',
        imageLink:'/people.jpg'
    },
   ]
    return(
        <>
        <div className="md:block hidden">
            <div className="lg:px-[160px] md:py-15 p-2">
                <h1 className="text-center text-4xl text-green my-10 font-semibold  italic cormorant-font">Our Projects</h1>
                <motion.div variants={container} initial="initial" whileInView="animate" className="grid md:grid-cols-3 gap-4 lg:gap-8">
                    {projectDetails.map((detail,index)=>(
                         <motion.div variants={item} className=" w-full border-2 border-green rounded-2xl p-4"key={index}>
                            
                                    <Image src={detail.imageLink} alt='corresponding-image' width={250} height={250}  className=" w-[250px] object-cover  mx-auto h-[250px] " />
                           
                            <p className="text-center text-lg my-4 italic cormorant-font">{detail.title}</p>
                    </motion.div>
                    ))}
                   
                </motion.div>
                <div className="mx-auto  md:w-[200px] text-green">
                    <button className="border border-green px-4 py-[8px] mt-6 rounded-full"> Read More <ChevronRight size={18} color="#5C9341" className="inline-flex items-center"/></button>
                </div>
            </div>
        </div>
        
        </>
    )
}