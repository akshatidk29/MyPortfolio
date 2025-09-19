/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-20 max-w-4xl mx-auto"
        >
            <h2 className="text-4xl font-extrabold mb-4">Hi, I’m Akshat 👋</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I’m a passionate developer who loves building elegant, scalable solutions.
                Here’s a showcase of what I’ve been working on.
            </p>
            <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700">
                View My Work
            </Link>
        </motion.section>
    );
}