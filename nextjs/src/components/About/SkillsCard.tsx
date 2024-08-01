interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillsCard({ title, skills }: SkillCardProps) {
    return (
        <div className="bg-violet-600 dark:bg-violet-700 text-white rounded-lg p-3 mt-5">
            <div className="grid grid-row-3 sm:grid-cols-3 gap-3">
                <h3 className="col-span-1 text-2xl sm:text-4xl tracking-wide font-bold p-1 sm:p-10 sm:m-auto">
                    {title}
                </h3>
                <div className="col-span-2 flex flex-wrap p-1">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 sm:mx-auto md:gap-x-10 md:grid-cols-4">
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
