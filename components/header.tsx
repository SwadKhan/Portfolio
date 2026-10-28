"use client";
import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className='z-[999] relative'>
            <motion.div
                className='fixed top-0 left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-auto sm:rounded-full dark:bg-gray-950
                dark:border-black/40 dark:bg-opacity-75'
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <nav className="flex items-center justify-center py-2 sm:py-0">
                    <ul className="flex w-[22rem] max-w-[90vw] flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-auto sm:max-w-none sm:flex-nowrap sm:gap-5 sm:px-6">
                        {
                            links.map((link) => (
                                <motion.li className='h-full flex items-center justify-center relative' key={link.hash}
                                    initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300', { "text-gray-950 dark:text-gray-200": activeSection === link.name, })}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            setTimeOfLastClick(Date.now());
                                        }}
                                    >
                                        {link.name}
                                        {
                                            link.name === activeSection && (<motion.span className='bg-gray-200 rounded-full absolute  inset-0  -z-10 dark:bg-gray-800'
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                }}></motion.span>)
                                        }

                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
        </header>
    )
}
