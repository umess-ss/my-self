import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 hover:text-[#2563EB]" />
            ) : (
                <Sun className="w-5 h-5 text-gray-300 hover:text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
