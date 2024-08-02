import { Mail } from "lucide-react";

export const Contact = () => {
    return (
        <div className="mt-10 sm:mt-20 ">
            <a className="" href="mailto: kristian@kristiankahkonen.com">
                <div className="bg-yellow-300 p-5 rounded-lg flex flex-wrap items-center space-x-5">
                    <Mail className="dark:text-black" size={32} />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-black">
                            Kristian Kähkönen
                        </h3>
                        <p className="sm:text-xl dark:text-black">kristian@kristiankahkonen.com</p>
                    </div>
                </div>
            </a>
        </div>
    );
};
