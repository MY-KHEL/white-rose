"use client"
import { animate, motion, useInView, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Branch } from "../homePage/branch"

export const ImpartSection = () => {
  const count1 = useMotionValue(0)
  const count2 = useMotionValue(0)
  const count3 = useMotionValue(0)

  const girlsImpacted = useTransform(count1, (latest) => Math.round(latest))
  const succesfulOutreaches = useTransform(count2, (latest) => Math.round(latest))
  const schoolsImpacted = useTransform(count3, (latest) => Math.round(latest))

  const animatedGirls = useMotionTemplate`${girlsImpacted}`
  const animatedSuccess = useMotionTemplate`${succesfulOutreaches}`
  const animatedSchools = useMotionTemplate`${schoolsImpacted}`

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Runs only once

  useEffect(() => {
    if (isInView) {
      const control1 = animate(count1, 1000, { duration: 3 })
      const control2 = animate(count2, 5, { duration: 3 })
      const control3 = animate(count3, 10, { duration: 3 })

      return () => {
        control1.stop()
        control2.stop()
        control3.stop()
      }
    }
  })

  return (
    <div ref={ref}>
      <h1 className="text-center text-green text-4xl font-semibold italic cormorant-font my-5">Our Impact In Numbers</h1>
      <div className="relative">
        <motion.div className="grid md:grid-cols-3 gap-8 px-4 lg:px-[200px]">
          <div className="w-full p-10 border-2 z-30 bg-white border-lightgreen rounded-lg text-center">
            <motion.div className="rubik-font text-lightgreen text-5xl font-semibold">
              {animatedGirls}
            </motion.div>
            <p className="uppercase text-md cormorant-font">girls impacted</p>
          </div>
          <div className="w-full p-10 border-2 z-30 bg-white border-lightgreen rounded-lg text-center">
            <motion.div className="rubik-font text-lightgreen text-5xl font-semibold">
              {animatedSuccess}
            </motion.div>
            <p className="uppercase text-md cormorant-font">successful outreaches</p>
          </div>
          <div className="w-full p-10 border-2 z-30 bg-white border-lightgreen rounded-lg text-center">
            <motion.div className="rubik-font text-lightgreen text-5xl font-semibold">
              {animatedSchools}
            </motion.div>
            <p className="uppercase text-md cormorant-font">schools reached</p>
          </div>
        </motion.div>
        <div className="hidden md:block md:absolute top-0 z-10">
          <Branch />
        </div>
      </div>
    </div>
  )
}
