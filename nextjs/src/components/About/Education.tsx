import EducationCard from "./EducationCard";

export default function Education() {
    return (
        <div>
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
        </div>
    );
}
