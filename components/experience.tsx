"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData, awardsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
export default function Experience() {

    const { ref } = useSectionInView('Experience');
    const { theme } = useTheme()

    return (<section id="experience"
        ref={ref}

        className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: theme === 'light' ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0,0,0,0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === 'light' ? "White" : 'rgba(255,255,255,0.15)',
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>

        <div className='mt-12 text-center'>
            <h3 className='mb-4 text-lg font-semibold'>Honours &amp; Awards</h3>
            <ul className='flex flex-wrap items-center justify-center gap-2'>
                {awardsData.map((award) => (
                    <li
                        key={award}
                        className='rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80'
                    >
                        {award}
                    </li>
                ))}
            </ul>
        </div>
    </section>
    )
}
