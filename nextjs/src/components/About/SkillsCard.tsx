interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillsCard({ title, skills }: SkillCardProps) {
    return (
        <div className="mt-5 rounded-lg bg-violet-600 p-3 text-white dark:bg-violet-700">
            <div className="grid-row-3 grid gap-3 sm:grid-cols-3">
                <h3 className="col-span-1 p-1 text-2xl font-bold tracking-wide sm:m-auto sm:p-10 sm:text-4xl">
                    {title}
                </h3>
                <div className="col-span-2 flex flex-wrap p-1">
                    <ul className="grid min-w-full grid-cols-2 gap-y-1 sm:mx-auto sm:grid-cols-2 md:grid-cols-4 md:gap-x-10 md:gap-y-2">
                        {skills.map((skill, i) => (
                            <li key={i} className="text-lg">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
