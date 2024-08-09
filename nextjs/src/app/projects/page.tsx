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
                        />
                    </TextParallaxContent>
                ))}
        </div>
    );
}
