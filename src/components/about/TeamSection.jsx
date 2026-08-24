import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { directors } from "../../data/directors";

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden pb-24 bg-chakrin-secondary-light">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >

          <span className="
            uppercase
            tracking-[5px]
            text-chakrin-primary
            text-sm
            font-semibold
          ">
            Leadership
          </span>

          <h2 className="
            mt-4
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-chakrin-heading
            leading-tight
          ">
            Meet Our Leadership Team
          </h2>

          <p className="
            mt-5
            max-w-2xl
            mx-auto
            text-chakrin-text
            leading-7
            text-sm
            sm:text-base
          ">
            Experienced leaders driving innovation, quality and excellence
            in textile printing technology.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          lg:gap-8
        ">

          {directors.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-chakrin-border
                shadow-[0_10px_35px_rgba(166,61,130,0.07)]
                hover:border-chakrin-primary/40
                hover:shadow-[0_20px_45px_rgba(166,61,130,0.14)]
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-[320px]
                    sm:h-[340px]
                    object-cover
                    group-hover:scale-110
                    duration-700
                  "
                />

                {/* Image Overlay */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-chakrin-primary/80
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                " />

                {/* Social */}

                <div className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  flex
                  gap-3
                  opacity-0
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                ">

                  {/* Facebook */}

                  <a
                    href="#"
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      flex
                      items-center
                      justify-center
                      hover:bg-chakrin-primary
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaFacebookF />
                  </a>

                  {/* Instagram */}

                  <a
                    href="#"
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      flex
                      items-center
                      justify-center
                      hover:bg-chakrin-primary
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaInstagram />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="#"
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      flex
                      items-center
                      justify-center
                      hover:bg-chakrin-primary
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>

              {/* Content */}

              <div className="p-6 sm:p-7 text-center">

                <h3 className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-chakrin-heading
                  group-hover:text-chakrin-primary
                  transition-colors
                  duration-300
                ">
                  {item.name}
                </h3>

                <p className="
                  mt-3
                  inline-block
                  rounded-full
                  bg-chakrin-secondary-light
                  text-chakrin-primary-dark
                  border
                  border-chakrin-border
                  px-4
                  py-1
                  text-sm
                  font-medium
                ">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TeamSection;