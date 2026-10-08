import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { directors } from "../../data/directors";

const TeamSection = () => {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-chakrin-secondary-light
        pb-16
        pt-14
        sm:pb-20
        sm:pt-16
        lg:pb-24
        lg:pt-20
      "
    >
      {/* =====================================================
          SIMPLE ANIMATED BACKGROUND
      ====================================================== */}

      {/* Primary Glow */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-chakrin-primary/10
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-chakrin-secondary/15
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      {/* Small Decorative Dots */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[25%]
          h-2
          w-2
          rounded-full
          bg-chakrin-primary/40
        "
      />

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[20%]
          h-3
          w-3
          rounded-full
          bg-chakrin-secondary/40
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          xs:px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
            lg:mb-16
          "
        >
          {/* Small Heading */}

          <motion.span
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              inline-block
              text-xs
              font-semibold
              uppercase
              text-chakrin-primary
              sm:text-sm
            "
          >
            Leadership
          </motion.span>

          {/* Heading */}

          <h2
            className="
              mt-3
              text-2xl
              font-bold
              leading-tight
              text-chakrin-heading
              xs:text-3xl
              sm:mt-4
              sm:text-4xl
              lg:text-5xl
            "
          >
            Meet Our Leadership Team
          </h2>

          {/* Animated Accent */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: "70px",
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-4
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-chakrin-primary
              to-chakrin-secondary
              sm:mt-5
            "
          />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-chakrin-text
              sm:mt-5
              sm:px-0
              sm:text-base
              sm:leading-7
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
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                w-full
                max-w-[340px]
                overflow-hidden
                rounded-2xl
                border
                border-chakrin-border
                bg-white
                shadow-[0_8px_25px_rgba(166,61,130,0.06)]
                transition-all
                duration-300
                hover:border-chakrin-primary/40
                hover:shadow-[0_18px_40px_rgba(166,61,130,0.13)]
                sm:max-w-[360px]
                sm:rounded-3xl
                lg:max-w-[380px]
              "
            >
              {/* ================= IMAGE ================= */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  overflow-hidden
                  sm:aspect-[4/4.5]
                  lg:aspect-[4/4.6]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-chakrin-primary/80
                    via-chakrin-primary/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Image Border Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-t-2xl
                    border
                    border-white/0
                    transition-all
                    duration-300
                    group-hover:border-white/20
                    sm:rounded-t-3xl
                  "
                />

                {/* ================= SOCIAL ================= */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-1/2
                    flex
                    -translate-x-1/2
                    translate-y-4
                    gap-2
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    sm:bottom-5
                    sm:gap-3
                  "
                >
                  {/* Facebook */}

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      shadow-lg
                      transition-all
                      duration-200
                      hover:scale-110
                      hover:bg-chakrin-primary
                      hover:text-white
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaFacebookF className="text-sm sm:text-base" />
                  </a>

                  {/* Instagram */}

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      shadow-lg
                      transition-all
                      duration-200
                      hover:scale-110
                      hover:bg-chakrin-primary
                      hover:text-white
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaInstagram className="text-sm sm:text-base" />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-chakrin-primary
                      shadow-lg
                      transition-all
                      duration-200
                      hover:scale-110
                      hover:bg-chakrin-primary
                      hover:text-white
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaLinkedinIn className="text-sm sm:text-base" />
                  </a>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div
                className="
                  relative
                  p-5
                  text-center
                  sm:p-6
                  lg:p-7
                "
              >
                <h3
                  className="
                    text-lg
                    font-bold
                    text-chakrin-heading
                    transition-colors
                    duration-200
                    group-hover:text-chakrin-primary
                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-2
                    inline-block
                    max-w-full
                    rounded-full
                    border
                    border-chakrin-border
                    bg-chakrin-secondary-light
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-chakrin-primary-dark
                    sm:mt-3
                    sm:px-4
                    sm:text-sm
                  "
                >
                  {item.role}
                </p>

                {/* Bottom Line */}

                <motion.div
                  initial={{
                    width: "25%",
                  }}
                  whileHover={{
                    width: "70%",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    mx-auto
                    mt-5
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-chakrin-primary
                    to-chakrin-secondary
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;