// every site is pre-rendered (SSG)
// when blogs are created/updated etc Directus triggers a webhook to regenerate the site
// with the new data (ISR)
export const dynamic = "force-static";

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
                    <Script
                        src={process.env.ANALYTICS_URL as string}
                        data-website-id={process.env.ANALYTICS_ID as string}
                        strategy="afterInteractive"
                    />
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
