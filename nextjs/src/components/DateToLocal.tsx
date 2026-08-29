interface DateToLocalProps {
    date: string;
    type: "published" | "updated";
    locale?: string;
    timeZone?: string;
}

export const DateToLocal = ({
    date,
    type,
    locale = "en-FI",
    timeZone = "Europe/Helsinki"
}: DateToLocalProps) => {
    const formattedDate = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone
    }).format(new Date(date));

    return (
        <div>
            <span>{type === "published" ? "Published" : "Updated"}: </span>
            <time dateTime={date}>{formattedDate}</time>
        </div>
    );
};
