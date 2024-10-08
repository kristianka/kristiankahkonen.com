import { Suspense } from "react";
import Loading from "./loading";

export default function ProjectsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <Suspense fallback={<Loading />}>
                <div>{children}</div>
            </Suspense>
        </div>
    );
}
