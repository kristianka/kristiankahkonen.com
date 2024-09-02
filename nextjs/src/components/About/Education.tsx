import { getEducations } from "@/services/AboutRequests";
import EducationCard from "./EducationCard";
import FadeIn from "../FadeIn";

export default async function Education() {
    const educations = await getEducations();
    return (
        <FadeIn>
            <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-10">
                Education and Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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
                            <hr className="block sm:hidden border-gray-200 dark:border-gray-600" />
                        </div>
                    ))}
            </div>
        </FadeIn>
    );
}
