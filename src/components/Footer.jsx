
import Reveal from "./Reveal";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 bg-gray-50 px-5 py-10 transition-colors duration-300 dark:border-gray-800 dark:bg-[#0b1120] lg:px-8">
            <div className="mx-auto max-w-6xl">
                <Reveal direction="up">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        {/* Logo and Description */}
                        <div>
                            <a
                                href="#home"
                                className="text-xl font-bold tracking-tight text-gray-950 dark:text-white"
                            >
                                Mustakim
                                <span className="text-blue-600 dark:text-blue-400">
                                    .
                                </span>
                            </a>

                            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
                                Learning, building, and growing as a software
                                developer—one project at a time.
                            </p>
                        </div>

                        {/* Footer Navigation */}
                        <nav
                            aria-label="Footer navigation"
                            className="flex flex-wrap gap-x-5 gap-y-3"
                        >
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © {currentYear} Mustakim. All rights reserved.
                        </p>

                        <a
                            href="#home"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                            Back to top <span aria-hidden="true">↑</span>
                        </a>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}

export default Footer;
