/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div><motion.section
            className="bg-slate-900 text-white py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-light mb-8 uppercase tracking-wider">
                    Connect
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl">
                    Open to discussing opportunities in machine learning, software
                    development, and innovative technology projects.
                </p>
                <div className="flex flex-wrap gap-8">
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=akshatmittal2024@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-slate-300 transition-colors duration-300 uppercase tracking-wider text-sm"
                    >
                        Email
                    </a>
                    <a
                        href="http://www.linkedin.com/in/akshat-mittal-511477313"
                        className="text-white hover:text-slate-300 transition-colors duration-300 uppercase tracking-wider text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/akshatidk29"
                        className="text-white hover:text-slate-300 transition-colors duration-300 uppercase tracking-wider text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.section></div>
    )
}

export default Footer