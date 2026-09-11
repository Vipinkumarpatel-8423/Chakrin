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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-chakrin-secondary-light py-10 sm:py-13 lg:py-15 select-none">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >

          <span className="inline-block rounded-full border border-chakrin-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-chakrin-primary sm:tracking-[4px]">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-chakrin-heading sm:text-4xl lg:text-5xl">
            Complete Textile
            <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
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
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >

          {services.map((service) => (

            <motion.div
              key={service.id}
              variants={card}
              whileHover={{ y: -10 }}
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
                transition-all
                duration-500
                hover:border-chakrin-secondary
                hover:shadow-[0_20px_45px_rgba(166,61,130,0.12)]
                sm:p-8
              "
            >

              {/* Top Gradient Line */}

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


              {/* Number */}

              <span
                className="
                  absolute
                  right-6
                  top-4
                  text-5xl
                  font-extrabold
                  text-chakrin-secondary-light
                  transition-colors
                  duration-500
                  group-hover:text-chakrin-border
                "
              >
                {service.id}
              </span>


              {/* Icon */}

              <div
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
                  transition-all
                  duration-500
                  group-hover:bg-chakrin-primary
                  group-hover:text-white
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>


              {/* Content */}

              <h3
                className="
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


              {/* Accent Line */}

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


              {/* Description */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-chakrin-text
                  sm:text-base
                "
              >
                {service.desc}
              </p>


              {/* Bottom Accent */}

              <div
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
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />

            </motion.div>

          ))}

        </motion.div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
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

          <p className="text-base font-medium leading-7 text-chakrin-heading sm:text-lg">
            Your ideas, our expertise —
            <span className="text-chakrin-primary">
              {" "}creating exceptional textile solutions.
            </span>
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default ServicesSection;