import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Academic Graduation",
        location: "BRAC University,Dhaka.",
        description:
            "I graduated from BRAC University with a degree in Computer Science and Engineering. I immediately began searching for opportunities to work as a software engineer.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Software Developer",
        location: "BRAC BANK(Head Office),Dhaka.",
        description:
            "During the internship with a dynamic team, I received hands-on experience in Java, JavaScript, CSS, and DOM manipulation. I improved my web development abilities, discovered the nuances of teamwork, and gained practical knowledge of tech applications through close collaboration.",
        icon: React.createElement(CgWorkAlt),
        date: "July,2023 - Oct,2023",
    },
    {
        title: "Full-Stack Developer",
        location: "Dhaka,Bangladesh",
        description:
            "I am currently advancing my career as a full-stack developer, specializing in a stack that includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I am open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Covid Monitoring & Helping Site",
        description:
            "Users can easily find recommendations on vaccines, hospitals, available donors, and COVID-19 updates. Additionally, the admin has full authority to implement reliable changes within the system.",
        tags: ["PHP", "HTML", "CSS", "MySQl", "Tailwind"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Book Forum & Recommendation",
        description:
            "Users can easily discover new book recommendations, purchase books, and organize event. Additionally, the admin has full control over the system, including features such as filtering, sorting, and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "MongoDB"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Bank Management",
        description:
            "A public banking website featuring account creation, fund transfers, withdrawals, and balance inquiries.",
        tags: ["Java", "Tomcat", "SQL", "Tailwind", "JavaScript"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;