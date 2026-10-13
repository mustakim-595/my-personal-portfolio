
import Reveal from "../Reveal";

const cards = [
    {
        number: "01",
        title: "What I'm Learning",
        description:
            "JavaScript, React, Node.js, Express, MongoDB, and the fundamentals of full-stack development.",
    },
    {
        number: "02",
        title: "My Approach",
        description:
            "I learn by writing code, solving problems, debugging errors, and building practical projects.",
    },
    {
        number: "03",
        title: "My Goal",
        description:
            "To become a capable software engineer who builds useful, reliable, and maintainable applications.",
    },
];

function About() {
    return (
        <section
            id="about"
            className="scroll-mt-28 px-5 py-20 transition-colors duration-300 sm:py-24 lg:px-8 "
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <Reveal direction="left">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Get to know me
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                            About Me
                        </h2>

                        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                            I'm focused on becoming a strong software engineer
                            by building real projects, strengthening my
                            fundamentals, and learning how things work behind
                            the scenes.
                        </p>
                    </div>
                </Reveal>

                {/* About Cards */}
                <div className="grid gap-5 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <Reveal
                            key={card.number}
                            direction="up"
                            delay={index * 120}
                        >
                            <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-600 dark:text-blue-400">
                                    {card.number}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                    {card.description}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
