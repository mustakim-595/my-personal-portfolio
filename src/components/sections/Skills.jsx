
import Reveal from "../Reveal";

const skillGroups = [
    {
        number: "01",
        title: "Frontend",
        description: "Building responsive and interactive user interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
        number: "02",
        title: "Backend",
        description: "Building APIs and handling application logic.",
        skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
    },
    {
        number: "03",
        title: "Database & Tools",
        description: "Working with data and everyday development tools.",
        skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman"],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-28 px-5 py-20 transition-colors duration-300 sm:py-24 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <Reveal direction="left">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            My Technical Toolkit
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                            Skills & Technologies
                        </h2>

                        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                            Technologies I'm learning and using to build
                            practical full-stack web applications.
                        </p>
                    </div>
                </Reveal>

                {/* Skill Groups */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, index) => (
                        <Reveal
                            key={group.number}
                            direction="up"
                            delay={index * 120}
                        >
                            <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-600 dark:text-blue-400">
                                    {group.number}
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {group.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                    {group.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
