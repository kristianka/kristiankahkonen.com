import { AboutMe } from "@/components/AboutMe";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen bg-slate-50 dark:bg-zinc-900">
            <AboutMe />
        </main>
    );
}
