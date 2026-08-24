import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import { FiArrowUpRight } from "react-icons/fi";
import { Navigate, NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-chakrin-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-40 h-40 object-contain" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-chakrin-primary-light
      ${isActive
                  ? "text-chakrin-primary-light after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-chakrin-primary"
                  : "text-gray-800"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-chakrin-primary-light
      ${isActive
                  ? "text-chakrin-primary-light after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-chakrin-primary"
                  : "text-gray-800"
                }`
              }
            >
              About Us
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-chakrin-primary-light
      ${isActive
                  ? "text-chakrin-primary-light after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-chakrin-primary"
                  : "text-gray-800"
                }`
              }
            >
              Blog
            </NavLink>

            {/* Businesses Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-chakrin-primary-light transition-all duration-300">
                Businesses
                <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-12 w-64 rounded-2xl bg-white shadow-2xl border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                <NavLink
                  to="/businesses/digital-printing"
                  className="block px-6 py-4 hover:bg-chakrin-secondary-light hover:text-chakrin-primary transition"
                >
                  Digital Printing
                </NavLink>

                <NavLink
                  to="/businesses/textile-machines"
                  className="block px-6 py-4 hover:bg-chakrin-secondary-light hover:text-chakrin-primary transition"
                >
                  Textile Machines
                </NavLink>

                <NavLink
                  to="/businesses/spare-parts"
                  className="block px-6 py-4 hover:bg-chakrin-secondary-light hover:text-chakrin-primary transition"
                >
                  Spare Parts
                </NavLink>
              </div>
            </div>

            {/* Gallery */}
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-chakrin-primary-light
      ${isActive
                  ? "text-chakrin-primary-light after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-chakrin-primary"
                  : "text-gray-800"
                }`
              }
            >
              Gallery
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-chakrin-primary-light
      ${isActive
                  ? "text-chakrin-primary-light after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-chakrin-primary"
                  : "text-gray-800"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Button */}
          {/* Button */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="
     bg-gradient-to-r
    from-chakrin-primary
    to-chakrin-secondary
      text-white
      font-semibold
      px-8
      py-3
      rounded-full
      shadow-lg
      hover:scale-105
      hover:shadow-xl
      transition-all
      duration-300
      flex
      items-center
      gap-2
      hover:from-chakrin-primary-dark
hover:to-chakrin-primary-light
    "
            >
              CONNECT
              <FiArrowUpRight size={18} />
            </NavLink>
          </div>

          {/* Mobile Icon */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-3xl"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* ================= MOBILE MENU ================= */}

      <div
        className={` lg:hidden absolute left-0 right-0 top-full z-50 overflow-hidden
    bg-white border-t border-gray-100 shadow-xl
    transition-all duration-300 ease-in-out ${mobileMenu ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-5 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-1">
            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-red-50 text-chakrin-primary-light"
                  : "text-gray-800 hover:bg-gray-50 hover:text-chakrin-primary-light"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about-us"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-red-50 text-chakrin-primary-light"
                  : "text-gray-800 hover:bg-gray-50 hover:text-chakrin-primary-light"
                }`
              }
            >
              About
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-red-50 text-chakrin-primary-light"
                  : "text-gray-800 hover:bg-gray-50 hover:text-chakrin-primary-light"
                }`
              }
            >
              Blog
            </NavLink>

            {/* ================= BUSINESSES ================= */}

            <div className="w-full">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-800 hover:bg-gray-50  transition-all duration-300"
              >
                <span>Businesses</span>

                <FiChevronDown className="text-lg" />
              </button>

              {/* Business Items */}

              <div className="mt-1 ml-3 border-l-2 border-gray-100 pl-3">
                <NavLink
                  to="/businesses/digital-printing"
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 ${isActive
                      ? "bg-red-50 text-chakrin-primary-light font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-chakrin-primary-light"
                    }`
                  }
                >
                  Digital Printing
                </NavLink>

                <NavLink
                  to="/businesses/textile-machines"
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 ${isActive
                      ? "bg-red-50 text-chakrin-primary-light font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-chakrin-primary-light"
                    }`
                  }
                >
                  Textile Machines
                </NavLink>

                <NavLink
                  to="/businesses/spare-parts"
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 ${isActive
                      ? "bg-red-50 text-chakrin-primary-light font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-chakrin-primary-light"
                    }`
                  }
                >
                  Spare Parts
                </NavLink>
              </div>
            </div>

            {/* Gallery */}
            <NavLink
              to="/gallery"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-red-50 text-chakrin-primary-light"
                  : "text-gray-800 hover:bg-gray-50 hover:text-chakrin-primary-light"
                }`
              }
            >
              Gallery
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-red-50 text-chakrin-primary-light"
                  : "text-gray-800 hover:bg-gray-50 hover:text-chakrin-primary-light"
                }`
              }
            >
              Contact
            </NavLink>

            {/* Connect Button */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-3 w-full flex items-center justify-center bg-gradient-to-r from-chakrin-primary to-chakrin-secondary text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300
              hover:from-chakrin-primary-dark
              hover:to-chakrin-primary-light"
            >
              CONNECT
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
