import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import footerBg from "../assets/h1_slide-1.jpg";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20">

        {/* Top */}

        <div className="grid lg:grid-cols-3 gap-16  border-white/10 pb-16">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-black text-white">
              Chak
              <span className="bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
                rin
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              We deliver premium digital textile printing
              solutions with advanced technology,
              innovation and trusted quality for
              textile industries across India.
            </p>

            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (

                <a
                  key={i}
                  href="/"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#F04F5A] hover:to-[#FFB300] transition"
                >
                  <Icon />
                </a>

              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-4">

              {[
                "Home",
                "About",
                "Businesses",
                "Blog",
                "Gallery",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="/"
                    className="text-gray-300 hover:text-[#FFB300] duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">

                <FiPhone className="text-[#FFB300] mt-1 text-xl" />

                <div>

                  <h5 className="text-white font-semibold">
                    Phone
                  </h5>

                  <p className="text-gray-300">
                    +91 90840 00006
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FiMail className="text-[#FFB300] mt-1 text-xl" />

                <div>

                  <h5 className="text-white font-semibold">
                    Email
                  </h5>

                  <p className="text-gray-300">
                    chakrindigitaltextiles.admin@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FiMapPin className="text-[#FFB300] mt-1 text-xl" />

                <div>

                  <h5 className="text-white font-semibold">
                    Address
                  </h5>

                  <p className="text-gray-300">
                    Chakrin Digital Textiles
                    <br />
                    Tehsil Israna,
                    VPO Palri,
                    Haryana - 132145
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Newsletter */}

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h2 className="text-3xl font-bold text-white">
                Subscribe Newsletter
              </h2>

              <p className="text-gray-400 mt-2">
                Get updates about our latest products.
              </p>

            </div>

            <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white outline-none"
              />

              <button className="rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-8 py-4 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">

                Subscribe

                <FiArrowUpRight />

              </button>

            </div>

          </div>

        </motion.div> */}

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Chakrin Digital Textiles.
            All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Designed & Developed by{" "}
            <a href="https://ymorinnovation.com/" target="_blank" rel="noreferrer" className="font-semibold text-[#FFB300] hover:text-[#F04F5A] transition duration-300">Ymor Innovation</a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;