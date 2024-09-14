interface ShareProps {
    title: string;
    text: string;
    url: string;
}

export const share = async ({ title, text, url }: ShareProps) => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: title + " - Kristian Kähkönen",
                text: text,
                url: url
            });
            return;
        }
        // fallback to clipboard
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(url);
            return;
        }
    } catch (error) {
        console.error("Error sharing", error);
    }
};
