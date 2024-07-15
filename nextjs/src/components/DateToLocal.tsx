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

    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    };

    return (
        <div>
            {type === "published" ? "Published" : "Updated"}{" "}
            {isClient && new Date(date).toLocaleString(undefined, dateTimeOptions)}
        </div>
    );
};
