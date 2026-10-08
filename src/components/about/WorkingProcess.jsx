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
          LIGHT BACKGROUND ANIMATION
      ====================================================== */}

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
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

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
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

      {/* Small Floating Dots */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
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
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.5,
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
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
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
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
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

          {/* Accent */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "70px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
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

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            sm:gap-6
            xl:grid-cols-4
            xl:gap-7
          "
        >
          {process.map((step, index) => (
            <motion.div
              key={step.id}
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
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-chakrin-border
                bg-white
                p-6
                shadow-[0_8px_25px_rgba(166,61,130,0.06)]
                transition-all
                duration-300
                hover:border-chakrin-primary/40
                hover:shadow-[0_18px_40px_rgba(166,61,130,0.13)]
                sm:p-7
              "
            >
              {/* =================================================
                  TOP ACCENT
              ================================================== */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-0
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  opacity-60
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  NUMBER
              ================================================== */}

              <span
                className="
                  absolute
                  right-5
                  top-4
                  text-5xl
                  font-extrabold
                  text-chakrin-secondary-light
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:text-chakrin-border
                  sm:right-6
                  sm:top-5
                "
              >
                {step.id}
              </span>

              {/* =================================================
                  ICON
              ================================================== */}

              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
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
                  duration-200
                  group-hover:text-chakrin-primary
                  sm:text-2xl
                "
              >
                {step.title}
              </h3>

              {/* =================================================
                  LINE
              ================================================== */}

              <div
                className="
                  mt-5
                  h-[3px]
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  transition-all
                  duration-300
                  group-hover:w-full
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
                  SOFT CARD GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -right-12
                  h-24
                  w-24
                  rounded-full
                  bg-chakrin-secondary/10
                  blur-2xl
                  transition-transform
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
                    -right-7
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
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
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
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;