/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <motion.section
                className="bg-slate-900 text-white py-35"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="max-w-3xl"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <h1 className="text-5xl font-light tracking-tight mb-6">
                            Akshat Mittal
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Computer Science Engineering student at IIT Mandi with a focus on
                            Machine Learning, Deep Learning, and scalable software development.
                        </p>
                        <button
                            className="inline-flex items-center px-8 py-3 bg-white text-slate-900 font-medium rounded-2xl hover:bg-slate-100 transition-colors duration-300"
                            onClick={() => (window.location.href = "/projects")}
                        >
                            View Projects
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Education */}
                <motion.section
                    className="mb-20"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        className="text-2xl font-light text-slate-900 mb-8 uppercase tracking-wider"
                        variants={fadeInUp}
                    >
                        Education
                    </motion.h2>
                    <motion.div
                        className="border-l-2 border-slate-900 pl-8"
                        variants={fadeInUp}
                    >
                        <h3 className="text-xl font-medium text-slate-900 mb-2">
                            Indian Institute of Technology, Mandi
                        </h3>
                        <div className="text-slate-600 mb-4">
                            <p className="mb-1">
                                Bachelor of Technology in Computer Science and Engineering
                            </p>
                            <p className="text-sm">August 2024 – Present | CGPA: 9.73</p>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Relevant Coursework: Data Structures and Algorithms, Data Science
                            I-III
                        </p>
                    </motion.div>
                </motion.section>

                {/* Technical Skills */}
                <motion.section
                    className="mb-20"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        className="text-2xl font-light text-slate-900 mb-8 uppercase tracking-wider"
                        variants={fadeInUp}
                    >
                        Technical Expertise
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="border border-slate-400 p-6 rounded-3xl hover:border-slate-900 transition-colors duration-300"
                            variants={fadeInUp}
                        >
                            <h3 className="font-medium text-slate-900 mb-4 uppercase tracking-wider text-sm">
                                Languages
                            </h3>
                            <p className="text-slate-600">Python, C, C++</p>
                        </motion.div>
                        <motion.div
                            className="border border-slate-400 p-6 rounded-3xl hover:border-slate-900 transition-colors duration-300"
                            variants={fadeInUp}
                        >
                            <h3 className="font-medium text-slate-900 mb-4 uppercase tracking-wider text-sm">
                                Frameworks
                            </h3>
                            <p className="text-slate-600">Scikit-Learn, TensorFlow, MERN Stack</p>
                        </motion.div>
                        <motion.div
                            className="border border-slate-400 p-6 rounded-3xl hover:border-slate-900 transition-colors duration-300"
                            variants={fadeInUp}
                        >
                            <h3 className="font-medium text-slate-900 mb-4 uppercase tracking-wider text-sm">
                                Tools
                            </h3>
                            <p className="text-slate-600">Linux, Git, GitHub</p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Recognition */}
                <section className="mb-20">
                    <h2 className="text-2xl font-light text-slate-900 mb-8 uppercase tracking-wider">
                        Recognition
                    </h2>
                    <div className="border-l-2 border-blue-900 pl-6 space-y-6">
                        {[
                            {
                                place: "Track Winner",
                                title: "KrackHack'25 ",
                                desc: "Google Developers Group, IIT Mandi",
                            },
                            {
                                place: "2nd Place",
                                title: "Orion Astrathon",
                                desc: "ML Hackathon, Techfest, IIT Mandi",
                            },
                            {
                                place: "2nd Place",
                                title: "Space Code Competition",
                                desc: "ML Hackathon, STAC, IIT Mandi",
                            },
                            {
                                place: "6th Place",
                                title: "Coding Contest",
                                desc: "Kamand Prompt, IIT Mandi",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="pl-4">
                                <h3 className="text-xl font-medium text-slate-900">
                                    <span className="text-sm text-gray-800">{item.place} ,  </span>{item.title}
                                </h3>
                                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Leadership & Service */}
                <section className="mb-20">
                    <h2 className="text-2xl font-light text-slate-900 mb-8 uppercase tracking-wider">
                        Leadership & Service
                    </h2>
                    <div className="border-l-2 border-blue-900 pl-6 space-y-6">
                        {[
                            {
                                role: "Core Member, Heuristics",
                                org: "Programming Club, IIT Mandi",
                            },
                            {
                                role: "Core Member, AI/ML",
                                org: "Google Developers Group, IIT Mandi",
                            },
                            {
                                role: "Academic Sub-Counselor",
                                org: "CSE Batch 2024",
                            },
                            {
                                role: "Volunteer",
                                org: "National Service Scheme, IIT Mandi",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="pl-4">
                                <h3 className="text-xl font-medium text-slate-900">{item.role}</h3>
                                <p className="text-slate-600 text-sm mt-1">{item.org}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
}
