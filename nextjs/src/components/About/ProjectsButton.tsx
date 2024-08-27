import Link from "next/link";

export default function ProjectsButton() {
    return (
        <div>
            <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">Projects</h2>
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
    );
}
