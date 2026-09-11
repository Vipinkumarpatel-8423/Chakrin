import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiSettings,
  FiUsers,
  FiLayers,
  FiPrinter,
  FiSliders,
  FiDroplet,
} from "react-icons/fi";

// Replace this path with your actual image path
import whyChooseImage from "../../assets/whychoosus/why choose.png";

const points = [
  {
    icon: <FiSettings />,
    text: "State of art facility with all the pre and post treatment process machinery under one roof.",
  },
  {
    icon: <FiUsers />,
    text: "One-on-one discussion about the design with the client.",
  },
  {
    icon: <FiLayers />,
    text: "Numerous colour options are available for fabrics.",
  },
  {
    icon: <FiPrinter />,
    text: "Printing is available on-demand.",
  },
  {
    icon: <FiSliders />,
    text: "Products are customizable. (depending on the order quantity)",
  },
  {
    icon: <FiDroplet />,
    text: "To ensure environment's safety, we are following zero liquid discharge norms.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-chakrin-secondary-light py-16 sm:py-20 lg:py-24 select-none">
      
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div className="grid items-center lg:grid-cols-2">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 py-2 lg:pr-10 xl:pr-16"
          >
            {/* Small Heading */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-chakrin-primary/20
                bg-white
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[2.5px]
                text-chakrin-primary
                sm:text-xs
              "
            >
              Why We choose us?
            </span>

            {/* Main Heading */}
            <h2
              className="
                mt-5
                max-w-2xl
                text-3xl
                font-bold
                leading-[1.15]
                text-chakrin-heading
                sm:text-4xl
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              Our premium quality and detailed designs are enough to impress,
              <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
                {" "}
                but if you're looking for more:
              </span>
            </h2>

            {/* Points */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="group flex items-start gap-3 sm:gap-4"
                >
                  {/* Icon Box */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-chakrin-border
                      bg-white
                      text-chakrin-primary
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:bg-chakrin-primary
                      group-hover:text-white
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <span className="text-lg sm:text-xl">
                      {point.icon}
                    </span>
                  </div>

                  {/* Text + Check */}
                  <div className="flex flex-1 items-start gap-2 pt-1">
                    <FiCheckCircle
                      className="
                        mt-1
                        shrink-0
                        text-chakrin-secondary
                        sm:text-lg
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-chakrin-text
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              mt-10
              min-h-[360px]
              overflow-hidden
              lg:mt-0
              lg:min-h-[620px]
            "
          >
            {/* Main Image */}
            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage: `url(${whyChooseImage})`,
              }}
            />

            {/* Fade Image into Left Background */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-chakrin-secondary-light
                via-chakrin-secondary-light/55
                to-transparent
              "
            />

            {/* Bottom Soft Fade */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-28
                bg-gradient-to-t
                from-chakrin-secondary-light
                to-transparent
                lg:hidden
              "
            />

            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-48
                w-48
                rounded-full
                border-[25px]
                border-chakrin-secondary/15
                sm:h-60
                sm:w-60
                sm:border-[30px]
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;