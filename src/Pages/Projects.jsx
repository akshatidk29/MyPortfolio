/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag, Award, ChevronRight } from "lucide-react";
import projectsData from "../Data/Projects.json";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Full-Stack Development", "AI/ML", "FinTech", "Robotics", "EdTech"];

    const filteredProjects = selectedCategory === "All"
        ? projectsData.projects
        : projectsData.projects.filter(project => project.category === selectedCategory);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
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
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h1 className="text-4xl font-light tracking-tight mb-4">
                            Projects
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl">
                            A collection of innovative solutions spanning AI/ML, full-stack development,
                            robotics, and fintech applications.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Category Filter */}
                <motion.div
                    className="mb-12"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${selectedCategory === category
                                    ? "bg-slate-900 text-white rounded-2xl"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-2xl"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-900 transition-all duration-500 cursor-pointer"
                            variants={fadeInUp}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                        <div className="text-slate-400 text-6xl font-light">
                                            {project.title.charAt(0)}
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center text-xs text-slate-400">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {project.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-slate-900 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-slate-900 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-3xl font-light text-slate-900 mb-2">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-slate-600">{selectedProject.subtitle}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-slate-400 hover:text-slate-900 text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {selectedProject.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Tag className="w-4 h-4 mr-1" />
                                        {selectedProject.category}
                                    </div>
                                </div>
                            </div>

                            {/* Project Image Placeholder */}
                            <div className="h-64 bg-white mb-8 flex items-center justify-center">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="h-full w-auto max-w-full object-contain transition-transform duration-500 rounded-lg hover:scale-105 border border-gray-400 shadow-sm"
                                />
                            </div>


                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-slate-900 mb-3 uppercase tracking-wider">
                                    About
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-slate-900 mb-4 uppercase tracking-wider">
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedProject.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-slate-900 rounded-full flex-shrink-0"></div>
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-slate-900 mb-4 uppercase tracking-wider">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm border border-slate-200 rounded-xl hover:border-slate-900 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-slate-900 mb-4 uppercase tracking-wider">
                                        Achievements
                                    </h3>
                                    <div className="space-y-2">
                                        {selectedProject.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <span className="text-slate-700">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Links */}
                            <div className="flex space-x-4">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-6 py-3 bg-slate-900 text-white hover:bg-slate-700 transition-colors rounded-2xl"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </a>
                                )}
                                {selectedProject.live && (
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-6 py-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-2xl transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}