import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import Logo from "../assets/logo/Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import footerBg from "../assets/h1_slide-1.jpg";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-chakrin-heading/95" />

      {/* Soft Theme Glows */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-chakrin-primary/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* ================= TOP CONTENT ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-14">

          {/* ================= LOGO / ABOUT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="Chakrin Digital Textiles Logo"
                className="w-40 sm:w-48 lg:w-52 h-auto object-contain"
              />
            </Link>

            {/* <Link to="/" className="inline-block">

              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Chak
                <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
                  rin
                </span>
              </h2>

            </Link> */}

            <p className="mt-6 max-w-md text-white/65 leading-8">
              We deliver premium digital textile printing solutions with
              advanced technology, innovation and trusted quality for
              textile industries across India.
            </p>

            {/* Social Icons */}

            <div className="flex gap-3 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (

                  <a
                    key={index}
                    href="/"
                    className="
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-white/10
                      border
                      border-white/10
                      text-white
                      hover:bg-chakrin-primary
                      hover:border-chakrin-primary
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <Icon />
                  </a>

                )
              )}

            </div>

          </motion.div>


          {/* ================= QUICK LINKS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quick Links
            </h3>

            {/* Theme Accent */}

            <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-chakrin-primary to-chakrin-secondary" />

            <ul className="mt-7 space-y-4">

              {/* Home */}

              <li>
                <Link
                  to="/"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  Home

                </Link>
              </li>


              {/* About */}

              <li>
                <Link
                  to="/about-us"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  About

                </Link>
              </li>


              {/* Businesses */}

              {/* <li>
                <Link
                  to="/businesses"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  Businesses

                </Link>
              </li> */}


              {/* Blog */}

              <li>
                <Link
                  to="/blog"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  Blog

                </Link>
              </li>


              {/* Gallery */}

              <li>
                <Link
                  to="/gallery"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  Gallery

                </Link>
              </li>


              {/* Contact */}

              <li>
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-white/65
                    hover:text-chakrin-secondary
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-chakrin-secondary
                      group-hover:w-4
                      transition-all
                      duration-300
                    "
                  />

                  Contact

                </Link>
              </li>

            </ul>

          </motion.div>


          {/* ================= CONTACT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-chakrin-primary to-chakrin-secondary" />


            <div className="mt-7 space-y-6">

              {/* Phone */}

              <div className="flex gap-4">

                <div
                  className="
                    flex-shrink-0
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-chakrin-primary/10
                    border
                    border-chakrin-primary/20
                  "
                >
                  <FiPhone className="text-chakrin-secondary text-lg" />
                </div>

                <div>

                  <h5 className="text-white font-semibold">
                    Phone
                  </h5>

                  <a
                    href="tel:+919084000006"
                    className="mt-1 text-white/60 hover:text-chakrin-secondary transition"
                  >
                    +91 90840 00006
                  </a>

                </div>

              </div>


              {/* Email */}

              <div className="flex gap-4">

                <div
                  className="
                    flex-shrink-0
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-chakrin-primary/10
                    border
                    border-chakrin-primary/20
                  "
                >
                  <FiMail className="text-chakrin-secondary text-lg" />
                </div>

                <div className="min-w-0">

                  <h5 className="text-white font-semibold">
                    Email
                  </h5>

                  <a
                    href="mailto:chakrindigitaltextiles.admin@gmail.com"
                    className="mt-1 text-white/60 break-all hover:text-chakrin-secondary transition"
                  >
                    chakrindigitaltextiles.admin@gmail.com
                  </a>

                </div>

              </div>


              {/* Address */}

              <div className="flex gap-4">

                <div
                  className="
                    flex-shrink-0
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-chakrin-primary/10
                    border
                    border-chakrin-primary/20
                  "
                >
                  <FiMapPin className="text-chakrin-secondary text-lg" />
                </div>

                <div>

                  <h5 className="text-white font-semibold">
                    Address
                  </h5>

                  <p className="mt-1 text-white/60 leading-7">
                    Chakrin Digital Textiles
                    <br />
                    Tehsil Israna,
                    VPO Palri,
                    <br />
                    Haryana - 132145
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-4
            border-t
            border-white/10
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-white/45 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Chakrin Digital Textiles.
            All Rights Reserved.
          </p>


          <p className="text-white/45 text-sm text-center">

            Designed & Developed by{" "}

            <a
              href="https://ymorinnovation.com/"
              target="_blank"
              rel="noreferrer"
              className="
                font-semibold
                text-chakrin-secondary
                hover:text-chakrin-primary-light
                transition
                duration-300
              "
            >
              Ymor Innovation
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;