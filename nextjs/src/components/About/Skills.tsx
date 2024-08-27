"use client";
import { motion } from "framer-motion";

import { frontendSkills, backendSkills, devOpsSkills, otherSkills } from "@/misc";
import SkillsCard from "./SkillsCard";

export const Skills = () => {
    return (
        <div>
            <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                Technologies and Skills
            </h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} />

            {/* Cards collapse on mobile */}
            <SkillsCard title="Frontend" skills={frontendSkills} />
            <SkillsCard title="Backend" skills={backendSkills} />
            <SkillsCard title="DevOps" skills={devOpsSkills} />
            <SkillsCard title="Other" skills={otherSkills} />
        </div>
    );
};
