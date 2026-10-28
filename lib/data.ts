import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaShieldAlt, FaFlask } from "react-icons/fa";
import ecoAgentImg from "@/public/eco-agent.png";
import shipAuthImg from "@/public/shipofflineauth.png";
import mcpGuardImg from "@/public/mcpguard.png";
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
        title: "B.Sc. Thesis: SAAD, Smartphone-Addiction Detection",
        location: "BRAC University, Dhaka",
        description:
            "Detected smartphone addiction from seven days of usage and sensor data across 30 participants, combining K-Means/K-Medoids clustering with LSTM-based activity recognition; validated against SAS-SV scores; 28% of participants showed addictive behaviour. Manuscript under review at Frontiers.",
        icon: React.createElement(FaFlask),
        date: "2022 - 2023",
    },
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
        title: "M.Sc. Applied Cybersecurity: Erasmus Mundus (CyberMACS)",
        location: "Kadir Has University, Istanbul (Year 1) · Ss. Cyril and Methodius University, Skopje (Year 2)",
        description:
            "Erasmus Mundus Joint Master scholarship. Year 1 GPA 3.32/4.00; Year 2 on the Web Security and Cryptology track. Expected graduation October 2027.",
        icon: React.createElement(LuGraduationCap),
        date: "2025 - present",
    },
    {
        title: "Research Case Study: Cyber-Physical Defence in Smart Grids",
        location: "Kadir Has University, with Assoc. Prof. Oğuzhan Ceylan",
        description:
            "Applied meta-heuristic algorithms (GA, PSO) to mitigate cyber-physical attacks on OpenDSS distribution-grid simulations. Published at ICCDM-2026 (Springer, in press).",
        icon: React.createElement(FaFlask),
        date: "2025 - 2026",
    },
    {
        title: "Research Assistant: TÜBİTAK 1001 Project",
        location: "Kadir Has University (Secure Federated Learning for Critical Infrastructures)",
        description:
            "Built a measurement harness for secure aggregation in federated intrusion detection (Edge-IIoT) on a four-node Raspberry Pi testbed. Additive masking cost +4.8% uplink and under 0.34 ms per round; an 8-round schedule matched 30-round detection quality with 3.7× less uplink. Manuscript in preparation.",
        icon: React.createElement(FaFlask),
        date: "Dec 2025 - Sep 2026",
    },
] as const;

// Offensive-security experience (Hack The Box)
// POLICY NOTE: high-level overviews only (vulnerability CLASS and public CVE
// references, NO step-by-step exploitation). This keeps the showcase compliant
// with Hack The Box's content rules while still evidencing skill.
// Active machines (Sedna, Reactor, Wallos, WingData) show no attack details.
// TODO(Swad): when one retires, restore its overview; add the exact CVE IDs for
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
        category: "Active machine",
        overview:
            "Solved (user and root). Details will be published once Hack The Box retires this machine.",
        techniques: [] as string[],
        cve: [] as string[],
    },
    {
        machine: "Reactor",
        os: "Linux",
        difficulty: "Medium",
        category: "Active machine",
        overview:
            "Solved (user and root). Details will be published once Hack The Box retires this machine.",
        techniques: [] as string[],
        cve: [] as string[],
    },
    {
        machine: "Wallos",
        os: "Linux",
        difficulty: "Medium",
        category: "Active machine",
        overview:
            "Solved (user and root). Details will be published once Hack The Box retires this machine.",
        techniques: [] as string[],
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
        category: "Active machine",
        overview:
            "Solved (user and root). Details will be published once Hack The Box retires this machine.",
        techniques: [] as string[],
        cve: [] as string[],
    },
] as const;

export const certsData = [
    "TryHackMe: Jr Penetration Tester (ID THM-95GASNDZHN)",
    "TryHackMe: Web Application Pentesting",
    "Hack The Box: AI Red Teamer path (in progress)",
    "Cisco Certified Network Associate (CCNA)",
    "Hack The Box: Silver tier (AI/LLM & ICS/OT paths)",
] as const;

export const publicationData = {
    title: "Meta-Heuristic Optimization Approach for Cyber-Physical Defense in Smart Grids",
    authors: "Swad Mustasin Khan, Sacha Labastie, Oğuzhan Ceylan",
    venue: "ICCDM-2026, Springer (in press)",
} as const;

export const awardsData = [
    "Erasmus Mundus Joint Master scholarship (European Union), 2025 - 2027",
    "Best Collaborators award, IACyC 2026 hackathon (Kadir Has University)",
    "Vice-Chancellor's List (2 semesters) and Dean's List (2 semesters), BRAC University",
    "50% merit scholarship, 10 consecutive semesters (BRAC University)",
    "2nd Runner-Up, MIST Inter-University ICT Innovation Fest 2021",
] as const;

export const projectsData = [
    {
        title: "MCP-Guard: Security Scanner for MCP Servers",
        description:
            "Static scanner for Model Context Protocol servers with five rules mapped to the OWASP Top 10 for LLM Applications 2025: tool poisoning, excessive permissions, rug-pull detection with SHA-256 lockfiles, unsanitised tool output and hard-coded secrets. CLI with CI gating; 56 tests; MIT licence.",
        tags: ["Python", "LLM Security", "MCP", "OWASP"],
        imageUrl: mcpGuardImg,
        projectUrl: "https://github.com/SwadKhan/MCP_Guard",
        repoUrl: "https://github.com/SwadKhan/MCP_Guard",
    },
    {
        title: "ChatBotPRO: Multi-Modal RAG System",
        description:
            "A deployed multi-modal RAG system (LangChain, ChromaDB, Groq LLaMA 3.1) answering strictly from an uploadable knowledge base of PDFs, images (OCR), and PowerPoint files, with citation support. A strict prompt restricts answers to the retrieved context; API keys stay in environment variables.",
        tags: ["Python", "LangChain", "ChromaDB", "Streamlit"],
        imageUrl: chatbotProImg,
        projectUrl: "https://chatbotpro-fnivcyjrojgjema6cqoumv.streamlit.app/",
        repoUrl: "https://github.com/SwadKhan/ChatBotPRO",
    },
    {
        title: "Eco-Agent: LLM Civic Air-Quality Platform",
        description:
            "An anonymous-by-design civic platform (no accounts, no IP logging) that surfaces live air-quality sensor data, lets residents file anonymous pollution reports, and uses an LLM to draft municipal briefings. Built at Hacktoberfest 2026, Skopje, with LangChain and an open-weight model served through Groq.",
        tags: ["Python", "LangChain", "Groq", "LLM", "Privacy"],
        imageUrl: ecoAgentImg,
        projectUrl: "https://github.com/SwadKhan/Eco-Agent",
        repoUrl: "",
    },
    {
        title: "ShipOfflineAuth: Offline Port Credentialing",
        description:
            "An offline-first credentialing system for ships and ports: identities are issued and verified through printed QR codes that need no network connection at the point of check. Built with team Sinking Ship at the IACyC 2026 hackathon, where it won the Best Collaborators award.",
        tags: ["Authentication", "QR", "Offline-first", "Security"],
        imageUrl: shipAuthImg,
        projectUrl: "https://github.com/SwadKhan/ShipOfflineAuth",
        repoUrl: "",
    },
    {
        title: "Dragon News (Engineering Background)",
        description:
            "Full-stack news platform with filtering, sorting, pagination, and admin content control, representative of my software-engineering foundation, which lets my security research ship as reproducible, production-quality code.",
        tags: ["React", "TypeScript", "Tailwind", "MongoDB"],
        imageUrl: dragonNews,
        projectUrl: "https://dragon-news-24c24.web.app/category/01",
        repoUrl: "",
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
    "LLM Agents & MCP",
    "OSINT & Enumeration",
    // Research / ML
    "Python",
    "PyTorch",
    "scikit-learn",
    "Optuna",
    "Differential Privacy",
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
