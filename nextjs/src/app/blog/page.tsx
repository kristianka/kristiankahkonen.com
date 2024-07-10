import axios from "axios";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface Res {
    data: Blog[];
}

interface Blog {
    id: number;
    attributes: {
        title: string;
        description: string;
        content: string;
    };
}

export const fetchBlogs = async () => {
    const res = await axios.get<Res>(`http://${process.env.STRAPI_IP}/api/blogs`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_KEY}`
        }
    });
    return res.data;
};

export default async function Home() {
    const blogs = await fetchBlogs();
    return (
        <main className="flex">
            <div className="ml-auto mr-auto">
                <ul className="">
                    {blogs &&
                        blogs.data.map((blog: Blog) => (
                            <li className="rounded-lg p-5 m-5" key={blog.id}>
                                <h2>Article {blog.id}</h2>
                                <h2 className="text-2xl sm:text-3xl">{blog.attributes.title}</h2>
                                <h3 className="text-lg sm:text-xl">
                                    {blog.attributes.description}
                                </h3>
                                {/* Don't make the text gray on tailwind typography prose. It's hard to read. */}
                                <Markdown
                                    className="m-auto prose dark:prose-invert text-black dark:text-white"
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                >
                                    {blog.attributes.content}
                                </Markdown>
                            </li>
                        ))}
                </ul>
            </div>
        </main>
    );
}
