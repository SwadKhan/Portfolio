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
            I work on the question of{" "}
            <span className="font-medium">what&apos;s worth protecting in distributed systems</span>. As a{" "}
            <span className="font-medium">Research Assistant</span> on a TÜBİTAK-funded IoT &amp; Critical-Infrastructure Security project, I built the harness that measures what{" "}
            <span className="italic">secure aggregation</span> really costs in federated learning, and I co-authored a{" "}
            <span className="font-medium">Springer LNNS paper</span> on defending smart grids against cyber-physical attacks. My background spans{" "}
            <span className="font-medium">machine-learning research, applied cryptography, and hands-on offensive security</span>.
        </p>

        <p>
            I came to security from{" "}
            <span className="font-medium">full-stack engineering</span>, which is why my experiments ship as working, reproducible code. On{" "}
            <span className="font-medium">Hack The Box</span> I&apos;ve reached{" "}
            <span className="underline">Silver tier</span> across Active Directory, web, and privilege-escalation challenges. I&apos;m building toward a{" "}
            <span className="font-medium">PhD in privacy-preserving machine learning for critical systems</span>.
        </p>
    </motion.section >)
}
