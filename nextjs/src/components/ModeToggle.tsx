"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure we're only switching themes client-side
    useEffect(() => {
        // Safe: one-time mount flag to avoid SSR hydration mismatch
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // show icons to avoid layout shift
    if (!mounted) {
        return (
            <button
                className="cursor-pointer hover:text-gray-400"
                disabled
                aria-label="Loading theme toggle"
            >
                <Sun className="h-6 w-6 dark:hidden" />
                <Moon className="hidden h-6 w-6 dark:block" />
            </button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                suppressHydrationWarning
                className="cursor-pointer hover:text-gray-400"
            >
                {theme === "light" ? (
                    <Sun className="h-6 w-6 transition-all" />
                ) : (
                    <Moon className="h-6 w-6 transition-all" />
                )}
                <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent suppressHydrationWarning align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
