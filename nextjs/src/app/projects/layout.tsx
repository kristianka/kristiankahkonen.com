import { Suspense } from "react";
import Loading from "./Loading";

export default function ProjectsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <Suspense fallback={<Loading />}>
                <div className="max-w-full min-w-full">{children}</div>
            </Suspense>
        </div>
    );
}
