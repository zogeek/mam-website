"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-gray-800 text-white p-4 z-50 relative">
            <nav className="flex items-center justify-between">
                <div className="text-lg font-bold">Les Cro Mignons</div>
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
                <ul
                    className={`fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 transform ${
                        isOpen ? "translate-y-0" : "-translate-y-full"
                    } md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:translate-y-0`}
                >
                    <li>
                        <Link
                            href="/"
                            className="hover:underline text-lg font-normal"
                            onClick={closeMenu}
                        >
                            Acceuil
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/info"
                            className="hover:underline text-lg font-normal"
                            onClick={closeMenu}
                        >
                            La MAM
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/equipe"
                            className="hover:underline text-lg font-normal"
                            onClick={closeMenu}
                        >
                            L&apos;equipe
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
