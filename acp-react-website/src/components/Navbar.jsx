import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";

import acpLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState({});
    const location = useLocation();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsSubMenuOpen({});
                setIsSubSubMenuOpen({});
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close menus when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsSubMenuOpen({});
        setIsSubSubMenuOpen({});
    }, [location]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSubMenu = (menu, event) => {
        event.preventDefault();
        setIsSubMenuOpen((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [menu]: !prev[menu],
        }));
        setIsSubSubMenuOpen({});
    };

    const toggleSubSubMenu = (submenu, event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsSubSubMenuOpen((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [submenu]: !prev[submenu],
        }));
    };

    const isActiveLink = (path) => location.pathname === path;

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            className={`block py-2 px-4 text-white hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-white font-semibold bg-gray-700" : "font-medium"
                }`}
        >
            {children}
        </Link>
    );

    const DropdownButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2 px-4 text-white hover:text-white hover:bg-gray-800 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-white bg-gray-700" : ""
                }`}
        >
            <span>{children}</span>
            <FaChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-gray-300 group-hover:text-white"
                    }`}
            />
        </button>
    );

    const SubSubMenuButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2 px-4 text-white hover:text-white hover:bg-gray-800 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-white bg-gray-700" : ""
                }`}
        >
            <span>{children}</span>
            <FaChevronRight
                className={`ml-2 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90 text-white" : "text-gray-300 group-hover:text-white"
                    }`}
            />
        </button>
    );

    return (
        <header className="bg-gradient-to-r from-black/80 to-black/90 sticky top-0 z-50 shadow-md">
            <nav
                className="h-[80px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
                ref={menuRef}
            >
                {/* Logo */}
                <Link to="/" className="h-full flex items-center">
                    <div className="h-full flex items-center">
                        <img
                            src={acpLogo}
                            alt="Arts Council Logo"
                            className="h-auto max-h-[180px] w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Hamburger Icon */}
                <button
                    onClick={toggleMenu}
                    className="text-white lg:hidden focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex space-x-4 items-center">
                    <li><NavLink to="/">Home</NavLink></li>

                    {/* About Dropdown */}
                    <li className="relative group">
                        <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>
                            About
                        </DropdownButton>
                        {isSubMenuOpen["about"] && (
                            <div className="absolute top-full left-0 mt-2 bg-black text-white rounded-md shadow-xl w-64 transition-transform duration-300 transform scale-95 group-hover:scale-100">
                                <div className="p-3 space-y-2">
                                    <NavLink to="/about">About Us</NavLink>
                                    <NavLink to="/GoverningBody">Governing Body</NavLink>
                                    <NavLink to="/TeamMembers">Team</NavLink>
                                </div>
                            </div>
                        )}
                    </li>

                    <li><NavLink to="/AcademiesPage">Academies</NavLink></li>
                    <li><NavLink to="/VenuesPage">Venues</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>

                    {/* Resources Dropdown */}
                    <li className="relative group">
                        <DropdownButton onClick={(e) => toggleSubMenu("resources", e)} isOpen={isSubMenuOpen["resources"]}>
                            Resources
                        </DropdownButton>
                        {isSubMenuOpen["resources"] && (
                            <div className="absolute top-full left-0 mt-2 bg-black text-white rounded-md shadow-xl w-64 transition-transform duration-300 transform scale-95 group-hover:scale-100">
                                <div className="p-3 space-y-2">
                                    <NavLink to="/membersVerification">Membership Verification</NavLink>
                                    <NavLink to="/career">Career</NavLink>
                                    <NavLink to="/tenders">Tenders</NavLink>
                                </div>
                            </div>
                        )}
                    </li>

                    <li><NavLink to="/ContactUs">Contact Us</NavLink></li>

                    {/* CTA Button */}
                    {/* <li>
                        <Link
                            to="/join"
                            className="ml-3 bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                        >
                            Join Now
                        </Link>
                    </li> */}
                </ul>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black/95 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                        <h2 className="text-white font-bold text-lg">Menu</h2>
                        <button onClick={toggleMenu} className="text-white">
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 space-y-4 text-white">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/GoverningBody">Governing Body</NavLink></li>
                        <li><NavLink to="/AcademiesPage">Academies</NavLink></li>
                        <li><NavLink to="/VenuesPage">Venue</NavLink></li>
                        <li><NavLink to="/events">Events</NavLink></li>
                        <li><NavLink to="/career">Career</NavLink></li>
                        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                        <li>
                            {/* <Link to="/join" className="bg-white text-black py-2 px-4 rounded-lg text-center">Join Now</Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;