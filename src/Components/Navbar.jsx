import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div><header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold tracking-tight">Akshat Mittal</h1>
            <nav className="flex gap-6 text-lg">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/projects" className="hover:underline">Projects</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
        </header></div>
    )
}

export default Navbar