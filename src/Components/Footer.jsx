import React from 'react'

const Footer = () => {
    return (
        <div><footer className="text-center py-6 text-sm border-t border-gray-300 dark:border-gray-700">
            © {new Date().getFullYear()} Akshat Mittal. Built with React + TailwindCSS.
        </footer></div>
    )
}

export default Footer