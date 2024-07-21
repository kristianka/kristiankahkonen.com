// Revalidate every hour so blogs in footer are updated
// This disables SSR for most pages which is not ideal, but there are no
// better ways to do this at the moment with app router
export const revalidate = 3600;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import Loading from "./loading";
import { Footer } from "@/components/Footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kristian Kähkönen",
    description: "Kristian Kähkönen's blog & portfolio. A software developer from Finland.",
    keywords: ["Kristian Kähkönen", "blog", "portfolio", "finland", "finnish", "software developer"]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Basic anonymous site view analytics, no cookies or tracking */}
                    <Script src={process.env.ANALYTICS_URL as string} strategy="afterInteractive" />
                    <Suspense fallback={<Loading />}>
                        <div className="px-5 max-w-6xl mx-auto">
                            <NavBar />
                            {children}
                            <Footer />
                        </div>
                    </Suspense>
                </ThemeProvider>
            </body>
        </html>
    );
}
