import EducationCard from "@/components/About/EducationCard";
import { Skills } from "@/components/About/Skills";
import { TitleAnimation } from "@/components/TitleAnimation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Certifications from "@/components/About/Certifications";
import { getCertifications } from "@/services/BlogRequests";

export default async function Home() {
    const certs = await getCertifications();

    return (
        <main className="min-h-screen">
            <div>
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold">About me</h2>
                <div className="my-10 grid grid-cols-1 sm:grid-cols-3">
                    <Image
                        width={1000}
                        height={1000}
                        alt="Picture of Kristian Kähkönen"
                        style={{ width: "75%", height: "auto" }}
                        src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL as string}
                        priority
                        className="sm:order-last col-span-1 mb-10 sm:mb-auto m-auto rounded-full"
                    />
                    <div className="col-span-2 sm:mt-0 prose dark:prose-invert text-black dark:text-white ">
                        I am a passionate Full Stack developer with a strong focus on creating
                        exceptional user experiences (UX) and intuitive user interfaces (UI),
                        supported by robust and secure backends. My attention to detail and
                        collaborative approach enable me to build high-quality applications and work
                        effectively within teams.
                        <br /> <br />
                        My experience spans a range of projects, from personal applications to
                        larger group collaborations, covering both frontend and backend development.
                        Additionally, I have worked on mobile applications and am always eager to
                        learn new technologies and enhance my skills.
                        <br /> <br />I have been actively coding and deepening my expertise in
                        various programming languages and technologies, with a recent focus on web
                        development. I will be graduating early next year with a degree in Software
                        Engineering from Tampere University of Applied Sciences (TAMK) and am
                        excited to continue advancing in the field. For more details on my skills
                        and projects, please see below.
                    </div>
                </div>
            </div>
            <Skills />
            <div className="my-10">
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                    Education & Certificates
                </h2>
                <EducationCard
                    title="Tampere University of Applied Sciences (TAMK)"
                    date="August 2021 - May 2025"
                    location="Tampere, Finland"
                    description="I learned a lot of about web development from University of Helsinki courses, like FullstackOpen. I have done it fully including the project, totaling 24 ECTS. I have also done the DevOps with Docker course. I have also done other courses from other universities, like Japanese language courses from Aalto University."
                    gpa="GPA: 4,14 / 5"
                />
                <EducationCard
                    title="Vocational Qualification in Information and Communication Technology"
                    date="August 2018 - May 2021"
                    location="Hämeenlinna, Finland"
                    description="GPA: 4,83"
                    gpa="GPA: 4,83 / 5"
                />
                {certs && certs.length > 0 && <Certifications certs={certs} />}

                <div className="mt-5">
                    <p>Verify my certifications in </p>
                    <a
                        className="text-blue-500 flex flex-wrap"
                        href="https://www.linkedin.com/in/kristian-kahkonen/details/certifications/"
                    >
                        LinkedIn
                        <ArrowUpRight size={24} />
                    </a>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                    Projects
                </h2>
                <p className="">
                    Want to see these technologies and skills in action? Click the button below!
                </p>
                <div className="mt-5">
                    <Link
                        href="/projects"
                        className="hover:bg-blue-500 border border-black px-4 py-2 sm:px-10 sm:py-2 uppercase rounded-full bg-white dark:bg-black dark:text-white dark:border-white dark:hover:text-blue-500"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </main>
    );
}
