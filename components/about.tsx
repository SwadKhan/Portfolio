"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

import { useSectionInView } from '@/lib/hooks';



export default function About() {
    const { ref } = useSectionInView('About');


    return (<motion.section
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, }}
        id="about"

    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            After earning a degree in{" "}
            <span className="font-medium">Coumputer Science and Engineering</span>,  I decided to channel my passion for programming into a {" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite aspect of programming</span> is the
            problem-solving aspect; there's an <span className="underline">unparalleled satisfaction</span> in finding solutions to complex challenges. My core technical stack
            includes{" "}
            <span className="font-medium">
                React, Next.js, Node.js, and MongoDB
            </span>
            .Besides, I am also familiar with TypeScript and Prisma. I am committed to continuous learning and staying updated with emerging technologies. Currently, I am seeking a {" "}
            <span className="font-medium">full-time position</span>  software developer position.
        </p>

        <p>
            <span className="italic"> Outside of coding, </span>, I enjoy playing football, watching movies, and sketching. I also have a keen interest in {" "}
            <span className="font-medium">learning new subjects, </span> particularly {" "}
            <span className="font-medium">history and philosophy</span>.
        </p>
    </motion.section >)
}
