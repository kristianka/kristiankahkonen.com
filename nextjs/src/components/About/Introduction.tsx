import { getAboutMe } from "@/services/BlogRequests";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default async function Introduction() {
    const aboutMe = await getAboutMe();

    return (
        <div>
            {aboutMe && (
                <div>
                    <h2 className="text-2xl sm:text-4xl tracking-wide font-bold">About me</h2>
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-3">
                        <Image
                            width={1000}
                            height={1000}
                            alt="Picture of Kristian Kähkönen"
                            style={{ width: "75%", height: "auto" }}
                            src={aboutMe.imageUrl}
                            priority
                            className="sm:order-last col-span-1 mb-10 sm:mb-auto m-auto rounded-full"
                        />
                        <div className="col-span-2 sm:mt-0 prose dark:prose-invert text-black dark:text-white ">
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[
                                    [rehypeRaw],
                                    [rehypeExternalLinks, { target: "_blank" }]
                                ]}
                            >
                                {aboutMe.description}
                            </Markdown>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
