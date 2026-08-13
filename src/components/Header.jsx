import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

import { FiArrowUpRight } from "react-icons/fi";
import { Navigate, NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center">
            <img

              src={Logo}
              alt="Logo"
              className="w-40 h-40 object-contain"
            />

          </a>

          {/* <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#F04F5A] to-[#FFB300] flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">C</span>
            </div>

            <div className="leading-none">
              <h1 className="text-3xl font-extrabold tracking-wide text-gray-900">
                Chak<span className="text-[#F04F5A]">rin</span>
              </h1>
              <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
                Textile Solutions
              </p>
            </div>
          </div> */}

          {/* Desktop Menu */}
          {/* <nav className="hidden lg:flex items-center gap-9">

            <a
              href="/"
              className="relative font-semibold text-red-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-red-600"
            >
              Home
            </a>

            <a
              href="/about"
              className="font-medium hover:text-red-600 duration-300"
            >
              About Us
            </a>

            <div className="group relative">

              <button className="flex items-center gap-1 font-medium hover:text-red-600 duration-300">
                Businesses
                <FiChevronDown className="text-sm mt-0.5" />
              </button>

              <div className="absolute top-12 left-0 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">

                <a
                  href="/business1"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Digital Printing
                </a>

                <a
                  href="/business2"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Textile Machines
                </a>

              </div>
            </div>

            <a
              href="/media"
              className="font-medium hover:text-red-600 duration-300"
            >
              Media
            </a>

            
            <div className="group relative">

              <button className="flex items-center gap-1 font-medium hover:text-red-600 duration-300">
                Investors
                <FiChevronDown className="text-sm mt-0.5" />
              </button>

              <div className="absolute top-12 left-0 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">

                <a
                  href="/reports"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Annual Reports
                </a>

                <a
                  href="/shareholders"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Shareholders
                </a>

              </div>

            </div>

          </nav> */}

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-[#F04F5A]
      ${isActive
                  ? "text-[#F04F5A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#F04F5A]"
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
                `relative font-medium transition-all duration-300 hover:text-[#F04F5A]
      ${isActive
                  ? "text-[#F04F5A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#F04F5A]"
                  : "text-gray-800"
                }`
              }
            >
              About
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-[#F04F5A]
      ${isActive
                  ? "text-[#F04F5A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#F04F5A]"
                  : "text-gray-800"
                }`
              }
            >
              Blog
            </NavLink>

            {/* Businesses Dropdown */}
            <div className="group relative">

              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-[#F04F5A] transition-all duration-300">
                Businesses
                <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-12 w-64 rounded-2xl bg-white shadow-2xl border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

                <NavLink
                  to="/businesses/digital-printing"
                  className="block px-6 py-4 hover:bg-red-50 hover:text-[#F04F5A] transition"
                >
                  Digital Printing
                </NavLink>

                <NavLink
                  to="/businesses/textile-machines"
                  className="block px-6 py-4 hover:bg-red-50 hover:text-[#F04F5A] transition"
                >
                  Textile Machines
                </NavLink>

                <NavLink
                  to="/businesses/spare-parts"
                  className="block px-6 py-4 hover:bg-red-50 hover:text-[#F04F5A] transition"
                >
                  Spare Parts
                </NavLink>

              </div>
            </div>

            {/* Gallery */}
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-[#F04F5A]
      ${isActive
                  ? "text-[#F04F5A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#F04F5A]"
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
                `relative font-medium transition-all duration-300 hover:text-[#F04F5A]
      ${isActive
                  ? "text-[#F04F5A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#F04F5A]"
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
      from-[#F04F5A]
      to-[#FFB300]
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
                  ? "bg-red-50 text-[#F04F5A]"
                  : "text-gray-800 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                  ? "bg-red-50 text-[#F04F5A]"
                  : "text-gray-800 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                  ? "bg-red-50 text-[#F04F5A]"
                  : "text-gray-800 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                      ? "bg-red-50 text-[#F04F5A] font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                      ? "bg-red-50 text-[#F04F5A] font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                      ? "bg-red-50 text-[#F04F5A] font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                  ? "bg-red-50 text-[#F04F5A]"
                  : "text-gray-800 hover:bg-gray-50 hover:text-[#F04F5A]"
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
                  ? "bg-red-50 text-[#F04F5A]"
                  : "text-gray-800 hover:bg-gray-50 hover:text-[#F04F5A]"
                }`
              }
            >
              Contact
            </NavLink>


            {/* Connect Button */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-3 w-full flex items-center justify-center bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
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