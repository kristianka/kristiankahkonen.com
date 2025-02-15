import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
    SiCloudflare,
    SiCypress,
    SiDirectus,
    SiDocker,
    SiExpress,
    SiFastify,
    SiFirebase,
    SiFramer,
    SiI18Next,
    SiJavascript,
    SiMapbox,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiNextdotjs,
    SiNginx,
    SiOracle,
    SiPlaywright,
    SiPostgresql,
    SiPrisma,
    SiReactquery,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiSupabase,
    SiVercel
} from "react-icons/si";
import type { JSX } from "react";

export const iconMapping: Record<string, JSX.Element> = {
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    CSS3: <FaCss3Alt />,
    "Next.js": <SiNextdotjs />,
    TailwindCSS: <SiTailwindcss />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    "Firebase Auth": <SiFirebase />,
    Prisma: <SiPrisma />,
    Docker: <SiDocker />,
    Fastify: <SiFastify />,
    "SQL Server": <SiMicrosoftsqlserver />,
    "Postgres SQL": <SiPostgresql />,
    "Express.js": <SiExpress />,
    MongoDB: <SiMongodb />,
    "Framer Motion": <SiFramer />,
    Directus: <SiDirectus />,
    "Oracle Cloud": <SiOracle />,
    Cloudflare: <SiCloudflare />,
    NGINX: <SiNginx />,
    "React Query": <SiReactquery />,
    Mapbox: <SiMapbox />,
    Playwright: <SiPlaywright />,
    Cypress: <SiCypress />,
    i18next: <SiI18Next />,
    Redis: <SiRedis />,
    Supabase: <SiSupabase />,
    Vercel: <SiVercel />
};

export const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "React Query",
    "Redux (RTK)",
    "SEO",
    "Next.js",
    "Framer Motion",
    "Firebase Auth",
    "UI/UX Design",
    "Playwright",
    "Cypress",
    "Jest",
    "Vitest",
    "HTML",
    "CSS"
];

export const backendSkills = [
    "TypeScript",
    "Node.js",
    "Express",
    "Fastify",
    "Prisma",
    "PostgreSQL",
    "SQLServer",
    "MySQL",
    "SQLite",
    "MongoDB",
    "REST API",
    "GraphQL",
    "JWT",
    "Firebase Auth",
    "Hoppscotch",
    "Postman"
];

export const devOpsSkills = [
    "Docker",
    "Linux",
    "CI/CD",
    "GitHub",
    "GitLab",
    // "Kubernetes",
    "NGINX",
    "Bash",
    "PowerShell",
    "Python",
    "Security",
    "AWS",
    "Firebase",
    "Google Cloud",
    "Oracle Cloud",
    "Server management",
    "Domain & SSL management"
];

export const otherSkills = [
    "Agile",
    "Scrum",
    "Figma",
    "Leadership",
    "Communication",
    "Building PCs",
    "C++",
    "C#",
    "Rust",
    "Java",
    "Flutter",
    "Dart",
    "Troubleshooting",
    "Team Management",
    "Jetpack Compose",
    "React Native"
];

// return null if no image url is provided
export async function generatePlaceholder(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            console.error(`Failed to fetch image: ${response.statusText}`);
            return "data:image/jpeg;base64,null";
        }
        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        const placeholder = `data:image/jpeg;base64,${base64}`;
        return placeholder;
    } catch (error) {
        console.error(`Error generating placeholder: ${error}`);
        return "data:image/jpeg;base64,null";
    }
}
