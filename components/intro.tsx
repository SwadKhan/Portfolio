"use client"
import Image from 'next/image'
import React, { useActionState } from 'react'
import img from '../app/Swad_Mustasin_khan.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    const { ref } = useSectionInView('Home');

    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image src={img} alt="Swad Khan"
                            width={192}
                            height={192}
                            quality="95"
                            priority={true}
                            className='h-36 w-36 rounded-full
                        object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Swad.</span> I&apos;m a {" "}
                <span className="font-bold">cybersecurity researcher</span> working on {" "}
                <span className="font-bold">privacy-preserving machine learning for critical infrastructure</span>, and an active {" "}
                <span className="italic">red-teamer</span> on {" "}
                <span className="underline">Hack The Box</span>. I benchmark secure aggregation for federated learning, and I break systems to understand how they fail.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                }}
            >
                <Link href="#contact" className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950   active:scale-100 transition'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >Contact me here{" "}<BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' /></Link>

                <a className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='/CV.pdf' download >Download CV<HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>

                <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 ' href='https://linkedin.com/in/swad-khan-196a68251' target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                </a>

                <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.30rem] rounded-full focus:scale-110 hover:scale-[1.15]  active:scale-[1.15] 
                hover:text-gray-950
                transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/SwadKhan' target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section >
    )
}
