"use client";

import { useMemo } from "react";
import { Transition } from "@headlessui/react"; // import Transition from headlessui

interface DateToLocalProps {
    date: string;
    type: "published" | "updated";
}

export const DateToLocal = ({ date, type }: DateToLocalProps) => {
    const formattedDate = useMemo(() => {
        const dateTimeOptions: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour12: false
        };
        return new Date(date).toLocaleString(undefined, dateTimeOptions);
    }, [date]);

    return (
        <div className="">
            <span>{type === "published" ? "Published" : "Updated"}: </span>
            <Transition show={!!formattedDate}>
                <span className="transition duration-300 ease-in data-closed:opacity-0">
                    {formattedDate}
                </span>
            </Transition>
        </div>
    );
};
