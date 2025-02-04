import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import visaHubImg from "@/public/Visa_hub.png";
import corpcommentImg from "@/public/corpcomment.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import languageImg from "@/public/languageClub.png";
import dragonNews from "@/public/dragonNews.png";

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
        title: "The Language Club",
        description:
            "The Language Club aims to break down language barriers and foster seamless communication through language learning. Our platform provides tools for learning Japanese, helping users unlock new opportunities by embracing linguistic diversity.",
        tags: ["React","Javascript","HTML", "CSS", "MySQl", "Tailwind"],
        imageUrl: languageImg,
        projectUrl:"https://language-club-5f147.web.app/"
    },
    {
        title: "Dragon News",
        description:
            "Dragon News is a dynamic news platform where users can explore the latest news across various categories. The site features advanced filtering, sorting, and pagination for a seamless browsing experience. Admins have full control over content management and site updates.",
        tags: ["React", "TypeScript", "Tailwind", "Redux", "MongoDB"],
        imageUrl: dragonNews,
        projectUrl: "https://dragon-news-24c24.web.app/category/01"
    },
    {
        title: "Visa Hub",
        description:
            "Visa Hub is a platform that simplifies the visa application process for users. The site provides detailed information on visa requirements, application procedures, and travel restrictions. Users can easily access visa forms, track their application status, and receive updates.",
        tags: ["React", "Javascript", "Tailwind", "Redux", "MongoDB"],
        imageUrl: visaHubImg,
        projectUrl:"https://visa-hub-8885f.web.app/"
    },
    {
        title: "Covid Monitoring & Helping Site",
        description:
            "Users can easily find recommendations on vaccines, hospitals, available donors, and COVID-19 updates. Additionally, the admin has full authority to implement reliable changes within the system.",
        tags: ["PHP", "HTML", "CSS", "MySQl", "Tailwind"],
        imageUrl: corpcommentImg,
        projectUrl:"https://github.com/SwadKhan/CovidUA"
    },
    {
        title: "Bank Management",
        description:
            "A public banking website featuring account creation, fund transfers, withdrawals, and balance inquiries.",
        tags: ["Java", "Tomcat", "SQL", "Tailwind", "JavaScript"],
        imageUrl: wordanalyticsImg,
         projectUrl:"https://github.com/SwadKhan/BankManagement"
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