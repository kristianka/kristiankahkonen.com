import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export default function Links() {
    return (
        <div>
            <div>
                <a
                    href="https://github.com/kristianka/kristiankahkonen.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <BsGithub className="h-6 w-6" />
                    <span className="text-sm">Source code</span>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/kristian-kahkonen"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <BsLinkedin className="h-6 w-6" />
                    <span className="text-sm">LinkedIn</span>
                </a>
            </div>
            <div>
                <a
                    href="mailto:kristian@kristiankahkonen.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <CiMail className="h-6 w-6" />
                    <span className="text-sm">Contact</span>
                </a>
            </div>
        </div>
    );
}
