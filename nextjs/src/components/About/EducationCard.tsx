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
            <p className="prose dark:prose-invert font-bold">{gpa}</p>
            <div className="prose dark:prose-invert mt-8 text-black dark:text-white">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[[rehypeRaw], [rehypeExternalLinks, { target: "_blank" }]]}
                >
                    {description}
                </Markdown>
            </div>
        </div>
    );
}
