import { motion } from "framer-motion";

import {
  FaPrint,
  FaPalette,
  FaBoxes,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaPrint />,
    title: "Digital Printing",
    desc: "Bringing you a faster and more accurate next-generation printing experience with high-quality digital textile printing.",
  },
  {
    id: "02",
    icon: <FaPalette />,
    title: "Textile & Graphic Design",
    desc: "Our expert designers create captivating artwork and patterns that bring your creative ideas and textile collections to life.",
  },
  {
    id: "03",
    icon: <FaBoxes />,
    title: "Product Development & Production",
    desc: "Crafting innovative products with exceptional craftsmanship and efficient production to meet your specific requirements.",
  },
];


/* ================= CONTAINER ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};


/* ================= CARD ANIMATIONS ================= */

const leftCard = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const centerCard = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.12,
    },
  },
};


const rightCard = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.24,
    },
  },
};


/* ================= CARD VARIANT SELECTOR ================= */

const getCardVariant = (index) => {
  if (index === 0) return leftCard;
  if (index === 1) return centerCard;
  return rightCard;
};


const ServicesSection = () => {
  return (
    <section
      className="
        group/section
        relative
        isolate
        overflow-hidden
        bg-chakrin-secondary-light
        py-10
        sm:py-13
        lg:py-15
        select-none
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND ANIMATION */}
      {/* ================================================= */}

      {/* Main Pink Glow */}

      <motion.div
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-chakrin-primary/10
          blur-3xl
        "
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-chakrin-secondary/15
          blur-3xl
        "
      />

      {/* Center Soft Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
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
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-chakrin-primary/5
          blur-3xl
        "
      />

      {/* Floating Ring - Left */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[30%]
          h-20
          w-20
          rounded-full
          border
          border-chakrin-primary/10
          sm:h-28
          sm:w-28
        "
      />

      {/* Floating Ring - Right */}

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[20%]
          h-24
          w-24
          rounded-full
          border
          border-chakrin-secondary/20
          sm:h-32
          sm:w-32
        "
      />


      {/* Decorative Dots */}

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[18%]
          h-2
          w-2
          rounded-full
          bg-chakrin-primary/40
        "
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[20%]
          bottom-[20%]
          h-2
          w-2
          rounded-full
          bg-chakrin-secondary/50
        "
      />


      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            sm:mb-16
          "
        >

          <span
            className="
              inline-block
              rounded-full
              border
              border-chakrin-border
              bg-white
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-chakrin-primary
              shadow-sm
              sm:tracking-[4px]
            "
          >
            Our Services
          </span>


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
            Complete Textile

            <span
              className="
                bg-gradient-to-r
                from-chakrin-primary
                to-chakrin-secondary
                bg-clip-text
                text-transparent
              "
            >
              {" "}Solutions
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-chakrin-text
              sm:text-base
              sm:leading-8
            "
          >
            From digital textile printing to creative design and product
            development, we provide innovative solutions that bring your
            textile ideas to life.
          </p>

        </motion.div>


        {/* ================= SERVICES ================= */}

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
            lg:grid-cols-3
            lg:gap-8
          "
        >

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              variants={getCardVariant(index)}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-chakrin-border
                bg-white
                p-7
                shadow-[0_10px_35px_rgba(166,61,130,0.06)]
                transition-shadow
                duration-500
                hover:border-chakrin-secondary
                hover:shadow-[0_20px_45px_rgba(166,61,130,0.15)]
                sm:p-8
              "
            >

              {/* ================= CARD GLOW ================= */}

              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 1.2,
                }}
                className="
                  pointer-events-none
                  absolute
                  -top-20
                  left-0
                  h-20
                  w-1/2
                  rotate-[-25deg]
                  bg-gradient-to-r
                  from-transparent
                  via-chakrin-secondary/20
                  to-transparent
                  blur-xl
                "
              />


              {/* ================= TOP LINE ================= */}

              <div
                className="
                  absolute
                  left-8
                  right-8
                  top-0
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  opacity-70
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* ================= NUMBER ================= */}

              <span
                className="
                  absolute
                  right-6
                  top-4
                  text-5xl
                  font-extrabold
                  text-chakrin-secondary-light
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:text-chakrin-border
                "
              >
                {service.id}
              </span>


              {/* ================= ICON ================= */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-chakrin-secondary-light
                  text-2xl
                  text-chakrin-primary
                  shadow-sm
                  transition-colors
                  duration-500
                  group-hover:bg-chakrin-primary
                  group-hover:text-white
                "
              >
                {service.icon}

                {/* Icon Glow */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    bg-chakrin-primary/20
                    opacity-0
                    blur-md
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </motion.div>


              {/* ================= CONTENT ================= */}

              <h3
                className="
                  relative
                  mt-7
                  text-xl
                  font-bold
                  text-chakrin-heading
                  transition-colors
                  duration-300
                  group-hover:text-chakrin-primary
                  sm:text-2xl
                "
              >
                {service.title}
              </h3>


              {/* ================= ACCENT ================= */}

              <div
                className="
                  mt-5
                  h-[2px]
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  relative
                  mt-5
                  text-sm
                  leading-7
                  text-chakrin-text
                  sm:text-base
                "
              >
                {service.desc}
              </p>


              {/* ================= BOTTOM GLOW ================= */}

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8,
                }}
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-32
                  w-32
                  rounded-full
                  bg-chakrin-secondary/10
                  blur-2xl
                "
              />

            </motion.div>

          ))}

        </motion.div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mx-auto
            mt-12
            max-w-4xl
            rounded-3xl
            border
            border-chakrin-border
            bg-white
            px-6
            py-7
            text-center
            shadow-sm
            sm:mt-16
            sm:px-10
            sm:py-8
          "
        >

          <p
            className="
              text-base
              font-medium
              leading-7
              text-chakrin-heading
              sm:text-lg
            "
          >
            Your ideas, our expertise —

            <span className="text-chakrin-primary">
              {" "}Creating Exceptional Textile Solutions.
            </span>
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default ServicesSection;