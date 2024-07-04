export const Skills = () => {
    const frontendSkills = [
        "React",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "React Query",
        "Redux (RTK)",
        "Firebase Auth",
        "Next.js",
        "SEO",
        "Framer Motion",
        "UI/UX Design",
        "Playwright",
        "Cypress",
        "Jest",
        "Vitest",
        "HTML",
        "CSS"
    ];
    const backendSkills = [
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
    const devOpsSkills = [
        "Docker",
        "GitHub",
        "Linux",
        "CI/CD Pipelines",
        "GitHub",
        "GitLab",
        // "Kubernetes",
        "NGINX",
        "Bash",
        "PowerShell",
        "Python",
        "Security",
        "Server Management",
        "Domain Management",
        "SSL Certificates",
        "AWS",
        "Google Cloud",
        "Firebase",
        "Oracle Cloud"
    ];
    const otherSkills = [
        "Agile",
        "Scrum",
        "C++",
        "C#",
        "Rust",
        "Java",
        "Jetpack Compose",
        "React Native",
        "Flutter",
        "Dart",
        "Figma",
        "Team Management",
        "Leadership",
        "Communication",
        "Building PCs",
        "Networking",
        "Troubleshooting"
    ];

    return (
        <div>
            <div className="mt-10 sm:mt-20">
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">Skills</h2>
                {/* Frontend, collapses to card on mobile */}
                <div className="bg-violet-600 dark:bg-violet-700 text-white rounded-lg p-3 mt-5">
                    <div className="grid grid-row-3 sm:grid-cols-3 p-1">
                        <h3 className="col-span-1 text-2xl sm:text-4xl tracking-wide font-bold p-4 sm:p-10 m-auto">
                            Frontend
                        </h3>
                        <ul className="col-span-2 flex flex-wrap m-auto p-1">
                            {frontendSkills.map((skill, i) => (
                                <li key={i} className="text-lg ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Backend, collapses to card on mobile */}
                <div className="bg-violet-600 dark:bg-violet-700 text-white rounded-lg p-3 mt-5">
                    <div className="grid grid-row-3 sm:grid-cols-3 p-1">
                        <h3 className="col-span-1 text-2xl sm:text-4xl tracking-wide font-bold p-4 sm:p-10 m-auto">
                            Backend
                        </h3>
                        <ul className="col-span-2 flex flex-wrap m-auto p-1 center">
                            {backendSkills.map((skill, i) => (
                                <li key={i} className="text-lg ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* DevOps, collapses to card on mobile */}
                <div className="bg-violet-600 dark:bg-violet-700 text-white rounded-lg p-3 mt-5">
                    <div className="grid grid-row-3 sm:grid-cols-3 p-1">
                        <h3 className="col-span-1 text-2xl sm:text-4xl tracking-wide font-bold p-4 sm:p-10 m-auto">
                            DevOps
                        </h3>
                        <ul className="col-span-2 flex flex-wrap m-auto p-1">
                            {devOpsSkills.map((skill, i) => (
                                <li key={i} className="text-lg ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Other, collapses to card on mobile */}
                <div className="bg-violet-600 dark:bg-violet-700 text-white rounded-lg p-3 mt-5">
                    <div className="grid grid-row-3 sm:grid-cols-3 p-1">
                        <h3 className="col-span-1 text-2xl sm:text-4xl tracking-wide font-bold p-4 sm:p-10 m-auto">
                            Other
                        </h3>
                        <ul className="col-span-2 flex flex-wrap m-auto p-1">
                            {otherSkills.map((skill, i) => (
                                <li key={i} className="text-lg ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
