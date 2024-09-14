import { getEducations } from "@/services/AboutRequests";
import EducationCard from "./EducationCard";
import FadeIn from "../FadeIn";

export default async function Education() {
    const educations = await getEducations();
    return (
        <FadeIn>
            <h2 className="m-auto mb-10 text-2xl font-bold tracking-wide sm:text-4xl">
                Education and Certifications
            </h2>
            <div className="mb-20 grid grid-cols-1 gap-10 gap-y-20 md:grid-cols-2 md:gap-20">
                {educations &&
                    educations.map((education) => (
                        <div key={education.id}>
                            <EducationCard
                                key={education.id}
                                title={education.title}
                                school={education.school}
                                date={education.date}
                                location={education.location}
                                description={education.description}
                                gpa={education.gpa}
                            />
                        </div>
                    ))}
            </div>
        </FadeIn>
    );
}
