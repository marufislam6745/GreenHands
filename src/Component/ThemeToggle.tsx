"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-800 transition-all duration-300 hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:text-yellow-400"
        >
            <Sun className="hidden dark:block" size={20} />
            <Moon className="block dark:hidden" size={20} />
        </button>
    );
};

export default ThemeToggle;