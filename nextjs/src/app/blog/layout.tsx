import { Suspense } from "react";
import Loading from "./loading";

export default function BlogLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-96">
            <Suspense fallback={<Loading />}>
                <div className="mx-auto max-w-6xl">{children}</div>
            </Suspense>
        </div>
    );
}
