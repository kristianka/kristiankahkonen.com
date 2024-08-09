import TextParallaxContent from "@/components/Projects/TextParallaxContext";
import Content from "@/components/Projects/Content";
import { getProjects } from "@/services/BlogRequests";

export default async function Home() {
    const projects = await getProjects();

    return (
        <div className="">
            {projects.length === 0 && (
                <h1 className="mx-auto text-2xl text-center">No projects found 😞</h1>
            )}
            {projects &&
                projects.map((project) => (
                    <TextParallaxContent
                        key={project.id}
                        imgUrlPc={project.image.imgUrlPc}
                        imgUrlMobile={project.image.imgUrlMobile}
                        subheading={project.image.title}
                        heading={project.image.subtitle}
                    >
                        <Content
                            title={project.content.title}
                            description={project.content.description}
                            techStack={project.content.techStack}
                            sourceCodeUrl={project.content.sourceCodeUrl}
                            liveUrl={project.content.liveUrl}
                            liveUrlShort={project.content.liveUrlShort}
                        />
                    </TextParallaxContent>
                ))}
            <p className="-mb-44 text-sm my-32 text-neutral-600 text-center">
                All logos and trademarks displayed on this page are the property of their respective
                owners. The use of these logos is purely for informational purposes, to identify the
                technologies used in these projects. The use of these logos does not imply any
                endorsement or affiliation.
            </p>
        </div>
    );
}
