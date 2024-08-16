import { Mail } from "lucide-react";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-center mt-8">
                You can contact me via email at the address below. I'll be in touch ASAP!{" "}
            </h3>
            <p className="text-center italic text-slate-700 dark:text-slate-400 text-sm">
                Please note that due to technical reasons, the reply will come from a different
                address.
            </p>
            <a className="mt-5" href="mailto: kristian@kristiankahkonen.com">
                <div className="text-white bg-violet-600 dark:bg-violet-700 hover:bg-violet-500 dark:hover:bg-violet-600 p-5 rounded-lg inline-flex flex-wrap items-center space-x-5">
                    <Mail className="" size={32} />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold ">Kristian Kähkönen</h3>
                        <p className="sm:text-xl">kristian@kristiankahkonen.com</p>
                    </div>
                </div>
            </a>
        </div>
    );
};
