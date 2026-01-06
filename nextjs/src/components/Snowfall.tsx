"use client";

import { usePathname } from "next/navigation";
import { Snowflake } from "lucide-react";

const SNOWFLAKE_COUNT = 12;

function isWinterSeason(d = new Date()) {
    const month = d.getMonth();
    // December or January
    return month === 11 || month === 0;
}

export function Snowfall() {
    const pathname = usePathname();
    const isWinter = isWinterSeason(new Date());
    const isHome = pathname === "/";
    const active = isWinter && isHome; // render only on home page during winter

    return (
        <div className={`snowflakes ${active && "snowflakes--on"}`} aria-hidden="true">
            {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => (
                <div key={i} className="snowflake">
                    <div className="inner">
                        <Snowflake className="text-gray-300 dark:text-white" />
                    </div>
                </div>
            ))}
        </div>
    );
}
