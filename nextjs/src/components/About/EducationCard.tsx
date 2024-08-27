interface EducationCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
    gpa: string;
}

export default function EducationCard({
    title,
    date,
    location,
    description,
    gpa
}: EducationCardProps) {
    return (
        <div className="my-5 py-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">{date}</p>
            <p className="text-gray-600 text-sm">{location}</p>
            <p className="">{gpa}</p>
            {/* <p className="text-gray-600 text-sm">{description}</p> */}
        </div>
    );
}
