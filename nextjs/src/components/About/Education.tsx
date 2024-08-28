import { getEducations } from "@/services/BlogRequests";
import EducationCard from "./EducationCard";

export default async function Education() {
    const educations = await getEducations();
    return (
        <div>
            <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-10">
                Education and Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                {educations &&
                    educations.map((education) => (
                        <EducationCard
                            key={education.id}
                            title={education.title}
                            school={education.school}
                            date={education.date}
                            location={education.location}
                            description={education.description}
                            gpa={education.gpa}
                        />
                    ))}
            </div>
        </div>
    );
}
