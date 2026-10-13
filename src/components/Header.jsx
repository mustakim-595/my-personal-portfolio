
import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { VscChromeClose, VscListFlat } from "react-icons/vsc";

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
        <header className="sticky top-0 z-50 pt-2 sm:px-5">
            <nav className="mx-auto max-w-6xl rounded-2xl border-[1.5px] border-gray-500/20 bg-white/20 px-2 md:px-4 shadow-lg shadow-gray-900/5 backdrop-blur-3xl transition-colors duration-300 dark:border-cyan-500/10 dark:bg-cyan-500/5 dark:shadow-black/10">

                <div className="flex h-[68px] items-center justify-between gap-4">

                    <div className="flex justify-center items-center gap-2">
                        <img
                            className="h-10 w-10 rounded-xl border border-cyan-500/20"
                            src="https://t4.ftcdn.net/jpg/04/76/29/29/360_F_476292937_XDoPENQJxzTfpPLlkxdcURv04PBuT6C1.jpg" alt="Logo" />
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="shrink-0 text-2xl font-bold tracking-tight text-gray-950 dark:text-white"
                        >
                            Mustakim<span className="text-blue-600 dark:text-blue-400">.</span>
                        </a>
                    </div>

                    <div className="hidden items-center gap-7 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className=" font-medium text-gray-600 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-500"
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
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-black text-lg transition  
                            dark:text-white  cursor-pointer"
                        >
                            {
                                theme === "dark"
                                    ?
                                    <CiLight />
                                    :
                                    <CiDark />
                            }
                        </button>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="flex h-10 w-10 items-center justify-center text-xl text-gray-800 dark:text-white md:hidden"
                        >
                            {
                                menuOpen
                                    ?
                                    <VscChromeClose />
                                    :
                                    <VscListFlat />
                            }
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
