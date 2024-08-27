interface EducationCardProps {
    title: string;
    date: string;
    location: string;
    school: string;
    description: string;
    gpa: string;
}

export default function EducationCard({
    title,
    date,
    school,
    location,
    description,
    gpa
}: EducationCardProps) {
    return (
        <div className="mb-5">
            <h3 className="text-xl font-bold">{title}</h3>
            <h4 className="prose dark:prose-invert">{school}</h4>
            <p className="prose dark:prose-invert">{location}</p>
            <p className="prose dark:prose-invert">{date}</p>
            <p className="prose dark:prose-invert font-bold">{gpa}</p>
            <p className="prose dark:prose-invert">{description}</p>
        </div>
    );
}
