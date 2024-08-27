import { Skills } from "@/components/About/Skills";
import Certifications from "@/components/About/Certifications";
import { getCertifications } from "@/services/BlogRequests";
import Introduction from "@/components/About/Introduction";
import Education from "@/components/About/Education";
import ProjectsButton from "@/components/About/ProjectsButton";

export default async function Home() {
    const certs = await getCertifications();

    return (
        <main className="min-h-screen space-y-10 sm:space-y-20">
            <Introduction />
            <Skills />
            <div>
                <Education />
                {certs && certs.length > 0 && <Certifications certs={certs} />}
            </div>
            <ProjectsButton />
        </main>
    );
}
