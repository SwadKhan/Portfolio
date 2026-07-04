"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { securityData, certsData, publicationData } from "@/lib/data";

const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay },
});

const osBadge = (os: string) =>
    os.toLowerCase().includes("win")
        ? "bg-sky-600/90"
        : "bg-emerald-600/90";

const diffBadge = (d: string) => {
    const k = d.toLowerCase();
    if (k.includes("easy")) return "bg-green-600/80";
    if (k.includes("hard") || k.includes("insane")) return "bg-red-600/80";
    return "bg-amber-600/80";
};

export default function Security() {
    const { ref } = useSectionInView("Security");

    return (
        <section
            ref={ref}
            id="security"
            className="mb-28 max-w-[52rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Security Research &amp; CTF</SectionHeading>

            <p className="-mt-4 mb-3 text-gray-700 dark:text-white/70">
                Selected offensive-security work from Hack The Box, shown as
                high-level findings: vulnerability class, techniques, and public
                CVE references.
            </p>
            <p className="mb-8 text-sm italic text-gray-500 dark:text-white/50">
                Overviews only, no step-by-step exploitation, in line with Hack
                The Box&apos;s content policy. Retired machines only.
            </p>

            {/* Peer-reviewed publication */}
            <motion.div
                {...fadeIn(0)}
                className="mb-10 rounded-xl border border-black/5 bg-gray-100 p-5 text-left dark:bg-white/10"
            >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Peer-Reviewed Publication
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                    {publicationData.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-white/70">
                    {publicationData.authors}
                </p>
                <p className="mt-0.5 text-sm italic text-gray-500 dark:text-white/50">
                    {publicationData.venue}
                </p>
            </motion.div>

            {/* Certifications strip */}
            <motion.ul
                {...fadeIn(0)}
                className="mb-10 flex flex-wrap items-center justify-center gap-2"
            >
                {certsData.map((cert) => (
                    <li
                        key={cert}
                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                    >
                        {cert}
                    </li>
                ))}
            </motion.ul>

            {/* Findings grid */}
            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                {securityData.map((item, index) => (
                    <motion.article
                        key={item.machine}
                        {...fadeIn(0.05 * index)}
                        className="flex flex-col rounded-xl border border-black/5 bg-gray-100 p-5 transition hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                        <div className="mb-2 flex items-center justify-between gap-2">
                            <h3 className="text-lg font-semibold dark:text-white">
                                {item.machine}
                            </h3>
                            <div className="flex shrink-0 gap-1.5">
                                <span
                                    className={`${osBadge(
                                        item.os
                                    )} rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-white`}
                                >
                                    {item.os}
                                </span>
                                <span
                                    className={`${diffBadge(
                                        item.difficulty
                                    )} rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-white`}
                                >
                                    {item.difficulty}
                                </span>
                            </div>
                        </div>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                            {item.category}
                        </p>

                        <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-700 dark:text-white/70">
                            {item.overview}
                        </p>

                        <ul className="mb-2 flex flex-wrap gap-1.5">
                            {item.techniques.map((t) => (
                                <li
                                    key={t}
                                    className="rounded-full bg-black/70 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-white dark:bg-black/40 dark:text-white/70"
                                >
                                    {t}
                                </li>
                            ))}
                        </ul>

                        {item.cve.length > 0 && (
                            <p className="text-[0.7rem] font-medium text-gray-500 dark:text-white/50">
                                Ref: {item.cve.join(", ")}
                            </p>
                        )}
                    </motion.article>
                ))}
            </div>

            <p className="mt-8 text-sm text-gray-600 dark:text-white/60">
                Full profile:{" "}
                <a
                    className="underline hover:text-gray-900 dark:hover:text-white"
                    href="https://app.hackthebox.com/users/2602750"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hack The Box
                </a>
            </p>
        </section>
    );
}
