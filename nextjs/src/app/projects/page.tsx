import TextParallaxContent from "@/components/Projects/TextParallaxContext";
import Content from "@/components/Projects/Content";

export default function Home() {
    const pc = process.env.NEXT_PUBLIC_TEMP_IMG_URL_PC as string;
    const mobile = process.env.NEXT_PUBLIC_TEMP_IMG_URL_MOBILE as string;

    return (
        <div className="">
            <TextParallaxContent
                imgUrlPc={pc}
                imgUrlMobile={mobile}
                subheading="MYMEMORIA.APP"
                heading="A digital memory box."
            >
                <Content
                    title="Saving memories with MyMemoria"
                    description="MyMemoria is a fullstack web application that helps you remembering important
                    events. You can create, update, and delete memories. This was my FullstackOpen
                    project that took over 250 hours to make."
                    techStack={["React", "Node.js", "Express", "MongoDB"]}
                    sourceCodeUrl=""
                    liveUrl=""
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrlPc={pc}
                imgUrlMobile={mobile}
                subheading="BoxDB app"
                heading="Logistics sidekick."
            >
                <Content
                    title="Saving memories with MyMemoria"
                    description="MyMemoria is a fullstack web application that helps you remembering important
                    events. You can create, update, and delete memories. This was my FullstackOpen
                    project that took over 250 hours to make."
                    techStack={["React", "Node.js", "Express", "MongoDB"]}
                    sourceCodeUrl=""
                    liveUrl=""
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrlPc={pc}
                imgUrlMobile={mobile}
                subheading="Timetable app"
                heading="Time management."
            >
                <Content
                    title="Saving memories with MyMemoria"
                    description="MyMemoria is a fullstack web application that helps you remembering important
                    events. You can create, update, and delete memories. This was my FullstackOpen
                    project that took over 250 hours to make."
                    techStack={["React", "Node.js", "Express", "MongoDB"]}
                    sourceCodeUrl=""
                    liveUrl=""
                />
            </TextParallaxContent>
        </div>
    );
}
