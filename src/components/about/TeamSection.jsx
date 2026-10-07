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
          ANIMATED BACKGROUND
      ====================================================== */}

      {/* Large Primary Glow */}

      <motion.div
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-chakrin-primary/10
          blur-[90px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />


      {/* Large Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-chakrin-secondary/20
          blur-[100px]
          sm:h-[560px]
          sm:w-[560px]
        "
      />


      {/* Center Soft Glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-chakrin-primary/5
          blur-[80px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />


      {/* =====================================================
          SUBTLE ANIMATED GRID
      ====================================================== */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(166,61,130,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(166,61,130,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />


      {/* =====================================================
          FLOATING DECORATIVE CIRCLES
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[28%]
          hidden
          h-14
          w-14
          rounded-full
          border
          border-chakrin-primary/15
          sm:block
          sm:h-20
          sm:w-20
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          hidden
          h-16
          w-16
          rounded-full
          border
          border-chakrin-secondary/20
          md:block
          md:h-24
          md:w-24
        "
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[5%]
          h-3
          w-3
          rounded-full
          bg-chakrin-primary/30
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[24%]
          right-[6%]
          h-4
          w-4
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
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
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
              letterSpacing: "1px",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "4px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
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
              duration: 0.7,
              delay: 0.35,
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

              /* Alternating entrance animation */

              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -80
                    : 80,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -10,
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
                bg-white/90
                shadow-[0_10px_35px_rgba(166,61,130,0.07)]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-chakrin-primary/40
                hover:shadow-[0_25px_60px_rgba(166,61,130,0.16)]
                sm:max-w-[360px]
                sm:rounded-3xl
                lg:max-w-[380px]
              "
            >

              {/* Animated Card Glow */}

              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-20
                  h-full
                  w-1/3
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                "
              />


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
                    duration-700
                    group-hover:scale-105
                  "
                />


                {/* Image Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-chakrin-primary/85
                    via-chakrin-primary/5
                    to-transparent
                    opacity-0
                    transition-all
                    duration-500
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
                    duration-500
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
                    translate-y-5
                    gap-2
                    opacity-0
                    transition-all
                    duration-500
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
                      duration-300
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
                      duration-300
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
                      duration-300
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
                    duration-300
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


                {/* Bottom Animated Line */}

                <motion.div
                  initial={{
                    width: "25%",
                  }}
                  whileHover={{
                    width: "70%",
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