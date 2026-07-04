import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaShieldAlt, FaFlask } from "react-icons/fa";
import visaHubImg from "@/public/Visa_hub.png";
import dragonNews from "@/public/dragonNews.png";
import chatbotProImg from "@/public/chatbotpro.png";

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
        name: "Security",
        hash: "#security",
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
        title: "B.Sc. in Computer Science & Engineering",
        location: "BRAC University, Dhaka",
        description:
            "Completed my undergraduate degree in Computer Science & Engineering, building the software-engineering foundation I now apply to security research and secure system design.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Software Developer (Intern)",
        location: "BRAC Bank (Head Office), Dhaka",
        description:
            "Worked in a fintech engineering team on web applications, gaining first-hand exposure to the security requirements of banking systems: authentication, transaction integrity, and secure data handling.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul 2023 - Oct 2023",
    },
    {
        title: "M.Sc. Cybersecurity: Web Security & Cryptology",
        location: "CyberMACS / Kadir Has University, Istanbul",
        description:
            "Graduate study focused on applied cryptography, web security, and privacy-preserving machine learning, deepening the theoretical foundations behind my research and offensive-security work.",
        icon: React.createElement(LuGraduationCap),
        date: "2024 - present",
    },
    {
        title: "Research Assistant: IoT & Critical-Infrastructure Security",
        location: "TÜBİTAK-funded project, Kadir Has University",
        description:
            "Designed and implemented a benchmarking harness for secure aggregation in federated learning, measuring latency, communication overhead, and energy cost on the Edge-IIoT dataset (PyTorch, scikit-learn). Co-authored a Springer LNNS paper on cyber-physical defence of smart grids.",
        icon: React.createElement(FaFlask),
        date: "2025 - present",
    },
] as const;

// Offensive-security experience (Hack The Box)
// POLICY NOTE: high-level overviews only (vulnerability CLASS and public CVE
// references, NO step-by-step exploitation). This keeps the showcase compliant
// with Hack The Box's content rules while still evidencing skill.
// TODO(Swad): verify each machine is RETIRED and add the exact CVE IDs for
// your actual solves; cards render CVE chips only when the array is non-empty.
export const securityData = [
    {
        machine: "Cicada",
        os: "Windows",
        difficulty: "Easy",
        category: "Active Directory",
        overview:
            "Domain enumeration via SMB and password-spraying led to credential access; escalation abused an over-privileged account and a backup operator misconfiguration to reach Domain Administrator.",
        techniques: ["SMB enumeration", "Password spraying", "AD privilege abuse"],
        cve: [] as string[],
    },
    {
        machine: "Sedna",
        os: "Linux",
        difficulty: "Medium",
        category: "Web → RCE → Privesc",
        overview:
            "An outdated web platform exposed a known remote-code-execution flaw for the initial foothold; local privilege escalation exploited a misconfigured setuid/capability vector.",
        techniques: ["Web exploitation", "Known-CVE RCE", "Linux privilege escalation"],
        cve: [] as string[],
    },
    {
        machine: "Reactor",
        os: "Linux",
        difficulty: "Medium",
        category: "Web Application",
        overview:
            "Chained an authentication weakness with a server-side injection to gain execution, then pivoted through an exposed service to escalate privileges.",
        techniques: ["Auth bypass", "Server-side injection", "Service pivoting"],
        cve: [] as string[],
    },
    {
        machine: "Wallos",
        os: "Linux",
        difficulty: "Medium",
        category: "Web / CVE Analysis",
        overview:
            "Reproduced a publicly disclosed vulnerability in a self-hosted application to obtain code execution, documented root cause and the corresponding vendor fix.",
        techniques: ["CVE reproduction", "Source review", "Remediation write-up"],
        cve: [] as string[],
    },
    {
        machine: "Pterodactyl",
        os: "Linux",
        difficulty: "Hard",
        category: "Container / Escape",
        overview:
            "Gained a foothold in a constrained application context, then escalated through a container/host boundary misconfiguration to compromise the underlying host.",
        techniques: ["Container security", "Host escape", "Privilege escalation"],
        cve: [] as string[],
    },
    {
        machine: "WingData",
        os: "Linux",
        difficulty: "Medium",
        category: "Data Service Exploitation",
        overview:
            "Exploited an exposed data/API service to leak credentials, then reused them against internal services to move laterally and escalate.",
        techniques: ["API abuse", "Credential reuse", "Lateral movement"],
        cve: [] as string[],
    },
] as const;

export const certsData = [
    "Cisco Certified Network Associate (CCNA)",
    "Microsoft AZ-500: Azure Security Engineer (in progress)",
    "Hack The Box: Silver tier (AI/LLM & ICS/OT paths)",
] as const;

export const projectsData = [
    {
        title: "ChatBotPRO: RAG Chatbot",
        description:
            "A deployed RAG chatbot (Python, Streamlit) that answers strictly from an uploadable knowledge base (PDF, image, PPTX), built with a security lens: prompt-injection hardening, API-key hygiene, and safe handling of user input.",
        tags: ["Python", "Streamlit", "RAG", "LLM Security"],
        imageUrl: chatbotProImg,
        projectUrl: "https://chatbotpro-fnivcyjrojgjema6cqoumv.streamlit.app/",
    },
    {
        title: "Federated Learning Secure-Aggregation Benchmark",
        description:
            "Research harness (TÜBİTAK) measuring the real cost of secure aggregation in federated learning (latency, communication overhead, and energy) on the Edge-IIoT dataset. Basis for ongoing work on sparse, privacy-preserving FL for critical infrastructure.",
        tags: ["PyTorch", "Federated Learning", "Privacy", "Research"],
        imageUrl: visaHubImg,
        projectUrl: "https://github.com/SwadKhan",
    },
    {
        title: "Dragon News (Engineering Background)",
        description:
            "Full-stack news platform with filtering, sorting, pagination, and admin content control, representative of my software-engineering foundation, which lets my security research ship as reproducible, production-quality code.",
        tags: ["React", "TypeScript", "Tailwind", "MongoDB"],
        imageUrl: dragonNews,
        projectUrl: "https://dragon-news-24c24.web.app/category/01",
    },
] as const;

export const skillsData = [
    // Security
    "Penetration Testing",
    "Active Directory",
    "Web Exploitation",
    "Privilege Escalation",
    "Network Security",
    "Applied Cryptography",
    "LLM / AI Security",
    "OSINT & Enumeration",
    // Research / ML
    "Python",
    "PyTorch",
    "scikit-learn",
    "Federated Learning",
    "OpenDSS",
    // Tooling / Engineering
    "Nmap",
    "Burp Suite",
    "Linux",
    "Bash",
    "Git",
    "React / Next.js",
] as const;
