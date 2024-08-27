import Image from "next/image";

export default function Introduction() {
    return (
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
                    exceptional user experiences (UX) and intuitive user interfaces (UI), supported
                    by robust and secure backends. My attention to detail and collaborative approach
                    enable me to build high-quality applications and work effectively within teams.
                    <br /> <br />
                    My experience spans a range of projects, from personal applications to larger
                    group collaborations, covering both frontend and backend development.
                    Additionally, I have worked on mobile applications and am always eager to learn
                    new technologies and enhance my skills.
                    <br /> <br />I have been actively coding and deepening my expertise in various
                    programming languages and technologies, with a recent focus on web development.
                    I will be graduating early next year with a degree in Software Engineering from
                    Tampere University of Applied Sciences (TAMK) and am excited to continue
                    advancing in the field. For more details on my skills and projects, please see
                    below.
                </div>
            </div>
        </div>
    );
}
