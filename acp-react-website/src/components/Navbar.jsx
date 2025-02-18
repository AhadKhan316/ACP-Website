
import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({})
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState({})
    const location = useLocation()
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
                setIsSubMenuOpen({})
                setIsSubSubMenuOpen({})
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Close menus when route changes
    useEffect(() => {
        setIsMenuOpen(false)
        setIsSubMenuOpen({})
        setIsSubSubMenuOpen({})
    }, []) //Fixed: Removed unnecessary dependency 'location'

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const toggleSubMenu = (menu, event) => {
        event.preventDefault()
        setIsSubMenuOpen((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [menu]: !prev[menu],
        }))
        setIsSubSubMenuOpen({})
    }

    const toggleSubSubMenu = (submenu, event) => {
        event.preventDefault()
        event.stopPropagation()
        setIsSubSubMenuOpen((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [submenu]: !prev[submenu],
        }))
    }

    const isActiveLink = (path) => location.pathname === path

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            className={`block py-2.5 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-blue-600 font-semibold bg-blue-50/50" : "font-medium"
                }`}
        >
            {children}
        </Link>
    )

    const DropdownButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2.5 px-4 text-gray-700 hover:text-blue-600 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-blue-600 bg-blue-50/50" : ""
                }`}
        >
            <span>{children}</span>
            <FaChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : "text-gray-400 group-hover:text-blue-600"
                    }`}
            />
        </button>
    )

    const SubSubMenuButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2.5 px-4 text-gray-700 hover:text-blue-600 font-medium rounded-md group transition-colors duration-200 ${isOpen ? "text-blue-600 bg-blue-50/50" : ""
                }`}
        >
            <span>{children}</span>
            <FaChevronRight
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90 text-blue-600" : "text-gray-400 group-hover:text-blue-600"
                    }`}
            />
        </button>
    )

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-5" ref={menuRef}>
                <Link to="/" className="flex items-center space-x-3">
                    <img src="https://acpkhi.com/logo.png" alt="Arts Council Logo" className="w-12 h-12 rounded-full" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">ACP KHI</span>
                </Link>

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-multi-level"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Toggle main menu</span>
                    {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>

                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-1 mt-4 md:mt-0">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {/* Production Dropdown */}
                        <li className="relative">
                            <DropdownButton onClick={(e) => toggleSubMenu("production", e)} isOpen={isSubMenuOpen["production"]}>
                                Production
                            </DropdownButton>
                            {isSubMenuOpen["production"] && (
                                <div className="md:absolute left-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg focus:outline-none">
                                    <div className="p-2 space-y-1">
                                        <div className="relative">
                                            <SubSubMenuButton
                                                onClick={(e) => toggleSubSubMenu("festival", e)}
                                                isOpen={isSubSubMenuOpen["festival"]}
                                            >
                                                Festival
                                            </SubSubMenuButton>
                                            {isSubSubMenuOpen["festival"] && (
                                                <div className="md:absolute left-full top-0 mt-0 ml-2 w-48 rounded-lg bg-white shadow-lg ">
                                                    <div className="p-2 space-y-1">
                                                        <NavLink to="/festival/music">Music</NavLink>
                                                        <NavLink to="/festival/film">Film</NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <NavLink to="/production/events">Events</NavLink>
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
                            <NavLink to="/cafeteria">Cafeteria</NavLink>
                        </li>

                        {/* About Us Dropdown */}
                        <li className="relative">
                            <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>
                                About Us
                            </DropdownButton>
                            {isSubMenuOpen["about"] && (
                                <div className="md:absolute right-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg ">
                                    <div className="p-2 space-y-1">
                                        <NavLink to="/about">About</NavLink>
                                        <div className="relative">
                                            <SubSubMenuButton
                                                onClick={(e) => toggleSubSubMenu("governingBody", e)}
                                                isOpen={isSubSubMenuOpen["governingBody"]}
                                            >
                                                Governing Body
                                            </SubSubMenuButton>
                                            {isSubSubMenuOpen["governingBody"] && (
                                                <div className="md:absolute left-full top-0 mt-0 ml-2 w-48 rounded-lg bg-white shadow-lg">
                                                    <div className="p-2 space-y-1">
                                                        <NavLink to="/GoverningBody/members">Members</NavLink>
                                                        <NavLink to="/GoverningBody/roles">Roles</NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <NavLink to="/TeamMembers">Team</NavLink>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to="#contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

