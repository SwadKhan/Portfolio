import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName) {

    // Track the section that crosses the viewport's vertical midline instead
    // of requiring a fixed fraction of it to be visible: sections taller than
    // the viewport (Projects, Security) can never satisfy a 0.5+ threshold,
    // which made the navbar highlight skip them while scrolling.
    const { ref, inView } = useInView({
        rootMargin: "-50% 0px -50% 0px",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    }
}