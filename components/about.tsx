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
            I research{" "}
            <span className="font-medium">security and privacy in distributed and machine-learning systems</span>. As a{" "}
            <span className="font-medium">Research Assistant</span> on a TÜBİTAK-funded IoT and critical-infrastructure security project, I built the measurement harness that quantifies what{" "}
            <span className="italic">secure aggregation</span> costs in federated intrusion detection. I co-authored a{" "}
            <span className="font-medium">Springer paper (ICCDM-2026, in press)</span> on defending smart grids against cyber-physical attacks, and wrote{" "}
            <span className="font-medium">MCP-Guard</span>, a static security scanner for Model Context Protocol servers.
        </p>

        <p>
            My work spans{" "}
            <span className="font-medium">machine-learning research, applied cryptography, and offensive security</span>, and ships as reproducible code. On{" "}
            <span className="font-medium">Hack The Box</span> I hold{" "}
            <span className="underline">Silver tier</span> across Active Directory, web, and privilege-escalation machines. My research focus is the{" "}
            <span className="font-medium">security of LLM-based agents</span> and privacy-preserving federated learning for critical infrastructure.
        </p>
    </motion.section >)
}
