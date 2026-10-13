
import Reveal from "../Reveal";

const projects = [
    {
        number: "01",
        title: "Product Management App",
        description:
            "A full-stack application for managing products, viewing product details, and working with product data through an API.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/",
        demo: "",
    },
    {
        number: "02",
        title: "REST API Project",
        description:
            "A backend project focused on REST API development, CRUD operations, database queries, and request handling.",
        technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
        github: "https://github.com/",
        demo: "",
    },
    {
        number: "03",
        title: "React Practice Project",
        description:
            "A frontend project for practicing reusable components, API fetching, routing, and responsive layouts.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/",
        demo: "",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-28 px-5 py-20 transition-colors duration-300 sm:py-24 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <Reveal direction="left">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Selected Work
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                            My Projects
                        </h2>

                        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                            A collection of projects where I practice my
                            development skills and turn ideas into working
                            applications.
                        </p>
                    </div>
                </Reveal>

                {/* Project Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.number}
                            direction="up"
                            delay={index * 120}
                        >
                            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-900">
                                {/* Project Preview Placeholder */}
                                <div className="flex aspect-[16/9] items-center justify-center border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800/70">
                                    <div className="text-center">
                                        <span className="text-4xl font-bold text-blue-600/70 dark:text-blue-400/70">
                                            {project.number}
                                        </span>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            Project Preview
                                        </p>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-4 pt-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                            GitHub ↗
                                        </a>

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                            >
                                                Live Demo ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
