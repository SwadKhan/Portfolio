"use client"

import React, { useState, createContext, useContext } from 'react';

import { SectionName } from "@/lib/types"
// type SectionName = (typeof links)[number]["name"];



type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    timeOfLastClick: number;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);



export default function ActiveSectionContextProvider({ children, }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (<ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        setTimeOfLastClick,
        timeOfLastClick
    }}>
        {children}
    </ActiveSectionContext.Provider>);
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error
            (
                "useActiveSection must be within an ActiveSectioncontextProvider"
            )
    }
    return context;
}
