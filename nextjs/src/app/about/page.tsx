import { Skills } from "@/components/About/Skills";
import Certifications from "@/components/About/Certifications";
import Introduction from "@/components/About/Introduction";
import Education from "@/components/About/Education";
import ProjectsButton from "@/components/About/ProjectsButton";
import { generatePlaceholder } from "@/misc";
import { getCertifications } from "@/services/AboutRequests";

export default async function Home() {
    const certs = await getCertifications();
    const placeholders: string[] = [];
    for (const cert of certs) {
        const placeholder = await generatePlaceholder(cert.url);
        placeholders.push(placeholder);
    }

    return (
        <main className="space-y-10 sm:space-y-20">
            <Introduction />
            <Skills />
            <div>
                <Education />
                {certs && certs.length > 0 && (
                    <Certifications certs={certs} placeholders={placeholders} />
                )}
            </div>
            <ProjectsButton />
        </main>
    );
}
