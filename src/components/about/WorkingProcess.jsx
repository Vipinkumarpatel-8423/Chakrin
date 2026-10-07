import { motion } from "framer-motion";
import {
  FaPalette,
  FaPrint,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

const process = [
  {
    id: "01",
    icon: <FaPalette />,
    title: "Design & Consultation",
    desc: "We understand your requirements, fabric type, artwork and provide the best digital textile printing solution.",
  },
  {
    id: "02",
    icon: <FaPrint />,
    title: "Precision Printing",
    desc: "Advanced digital textile printing machines ensure vibrant colors, sharp details and premium quality output.",
  },
  {
    id: "03",
    icon: <FaCheckCircle />,
    title: "Quality Inspection",
    desc: "Every fabric passes through strict quality checks before packaging to maintain international standards.",
  },
  {
    id: "04",
    icon: <FaTruck />,
    title: "Packaging & Delivery",
    desc: "Products are carefully packed and delivered safely with complete customer support and timely dispatch.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WorkingProcess = () => {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-chakrin-secondary-light
        py-16
        sm:py-20
        lg:py-28
      "
    >

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      {/* Primary Glow */}

      <motion.div
        animate={{
          x: [0, 90, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
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


      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
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


      {/* Center Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [0.9, 1.12, 0.9],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-chakrin-primary/5
          blur-[90px]
          sm:h-[480px]
          sm:w-[480px]
        "
      />


      {/* =====================================================
          ANIMATED GRID
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
          FLOATING DECORATIVE ELEMENTS
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[20%]
          hidden
          h-16
          w-16
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
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[15%]
          hidden
          h-20
          w-20
          rounded-full
          border
          border-chakrin-secondary/20
          md:block
        "
      />


      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[20%]
          left-[8%]
          h-3
          w-3
          rounded-full
          bg-chakrin-primary/40
        "
      />


      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[25%]
          right-[8%]
          h-4
          w-4
          rounded-full
          bg-chakrin-secondary/50
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =====================================================
            HEADING
        ====================================================== */}

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
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-14
            lg:mb-16
          "
        >

          {/* Label */}

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              rounded-full
              border
              border-chakrin-border
              bg-white/90
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-chakrin-primary
              shadow-sm
              backdrop-blur-sm
              sm:tracking-[4px]
            "
          >
            Working Process
          </motion.span>


          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-chakrin-heading
              sm:text-4xl
              lg:text-5xl
            "
          >
            How We Deliver

            <span
              className="
                block
                bg-gradient-to-r
                from-chakrin-primary
                via-chakrin-primary-light
                to-chakrin-secondary
                bg-clip-text
                text-transparent
              "
            >
              Premium Textile Solutions
            </span>
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
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-5
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-chakrin-primary
              to-chakrin-secondary
            "
          />


          {/* Description */}

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-chakrin-text
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Our streamlined workflow ensures quality, precision and timely
            delivery from concept to finished textile products.
          </p>

        </motion.div>


        {/* =====================================================
            PROCESS CARDS
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:gap-7
            xl:grid-cols-4
          "
        >

          {process.map((step, index) => (

            <motion.div
              key={step.id}

              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -60
                    : 60,
                y: 25,
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
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -10,
              }}

              className="
                group
                relative
                overflow-visible
                rounded-3xl
                border
                border-chakrin-border
                bg-white/90
                p-6
                shadow-[0_10px_35px_rgba(166,61,130,0.06)]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-chakrin-primary/40
                hover:bg-white
                hover:shadow-[0_25px_55px_rgba(166,61,130,0.15)]
                sm:p-7
              "
            >

              {/* =================================================
                  CARD TOP SHINE
              ================================================== */}

              <motion.div
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 4,
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
                  rounded-3xl
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                "
              />


              {/* =================================================
                  NUMBER
              ================================================== */}

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.2,
                }}
                className="
                  absolute
                  right-5
                  top-4
                  text-5xl
                  font-extrabold
                  text-chakrin-secondary-light
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:text-chakrin-border
                  sm:right-6
                  sm:top-5
                "
              >
                {step.id}
              </motion.span>


              {/* =================================================
                  ICON
              ================================================== */}

              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-chakrin-primary
                  to-chakrin-primary-light
                  text-xl
                  text-white
                  shadow-lg
                  shadow-chakrin-primary/20
                  transition-all
                  duration-500
                  group-hover:shadow-xl
                  group-hover:shadow-chakrin-primary/30
                  sm:h-16
                  sm:w-16
                  sm:text-2xl
                "
              >
                {step.icon}
              </motion.div>


              {/* =================================================
                  TITLE
              ================================================== */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-chakrin-heading
                  transition-colors
                  duration-300
                  group-hover:text-chakrin-primary
                  sm:text-2xl
                "
              >
                {step.title}
              </h3>


              {/* =================================================
                  ANIMATED LINE
              ================================================== */}

              <motion.div
                initial={{
                  width: "55px",
                }}
                whileHover={{
                  width: "100%",
                }}
                className="
                  mt-5
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                "
              />


              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-chakrin-text
                  sm:text-[15px]
                "
              >
                {step.desc}
              </p>


              {/* =================================================
                  BOTTOM GLOW
              ================================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.55, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  -right-10
                  h-24
                  w-24
                  rounded-full
                  bg-chakrin-secondary/10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />


              {/* =================================================
                  CONNECTOR - DESKTOP
              ================================================== */}

              {index !== process.length - 1 && (
                <div
                  className="
                    absolute
                    -right-[28px]
                    top-[70px]
                    hidden
                    h-[2px]
                    w-7
                    overflow-hidden
                    bg-chakrin-border
                    xl:block
                  "
                >

                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                    className="
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-chakrin-primary
                      to-chakrin-secondary
                    "
                  />

                </div>
              )}

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default WorkingProcess;