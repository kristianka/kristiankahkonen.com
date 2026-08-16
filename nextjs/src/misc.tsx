import { FaReact, FaNodeJs, FaCss3Alt, FaCubes } from "react-icons/fa";
import {
    SiBun,
    SiCloudflare,
    SiCypress,
    SiDirectus,
    SiDocker,
    SiExpress,
    SiFastify,
    SiFirebase,
    SiFramer,
    SiGooglecloud,
    SiI18Next,
    SiJavascript,
    SiKubernetes,
    SiMapbox,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiNextdotjs,
    SiNginx,
    SiOracle,
    SiPlaywright,
    SiPostgresql,
    SiPrisma,
    SiRabbitmq,
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
    Vercel: <SiVercel />,
    Kubernetes: <SiKubernetes />,
    Bun: <SiBun />,
    RabbitMQ: <SiRabbitmq />,
    "Google Cloud": <SiGooglecloud />,
    Microservices: <FaCubes />
};

export const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    // "JavaScript",
    "TailwindCSS",
    "State",
    // "React Query",
    // "Redux (RTK)",
    "Firebase Auth",
    "Framer Motion",
    "Playwright",
    // "Cypress",
    // "Jest",
    "Vitest",
    "SEO",
    "Accessibility",
    "UI/UX Design"
    // "HTML",
    // "CSS"
];

export const backendSkills = [
    "Node.js / Bun",
    "TypeScript",
    "Express",
    "Fastify",
    "REST API",
    "Integrations",
    "GraphQL",
    "Prisma",
    "PostgreSQL",
    "SQLServer",
    // "MySQL",
    // "SQLite",
    "MongoDB",
    // "JWT",
    "Firebase"
    // "Hoppscotch",
    // "Postman"
];

export const devOpsSkills = [
    "Docker",
    "CI/CD",
    "Linux",
    "Git",
    // "GitLab",
    "Kubernetes",
    "NGINX",
    "Bash",
    // "PowerShell",
    "Python",
    "AWS",
    "Firebase",
    "Google Cloud",
    "Oracle Cloud",
    "Security",
    "Servers"
    // "Domain & SSL management"
];

export const otherSkills = [
    "React Native",
    "Kotlin",
    "Jetpack Compose",
    "Rust",
    "Figma",
    "Agile",
    "Scrum",
    "Leadership",
    "Communication"
    // "Building PCs",
    // "C++",
    // "C#",
    // "Java",
    // "Flutter",
    // "Dart",
    // "Troubleshooting",
];

// return null if no image url is provided
export async function generatePlaceholder(imageUrl?: string) {
    try {
        if (!imageUrl) {
            return "data:image/jpeg;base64,null";
        }

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
