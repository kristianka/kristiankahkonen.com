import { Skills } from "@/components/About/Skills";
import { TitleAnimation } from "@/components/TitleAnimation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                        I am a Software Engineering student at Tampere University of Applied
                        Sciences (TAMK) graduating May 2025. I have a strong passion for Full Stack
                        development, focusing on creating exceptional user experiences (UX) and user
                        interfaces (UI) with robust and safe backends.
                        <br /> <br />
                        My attention to detail and collaborative nature enable me to build high
                        quality applications and work effectively within a team. I have worked on
                        various projects, ranging from small personal projects to larger group
                        projects. I have experience in both frontend and backend development. I have
                        also worked on mobile applications. I am always eager to learn new
                        technologies and improve my skills.
                        <br /> <br />I am mostly self-taught (you learn a lot from actually coding!)
                        and have been programming since 2017. I have experience in various
                        programming languages and technologies. The last couple years I have focused
                        on web development. See the skills section below for more and the projects
                        section for my work.
                    </div>
                </div>
            </div>
            {/* <div className="mt-10">
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                    Education
                </h2>
                <div className="mt-5 sm:mt-0 m-auto">
                    <h3 className="text-xl sm:text-2xl tracking-wide font-bold m-auto mb-5">
                        Tampere University of Applied Sciences (TAMK)
                    </h3>
                    <h4 className="text-lg sm:text-xl tracking-wide font-bold m-auto mb-5">
                        Bachelor of Engineering, Software Engineering
                    </h4>
                    <h4 className="text-lg sm:text-xl tracking-wide font-bold m-auto mb-5">
                        August 2021 - May 2025
                    </h4>
                    <p>
                        I learned a lot of about web development from University of Helsinki
                        courses, like FullstackOpen. I have done it fully including the project,
                        totaling 24 ECTS. I have also done the DevOps with Docker course. I have
                        also done other courses from other universities, like Japanese language
                        courses from Aalto University.
                    </p>
                    <p>GPA: 4,14</p>
                </div>
            </div> */}
            <Skills />

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
