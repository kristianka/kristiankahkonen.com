import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio - Kristian Kähkönen",
    description: "Kristian Kähkönen's portfolio. A software developer from Finland.",
    keywords: ["Kristian Kähkönen", "portfolio", "finland", "finnish", "software developer"]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Suspense fallback={<Loading />}>
                        <Header />
                        {children}
                    </Suspense>
                </ThemeProvider>
            </body>
        </html>
    );
}
