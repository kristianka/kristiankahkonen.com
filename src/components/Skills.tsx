export const Skills = () => {
    const frontendSkills = [
        "React",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "React Query",
        "Redux (RTK)",
        "Next.js",
        "Framer Motion",
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
        "GraphQL",
        "REST API",
        "Hoppscotch",
        "Postman"
    ];
    const devOpsSkills = [
        "Docker",
        "GitHub",
        "Linux",
        "CI/CD pipelines",
        "GitHub",
        "GitLab",
        // "Kubernetes",
        "NGINX",
        "Bash",
        "PowerShell",
        "Python",
        "AWS",
        "Google Cloud",
        "Oracle Cloud"
    ];

    return (
        <div>
            <div className="mt-20">
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto">Skills</h2>
                <div className="bg-indigo-600 text-white rounded-lg p-3 mt-5">
                    <ul className="flex flex-col sm:flex-row p-1">
                        <h3 className="text-2xl sm:text-4xl tracking-wide font-bold p-10 m-auto">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap m-auto p-1">
                            {frontendSkills.map((skill, i) => (
                                <li key={i} className="ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="bg-indigo-600 text-white rounded-lg p-3 mt-5">
                    <ul className="flex flex-col sm:flex-row p-1">
                        <h3 className="text-2xl sm:text-4xl tracking-wide font-bold p-10 m-auto">
                            Backend
                        </h3>
                        <div className="flex flex-wrap m-auto p-1 center">
                            {backendSkills.map((skill, i) => (
                                <li key={i} className="ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="bg-indigo-600 text-white rounded-lg p-3 mt-5">
                    <ul className="flex flex-col sm:flex-row p-1">
                        <h3 className="text-2xl sm:text-4xl tracking-wide font-bold p-10 m-auto">
                            DevOps
                        </h3>
                        <div className="flex flex-wrap m-auto p-1">
                            {devOpsSkills.map((skill, i) => (
                                <li key={i} className="ml-3 mr-3">
                                    {skill}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};
