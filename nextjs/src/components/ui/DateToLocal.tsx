"use client";

import { useEffect, useState } from "react";

interface DateToLocalProps {
    date: string;
    type: "published" | "updated";
}

export const DateToLocal = ({ date, type }: DateToLocalProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            {type === "published" ? "Published" : "Updated"}{" "}
            {isClient && new Date(date).toLocaleString()}
        </div>
    );
};
