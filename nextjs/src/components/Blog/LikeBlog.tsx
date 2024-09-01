"use client";
import { Blog } from "@/types";
import { useEffect, useState } from "react";

interface LikeBlogProps {
    blog: Blog;
    updateLikes: () => void;
}

export default function LikeBlog({ blog, updateLikes }: LikeBlogProps) {
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

    const setLikeBlog = async () => {
        if (liked) {
            console.log("Button press, Blog already liked");
            return;
        }
        localStorage.setItem(`blogs/${blog.id}`, "true");
        await updateLikes();
        setLiked(true);
    };

    return (
        <div>
            <button className="mt-10" onClick={setLikeBlog}>
                {liked ? "Liked!" : "Like"}❤️
            </button>
        </div>
    );
}
