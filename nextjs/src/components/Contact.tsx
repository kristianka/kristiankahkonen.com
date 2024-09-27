import { Mail } from "lucide-react";

export const Contact = () => {
    const email = process.env.NEXT_PUBLIC_EMAIL as string | "";
    return (
        <div className="flex flex-col items-center">
            <h3 className="mt-8 text-center">
                You can contact me via email at the address below. I&apos;ll be in touch ASAP!{" "}
            </h3>
            <a className="mt-5" href={`mailto: ${email}`}>
                <div className="inline-flex flex-wrap items-center space-x-5 rounded-lg bg-violet-600 p-5 text-white hover:bg-violet-500 dark:bg-violet-700 dark:hover:bg-violet-600">
                    <Mail className="" size={32} />
                    <div>
                        <h3 className="text-xl font-bold sm:text-2xl">Kristian Kähkönen</h3>
                        <p className="sm:text-xl">{email}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};
