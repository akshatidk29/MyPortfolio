/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Briefcase, Github, Linkedin, Code } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
    ];

    const socialLinks = [
        { icon: Code, href: "https://codeforces.com/profile/akshat_idk_29" },
        { icon: Linkedin, href: "https://linkedin.com/in/akshat-mittal-511477313" },
        { icon: Github, href: "https://github.com/akshatidk29" },
    ];

    const handleNavClick = (href) => {
        window.location.href = href;
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50"
                    : "bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => handleNavClick("/")}
                                className={`text-xl font-light tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"
                                    }`}
                            >
                                Akshat Mittal
                            </button>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex items-baseline space-x-6">
                                {navItems.map((item, index) => {
                                    return (
                                        <motion.button
                                            key={item.name}
                                            onClick={() => handleNavClick(item.href)}
                                            className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 ${scrolled
                                                ? "text-slate-600 hover:text-slate-900"
                                                : "text-slate-300 hover:text-white"
                                                }`}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>{item.name}</span>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Social Buttons */}
                            <div className="flex items-center space-x-10 ml-6">
                                {socialLinks.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-none transition-colors duration-300 ${scrolled
                                    ? "text-slate-600 hover:text-slate-900"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden ${isOpen ? "block" : "hidden"}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-6 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
                        {navItems.map((item, index) => {
                            return (
                                <motion.button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="flex items-center w-full px-3 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 tracking-wider uppercase"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {item.name}
                                </motion.button>
                            );
                        })}

                        {/* Social Links for Mobile */}
                        <div className="flex items-center space-x-4 mt-4">
                            {socialLinks.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
