import Image from "next/image";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { getAboutMe } from "@/services/AboutRequests";
import { generatePlaceholder } from "@/misc";
import FadeIn from "../FadeIn";

export default async function Introduction() {
    const aboutMe = await getAboutMe();
    const placeholder = await generatePlaceholder(aboutMe?.imageUrl as string);

    return (
        <div>
            {aboutMe ? (
                <FadeIn>
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide sm:text-4xl">About me</h2>
                        <div className="my-10 grid grid-cols-1 sm:grid-cols-3">
                            <Image
                                width={1000}
                                height={1000}
                                alt="Picture of Kristian Kähkönen"
                                style={{ width: "75%", height: "auto" }}
                                src={aboutMe.imageUrl}
                                blurDataURL={placeholder}
                                placeholder="blur"
                                priority
                                className="col-span-1 m-auto mb-10 rounded-full sm:order-last sm:mb-auto"
                            />
                            <div className="prose dark:prose-invert col-span-2 text-black sm:mt-0 dark:text-white">
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
                </FadeIn>
            ) : (
                <div className="">
                    <p className="text-2xl">Introduction not found</p>
                </div>
            )}
        </div>
    );
}
