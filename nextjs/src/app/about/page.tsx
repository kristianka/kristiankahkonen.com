import { Skills } from "@/components/Skills";
import { TitleAnimation } from "@/components/TitleAnimation";

export default function Home() {
    return (
        <main className="min-h-screen">
            <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">About me</h2>

            <div className="mt-5 sm:mt-0 m-auto">
                I am a Software Engineering student at Tampere University of Applied Sciences (TAMK)
                graduating May 2025. I have a strong passion for Full Stack development, focusing on
                creating exceptional user experiences (UX) and user interfaces (UI) with robust and
                safe backends.
                <br /> <br />
                My attention to detail and collaborative nature enable me to build high quality
                applications and work effectively within a team. I am always eager to learn new
                technologies and improve my skills. I am currently looking for a job as a software
                developer.
                <br /> <br />I am mostly self-taught (you learn a lot from actually coding!) and
                have been programming since 2017. I have experience in various programming languages
                and technologies. The last couple years I have focused on web development. See the
                skills section below for more and the projects section for my work.
            </div>
            <Skills />
        </main>
    );
}
