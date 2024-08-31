"use client";
import { Blog } from "@/types";
import { useEffect, useState } from "react";

interface LikeBlogProps {
    blog: Blog;
}

export default function LikeBlog({ blog }: LikeBlogProps) {
    const [liked, setLiked] = useState(false);

    // check if blog has already been liked
    useEffect(() => {
        const liked = localStorage.getItem(`blogs/${blog.id}`);
        console.log(liked);
        if (liked) {
            setLiked(true);
            console.log("Blog already liked");
            return;
        }
    }, [blog]);

    const likeBlog = () => {
        if (liked) {
            console.log("Button press, Blog already liked");
            return;
        }
        localStorage.setItem(`blogs/${blog.id}`, "true");
        setLiked(true);
    };

    return (
        <div>
            <button className="mt-10" onClick={likeBlog}>
                {liked ? "Liked!" : "Like"}❤️
            </button>
        </div>
    );
}
