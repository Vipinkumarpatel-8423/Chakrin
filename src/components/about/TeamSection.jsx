
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { directors } from "../../data/directors";

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-24 bg-chakrin-secondary-light">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span
            className="
              uppercase
              tracking-[3px]
              sm:tracking-[5px]
              text-chakrin-primary
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Leadership
          </span>

          <h2
            className="
              mt-3
              sm:mt-4
              text-2xl
              xs:text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-chakrin-heading
              leading-tight
            "
          >
            Meet Our Leadership Team
          </h2>

          <p
            className="
              mt-4
              sm:mt-5
              max-w-2xl
              mx-auto
              px-2
              sm:px-0
              text-chakrin-text
              leading-6
              sm:leading-7
              text-sm
              sm:text-base
            "
          >
            Experienced leaders driving innovation, quality and excellence
            in textile printing technology.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
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
                rounded-2xl
                sm:rounded-3xl
                bg-white
                border
                border-chakrin-border
                shadow-[0_10px_35px_rgba(166,61,130,0.07)]
                hover:border-chakrin-primary/40
                hover:shadow-[0_20px_45px_rgba(166,61,130,0.14)]
                transition-all
                duration-500

                /* Responsive card width */
                w-full
                max-w-[340px]
                sm:max-w-[360px]
                lg:max-w-[380px]
              "
            >
              {/* ================= IMAGE ================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  w-full
                  aspect-[4/5]
                  sm:aspect-[4/4.5]
                  lg:aspect-[4/4.6]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    block
                    w-full
                    h-full
                    object-cover
                    object-center
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
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
                  "
                />

                {/* ================= SOCIAL ================= */}

                <div
                  className="
                    absolute
                    bottom-4
                    sm:bottom-5
                    left-1/2
                    -translate-x-1/2
                    flex
                    gap-2
                    sm:gap-3
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >
                  {/* Facebook */}

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
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
                    <FaFacebookF className="text-sm sm:text-base" />
                  </a>

                  {/* Instagram */}

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
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
                    <FaInstagram className="text-sm sm:text-base" />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
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
                    <FaLinkedinIn className="text-sm sm:text-base" />
                  </a>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5 sm:p-6 lg:p-7 text-center">
                <h3
                  className="
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                    font-bold
                    text-chakrin-heading
                    group-hover:text-chakrin-primary
                    transition-colors
                    duration-300
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    mt-2
                    sm:mt-3
                    inline-block
                    rounded-full
                    bg-chakrin-secondary-light
                    text-chakrin-primary-dark
                    border
                    border-chakrin-border
                    px-3
                    sm:px-4
                    py-1
                    text-xs
                    sm:text-sm
                    font-medium
                    max-w-full
                  "
                >
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
