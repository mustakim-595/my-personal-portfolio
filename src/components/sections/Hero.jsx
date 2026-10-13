
function Hero() {
    return (
        <section
            id="home"
            className="scroll-mt-28 overflow-hidden px-5 py-16 transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
                {/* Introduction */}
                <div className="animate-[fadeUp_0.8s_ease-out_both]">
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-600/80">
                        <span className="h-2 w-2 rounded-full bg-cyan-600" />
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
                            className="inline-flex items-center gap-2 rounded-xl bg-[#007bff] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0061ca]"
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
                    <div className="absolute -inset-3 rounded-[5rem] bg-cyan-500/20 blur-2xl" />

                    <div className="relative overflow-hidden rounded-full border-2 border-gray-300 bg-gray-100 shadow-2xl shadow-gray-900/10 dark:border-cyan-500/50 
                    dark:bg-gray-900 dark:shadow-black/20 flex flex-col justify-center items-center">
                        <img
                            src="/profile.jpg"
                            alt="My Profile"
                            className=" w-full object-cover object-center"
                        />

                        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-20 flex flex-col justify-center items-center w-full">
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
