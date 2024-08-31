import { Suspense } from "react";
import Loading from "./loading";

export default function ContactLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-96">
            <Suspense fallback={<Loading />}>
                <div className="max-w-6xl mx-auto">{children}</div>
            </Suspense>
        </div>
    );
}
