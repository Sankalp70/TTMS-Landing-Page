import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import content from "../constants/content";
import "./main.css";

export default function NavBar() {
    const { heading, menuItems, cgLogo } = content;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src={cgLogo} alt="CG Logo" className="navbar-logo" />
                    <span className="navbar-heading">{heading}</span>
                </div>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            className={({ isActive }) =>
                                isActive ? "navbar-link active" : "navbar-link"
                            }
                            to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
