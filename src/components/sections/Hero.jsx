
function Hero() {
    return (
        <section
            id="home"
            className="scroll-mt-28 overflow-hidden px-5 py-16 transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
                {/* Introduction */}
                <div className="animate-[fadeUp_0.8s_ease-out_both]">
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Aspiring Full-Stack Developer
                    </p>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                        Hi, I'm Mustakim.
                        <span className="mt-2 block text-gray-500 dark:text-gray-400">
                            I build for the web.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                        I'm a developer in progress, learning to build
                        modern, responsive web applications with JavaScript,
                        React, Node.js, Express, and MongoDB.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            View Projects <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
                        >
                            Contact Me
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
                        Learning every day. Building one project at a time.
                    </p>
                </div>

                {/* Temporary Profile Photo */}
                <div className="relative mx-auto w-full max-w-md animate-[fadeUp_1s_ease-out_both] md:ml-auto">
                    <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/10 blur-2xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-100 shadow-xl shadow-gray-900/10 dark:border-gray-700/70 dark:bg-gray-900 dark:shadow-black/20">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
                            alt="Temporary profile photo"
                            className="aspect-[4/5] w-full object-cover object-center"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                            <p className="text-lg font-semibold text-white">
                                Mustakim
                            </p>
                            <p className="mt-1 text-sm text-gray-200">
                                Software Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
