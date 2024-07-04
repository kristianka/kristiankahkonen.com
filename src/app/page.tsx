import { Skills } from "@/components/Skills";
import { TitleAnimation } from "@/components/TitleAnimation";
import React, { Suspense } from "react";

export default function Home() {
    return (
        <main className="m-5">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Loading not working? */}
                {/* <Suspense fallback={<div>Loading...</div>}>
                        <TitleAnimation />
                    </Suspense> */}
                <TitleAnimation />
                <div className="mt-5 sm:mt-0 m-auto sm:text-lg">
                    I am an ICT engineering student at Tampere University of Applied Sciences
                    (TAMK), specializing in Software Engineering and graduating May 2025. I have a
                    strong passion for Full Stack development, focusing on creating exceptional user
                    experiences (UX) and user interfaces (UI) with robust and safe backends.
                    <br /> <br />
                    My attention to detail and collaborative nature enable me to build high quality
                    applications and work effectively within a team. I am always eager to learn new
                    technologies and improve my skills. I am currently looking for a job as a
                    software developer.
                </div>
            </div>
            <Skills />
        </main>
    );
}
