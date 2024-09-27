import { generatePlaceholder } from "@/misc";
import { getCertifications } from "@/services/AboutRequests";

import Certifications from "@/components/About/Certifications";
import Education from "@/components/About/Education";
import Introduction from "@/components/About/Introduction";
import ProjectsButton from "@/components/About/ProjectsButton";
import { Skills } from "@/components/About/Skills";

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
