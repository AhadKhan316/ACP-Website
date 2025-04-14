import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import I18n from "../components/I18n";

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
            className={`block py-2 px-3 sm:py-2.5 sm:px-4 text-white hover:text-black hover:bg-gray-200 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-black font-semibold bg-gray-300" : "font-medium"
                } text-sm sm:text-base`}
        >
            {children}
        </Link>
    );

    const DropdownButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2 px-3 sm:py-2.5 sm:px-4 text-white hover:text-black hover:bg-gray-200 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-black bg-gray-300" : ""
                } text-sm sm:text-base`}
        >
            <span>{children}</span>
            <FaChevronDown
                className={`ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-black" : "text-gray-400 group-hover:text-black"
                    }`}
            />
        </button>
    );

    const SubSubMenuButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2 px-3 sm:py-2.5 sm:px-4 text-white hover:text-black hover:bg-gray-200 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-black bg-gray-300" : ""
                } text-sm sm:text-base`}
        >
            <span>{children}</span>
            <FaChevronRight
                className={`ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? "rotate-90 text-black" : "text-gray-400 group-hover:text-black"
                    }`}
            />
        </button>
    );

    return (
        <header className="bg-black sticky top-0 border-b border-white/15 shadow-lg">
            <nav
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1"
                ref={menuRef}
            >
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src={acpLogo}
                        alt="Arts Council Logo"
                        className="h-25 sm:h-25 md:h-32 w-auto rounded-full"
                    />
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Toggle main menu</span>
                    {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>

                {/* Menu Links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } w-full lg:flex lg:w-auto lg:space-x-2 xl:space-x-4 transition-all duration-300 ease-in-out`}
                    id="navbar-multi-level"
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 xl:space-x-4 mt-2 lg:mt-0">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {/* About Us Dropdown */}
                        <li className="relative">
                            <DropdownButton
                                onClick={(e) => toggleSubMenu("about", e)}
                                isOpen={isSubMenuOpen["about"]}
                            >
                                About Us
                            </DropdownButton>
                            {isSubMenuOpen["about"] && (
                                <div className="lg:absolute top-full mt-1 w-full sm:w-48 md:w-56 rounded-lg bg-black border border-gray-700 shadow-lg lg:shadow-xl">
                                    <div className="p-2 space-y-1">
                                        <NavLink to="/about">About Us</NavLink>
                                        <NavLink to="/GoverningBody">Governing Body</NavLink>
                                        <NavLink to="/TeamMembers">Team</NavLink>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* Production Dropdown */}
                        <li className="relative">
                            <DropdownButton
                                onClick={(e) => toggleSubMenu("production", e)}
                                isOpen={isSubMenuOpen["production"]}
                            >
                                Production
                            </DropdownButton>
                            {isSubMenuOpen["production"] && (
                                <div className="lg:absolute top-full mt-1 w-full sm:w-48 md:w-56 rounded-lg bg-black border border-gray-700 shadow-lg lg:shadow-xl">
                                    <div className="p-2 space-y-1">
                                        <div className="relative">
                                            <SubSubMenuButton
                                                onClick={(e) => toggleSubSubMenu("festival", e)}
                                                isOpen={isSubSubMenuOpen["festival"]}
                                            >
                                                Festival
                                            </SubSubMenuButton>
                                            {isSubSubMenuOpen["festival"] && (
                                                <div className="lg:absolute left-full top-0 mt-0 ml-1 w-full sm:w-48 md:w-56 rounded-lg bg-black border border-gray-700 shadow-lg lg:shadow-xl">
                                                    <div className="p-2 space-y-1">
                                                        <NavLink to="/festival/wcf">World Culture Festival</NavLink>
                                                        <NavLink to="/festival/auc">Aalmi Urdu Conference</NavLink>
                                                        <NavLink to="/festival/plf">Pakistan Literature Festival</NavLink>
                                                        <NavLink to="/festival/ptf">Pakistan Theatre Festival</NavLink>
                                                        <NavLink to="/festival/pyf">Pakistan Youth Festival</NavLink>
                                                        <NavLink to="/festival/wc">Women Conference</NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <SubSubMenuButton
                                                onClick={(e) => toggleSubSubMenu("events", e)}
                                                isOpen={isSubSubMenuOpen["events"]}
                                            >
                                                Events
                                            </SubSubMenuButton>
                                            {isSubSubMenuOpen["events"] && (
                                                <div className="lg:absolute left-full top-0 mt-0 ml-1 w-full sm:w-48 md:w-56 rounded-lg bg-black border border-gray-700 shadow-lg lg:shadow-xl">
                                                    <div className="p-2 space-y-1">
                                                        <NavLink to="/events/acpMusic">ACP Musics</NavLink>
                                                        <NavLink to="/events/dance">Dance</NavLink>
                                                        <NavLink to="/events/bookLaunches">Book Launches</NavLink>
                                                        <NavLink to="/events/musicalEvening">Musical Evening</NavLink>
                                                        <NavLink to="/events/exhibition">Exhibition</NavLink>
                                                        <NavLink to="/events/internationalCollaboration">
                                                            International Collaboration
                                                        </NavLink>
                                                        <NavLink to="/events/acpTalks">ACP Talks</NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to="/AcademiesPage">Academies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/VenuesPage">Venue</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>

                        {/* Resources Dropdown */}
                        <li className="relative">
                            <DropdownButton
                                onClick={(e) => toggleSubMenu("resources", e)}
                                isOpen={isSubMenuOpen["resources"]}
                            >
                                Resources
                            </DropdownButton>
                            {isSubMenuOpen["resources"] && (
                                <div className="lg:absolute top-full mt-1 w-full sm:w-48 md:w-56 rounded-lg bg-black border border-gray-700 shadow-lg lg:shadow-xl">
                                    <div className="p-2 space-y-1">
                                        <NavLink to="/membersVerification">Membership Verification</NavLink>
                                        <NavLink to="/career">Career</NavLink>
                                        <NavLink to="/tenders">Tenders</NavLink>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to="/ContactUs">Contact Us</NavLink>
                        </li>
                        {/* <I18n /> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;