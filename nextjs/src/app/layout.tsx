// every site is pre-rendered (SSG)
// when blogs are created/updated etc Directus triggers a webhook to regenerate the site
// with the new data (ISR)
export const dynamic = "force-static";

import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import Loading from "./loading";
import { Footer } from "@/components/Footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
        title: "Kristian Kähkönen",
        description: "Kristian Kähkönen's blog & portfolio. Blogs about software development.",
        keywords: [
            "Kristian Kähkönen",
            "blog",
            "portfolio",
            "finland",
            "finnish",
            "software developer"
        ],
        openGraph: {
            url: "https://kristiankahkonen.com",
            images: "/opengraph-image.jpg"
        }
    };
}

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
