
import { useState } from "react";
import Reveal from "../Reveal";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `Portfolio contact from ${formData.name}`
        );

        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href =
            `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500";

    return (
        <section
            id="contact"
            className="scroll-mt-28 px-5 py-20 transition-colors duration-300 sm:py-24 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <Reveal direction="left">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            Get in touch
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                            Let's Work Together
                        </h2>

                        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                            Have a project idea, a question, or an opportunity?
                            Feel free to reach out. I'd be happy to connect.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Contact Information */}
                    <div className="space-y-5 lg:col-span-2">
                        <Reveal direction="left">
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Email
                                </p>

                                <a
                                    href="mailto:your-email@example.com"
                                    className="mt-2 block break-all font-semibold text-gray-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                >
                                    your-email@example.com
                                </a>
                            </div>
                        </Reveal>

                        <Reveal direction="left" delay={100}>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    GitHub
                                </p>

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 inline-block font-semibold text-gray-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                >
                                    Visit my GitHub ↗
                                </a>
                            </div>
                        </Reveal>

                        <Reveal direction="left" delay={200}>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    LinkedIn
                                </p>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 inline-block font-semibold text-gray-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                >
                                    Connect on LinkedIn ↗
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <Reveal direction="right">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900/60 sm:p-8"
                            >
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Your Email
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me a little about your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${inputClass} resize-y`}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
                                >
                                    Send Message
                                    <span aria-hidden="true">↗</span>
                                </button>

                                <p className="text-xs leading-6 text-gray-500 dark:text-gray-400">
                                    This form opens your email application with the
                                    message filled in. It does not send messages
                                    directly from this website.
                                </p>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
