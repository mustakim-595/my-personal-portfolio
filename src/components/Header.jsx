
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Header({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
            <nav className="mx-auto max-w-6xl rounded-2xl border border-gray-200/80 bg-white/90 px-4 shadow-lg shadow-gray-900/5 backdrop-blur-xl transition-colors duration-300 dark:border-gray-800 dark:bg-[#0b1120]/90 dark:shadow-black/10">
                <div className="flex h-[68px] items-center justify-between gap-4">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="shrink-0 text-xl font-bold tracking-tight text-gray-950 dark:text-white"
                    >
                        Mustakim<span className="text-blue-600 dark:text-blue-400">.</span>
                    </a>

                    <div className="hidden items-center gap-7 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-lg transition hover:border-blue-400 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
                        >
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-xl text-gray-800 dark:border-gray-700 dark:text-white md:hidden"
                        >
                            {menuOpen ? "×" : "☰"}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="border-t border-gray-200 py-3 dark:border-gray-800 md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
