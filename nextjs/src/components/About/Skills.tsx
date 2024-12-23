"use client";
import { motion } from "motion/react";

import { frontendSkills, backendSkills, devOpsSkills, otherSkills } from "@/misc";
import SkillsCard from "./SkillsCard";
import FadeIn from "../FadeIn";

export const Skills = () => {
    return (
        <FadeIn>
            <h2 className="m-auto mb-5 text-2xl font-bold tracking-wide sm:text-4xl">
                Technologies and Skills
            </h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} />

            {/* Cards collapse on mobile */}
            <SkillsCard title="Frontend" skills={frontendSkills} />
            <SkillsCard title="Backend" skills={backendSkills} />
            <SkillsCard title="DevOps" skills={devOpsSkills} />
            <SkillsCard title="Other" skills={otherSkills} />
        </FadeIn>
    );
};
