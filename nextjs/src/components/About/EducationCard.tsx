import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";

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
        <div className="">
            <h3 className="text-xl font-bold">{title}</h3>
            <h4 className="prose dark:prose-invert">{school}</h4>
            <p className="prose dark:prose-invert">{location}</p>
            <p className="prose dark:prose-invert">{date}</p>
            <p className="prose font-bold dark:prose-invert">{gpa}</p>
            <Markdown
                className="prose mt-8 text-black dark:prose-invert dark:text-white"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeRaw], [rehypeExternalLinks, { target: "_blank" }]]}
            >
                {description}
            </Markdown>
        </div>
    );
}
