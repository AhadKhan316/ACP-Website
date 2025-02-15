import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState({});  // Keep this
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSubMenu = (menu) => {
        setIsSubMenuOpen((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), // Close other submenus
            [menu]: !prev[menu],
        }));
        // Close any open sub-submenus when a main dropdown is toggled
        setIsSubSubMenuOpen({});
    };
    const toggleSubSubMenu = (submenu) => {
        setIsSubSubMenuOpen((prev) => ({
             ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), // Close other submenus
            [submenu]: !prev[submenu],
        }));
    };


    const isActiveLink = (path) => location.pathname === path;

      // Helper function for consistent link styling
    const NavLink = ({ to, children }) => (
        <Link
        to={to}
        className={`block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActiveLink(to) ? "text-blue-700 dark:text-blue-500 font-bold" : ""}`}
        >
        {children}
        </Link>
    );

    const DropdownButton = ({ children, onClick }) => (
        <button
          onClick={onClick}
          className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        >
          {children} <FaChevronDown className="ml-1 w-4 h-4" />
        </button>
      );

    const SubSubMenuButton = ({children, onClick}) => (
        <button
            onClick={(e) => {
                e.stopPropagation(); // Prevent closing parent menu
                onClick();

            }}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
            {children} <FaChevronRight className="ml-auto w-4 h-4"/>
        </button>
    )
    return (
        <header className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo and Brand Name */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src="https://acpkhi.com/logo.png" alt="Arts Council Logo" className="w-14 h-14 rounded-full" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ACP KHI</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <FaTimes className="w-5 h-5" />
                    ) : (
                        <FaBars className="w-5 h-5" />
                    )}
                </button>

                {/* Desktop and Mobile Menu Container */}
                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {/* Home Link */}
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {/* Production Dropdown */}
                        <li>
                            <DropdownButton onClick={() => toggleSubMenu("production")}>Production</DropdownButton>
                            <div className={`${isSubMenuOpen["production"] ? "block" : "hidden"} md:absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li className="relative">
                                         <SubSubMenuButton onClick={() => toggleSubSubMenu("festival")}>Festival</SubSubMenuButton>
                                        <div className={`${isSubSubMenuOpen["festival"] ? "block" : "hidden"} absolute md:left-full top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li>
                                                    <NavLink to="/festival/music">Music</NavLink>
                                                </li>
                                                <li>
                                                   <NavLink to="/festival/film">Film</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                         <NavLink to="/production/events">Events</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                         <li>
                            <NavLink to="/AcademiesPage">Academies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/VenuesPage">Venue</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cafeteria">Cafeteria</NavLink>
                        </li>
                        {/* About Us Dropdown */}
                       <li>
                            <DropdownButton onClick={() => toggleSubMenu("about")}>About Us</DropdownButton>
                            <div className={`${isSubMenuOpen["about"] ? "block" : "hidden"} md:absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li className="relative">
                                          <SubSubMenuButton onClick={() => toggleSubSubMenu("governingBody")}>Governing Body</SubSubMenuButton>

                                        <div className={`${isSubSubMenuOpen["governingBody"] ? "block" : "hidden"} absolute md:left-full top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li>
                                                    <NavLink to="/GoverningBody/members">Members</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/GoverningBody/roles">Roles</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                         <NavLink to="/TeamMembers">Team</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Contact Link */}
                        <li>
                            <NavLink to="#contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;