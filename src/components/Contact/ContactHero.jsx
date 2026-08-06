import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import contactBg from "../../assets/contact/contact-bg.jpeg";

const ContactHero = () => {
  return (
    <section className="relative min-h-[250px] overflow-hidden sm:min-h-[300px] lg:min-h-[340px] mb-12 sm:mb-16 lg:mb-20">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={contactBg}
          alt="Contact Chakrin Digital"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[250px] items-center justify-center px-5 text-center sm:min-h-[300px] lg:min-h-[340px]">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact
          </h1>

          {/* Breadcrumb */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-xs"
          >

            <Link
              to="/"
              className="flex items-center gap-2 text-white hover:text-orange-400 duration-300"
            >
              <FiHome />
              Home
            </Link>


            <FiChevronRight
              size={14}
              className="text-orange-400"
            />

            <span className="text-orange-400 font-semibold">
              Contact
            </span>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactHero;