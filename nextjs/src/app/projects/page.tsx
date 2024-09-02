import { getProjects } from "@/services/ProjectRequests";
import TextParallaxContent from "@/components/Projects/TextParallaxContext";
import Content from "@/components/Projects/Content";
import MoreProjects from "@/components/Projects/MoreProjects";
import Disclaimer from "@/components/Projects/Disclaimer";

export default async function Home() {
    const projects = await getProjects();

    return (
        <div className="">
            {projects.length === 0 && (
                <h1 className="mx-auto text-2xl text-center">No projects found 😞</h1>
            )}

            {projects &&
                projects.map((project) => (
                    <div key={project.id}>
                        <TextParallaxContent
                            imgUrlPc={project.image.imgUrlPc}
                            imgUrlMedium={project.image.imgUrlMedium}
                            imgUrlMobile={project.image.imgUrlMobile}
                            appName={project.image.appName}
                            catchline={project.image.catchline}
                        >
                            <Content
                                title={project.content.title}
                                description={project.content.description}
                                technologies={project.content.technologies}
                                sourceCodeUrl={project.content.sourceCodeUrl}
                                liveUrl={project.content.liveUrl}
                                liveUrlShort={project.content.liveUrlShort}
                            />
                        </TextParallaxContent>
                    </div>
                ))}
            <MoreProjects />
            <Disclaimer />
        </div>
    );
}
