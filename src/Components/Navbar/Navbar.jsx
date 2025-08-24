import React, { use, useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const navItemPromise = fetch("/navItems.json").then((res) => res.json());

const Navbar = () => {
    const navItems = use(navItemPromise);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const user = {
        name: "",
        photoURL: "https://i.pravatar.cc/150?img=3",
    };

    return (
        <nav className="w-full bg-base-100 shadow-md px-6 py-4 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left Side - Logo */}
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Middle Side - NavLinks (Desktop) */}
                <div className="hidden lg:flex flex-1 justify-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.url}
                            key={item.id}
                            className={({ isActive }) =>
                                `font-medium ${isActive ? "text-primary" : "text-secondary"
                                } hover:text-primary transition`
                            }
                        >
                            {item.navitem}
                        </NavLink>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-3xl text-primary hover:text-secondary"
                        onClick={() => setMenuOpen(true)}
                    >
                        <HiMenu />
                    </button>

                    {/* User / Login */}
                    {user.name ? (
                        <div className="relative">
                            <img
                                src={user.photoURL}
                                alt={user.name}
                                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer hover:scale-105 transition"
                                title={user.name}
                                onClick={() => setOpen(!open)}
                            />

                            {/* Dropdown */}
                            {open && (
                                <div>
                                    <button
                                        onClick={() => alert("Logout")}
                                        className="absolute right-0 mt-3 z-50 px-8 py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="px-8 py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition cursor-pointer">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-base-100 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-lg font-bold text-primary">GreenNest</h2>
                    <button
                        className="text-3xl text-secondary hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX />
                    </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-4 mt-6 px-6">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.url}
                            key={item.id}
                            className={({ isActive }) =>
                                `font-medium ${isActive ? "text-primary" : "text-secondary"
                                } hover:text-white transition`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.navitem}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Background Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-30"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
