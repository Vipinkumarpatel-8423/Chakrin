import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiCheckCircle,
  FiSettings,
  FiUsers,
  FiLayers,
  FiPrinter,
  // FiSliders,
  // FiDroplet,
  FiX,
  // FiArrowRight,
} from "react-icons/fi";

import whyChooseImage from "../../assets/whychoosus/why choose.png";


/* =========================================================
   WHY CHOOSE US POINTS
========================================================= */

const points = [
  {
    icon: <FiSettings />,
    title: "State-of-Art Facility",
    text: "State of art facility with all the pre and post treatment process machinery under one roof.",
    details:
      "Our state-of-the-art facility brings essential pre-treatment, printing and post-treatment processes together under one roof. This integrated setup helps us maintain better process control, consistent quality and efficient production throughout the textile printing workflow.",
  },

  {
    icon: <FiUsers />,
    title: "One-on-One Design Discussion",
    text: "One-on-one discussion about the design with the client.",
    details:
      "We believe every textile project has unique requirements. Our team works closely with clients through one-on-one design discussions to understand their vision, fabric requirements, colour preferences and final application before production begins.",
  },

  {
    icon: <FiLayers />,
    title: "Numerous Colour Options",
    text: "Numerous colour options are available for fabrics.",
    details:
      "Our digital textile printing solutions provide extensive colour possibilities for different fabric applications. This allows clients to explore a wide range of shades, tones and creative combinations while maintaining detailed and visually appealing prints.",
  },

  {
    icon: <FiPrinter />,
    title: "On-Demand Printing",
    text: "Printing is available on-demand.",
    details:
      "Our on-demand printing capability provides greater flexibility for sampling, customized designs, short production runs and specific textile requirements. It helps reduce unnecessary production and allows designs to move efficiently from concept to finished print.",
  },

  // {
  //   icon: <FiSliders />,
  //   title: "Customizable Products",
  //   text: "Products are customizable. (depending on the order quantity)",
  //   details:
  //     "We offer customizable textile solutions based on project requirements and order quantities. Clients can discuss specific designs, patterns, colour requirements and product specifications with our team to develop solutions aligned with their needs.",
  // },

  // {
  //   icon: <FiDroplet />,
  //   title: "Zero Liquid Discharge",
  //   text: "To ensure environment's safety, we are following zero liquid discharge norms.",
  //   details:
  //     "Environmental responsibility is an important part of our operational approach. We follow zero liquid discharge norms to help manage water usage and wastewater responsibly while supporting more sustainable textile processing practices.",
  // },
];


const WhyChooseUs = () => {

  /* =========================================================
     MODAL STATE
  ========================================================= */

  const [selectedPoint, setSelectedPoint] = useState(null);


  /* =========================================================
     BODY SCROLL LOCK + ESC KEY
  ========================================================= */

  useEffect(() => {

    if (selectedPoint) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPoint(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };

  }, [selectedPoint]);


  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-chakrin-secondary-light
          py-16
          sm:py-20
          lg:py-24
          select-none
        "
      >

        {/* =====================================================
            BACKGROUND DECORATIONS
        ====================================================== */}

        <div
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

        <div
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


        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-center lg:grid-cols-2">


            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                z-20
                py-2
                lg:pr-10
                xl:pr-16
              "
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
                  shadow-sm
                  sm:text-xs
                "
              >
                Why choose us?
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
                Our premium quality and detailed designs are enough to
                impress,

                <span
                  className="
                    bg-gradient-to-r
                    from-chakrin-primary
                    to-chakrin-secondary
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  but if you're looking for more:
                </span>
              </h2>


              {/* =====================================================
                  CLICKABLE POINTS
              ====================================================== */}

              <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-1">

                {points.map((point, index) => (

                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => setSelectedPoint(point)}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    className="
                      group
                      flex
                      w-full
                      cursor-pointer
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-transparent
                      p-2
                      text-left
                      transition-all
                      duration-300
                      hover:border-chakrin-border
                      hover:bg-white/70
                      sm:gap-4
                      sm:p-3
                    "
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

                    <div className="flex min-w-0 flex-1 items-start gap-2 pt-1">

                      <FiCheckCircle
                        className="
                          mt-1
                          shrink-0
                          text-chakrin-secondary
                          sm:text-lg
                        "
                      />

                      <div className="min-w-0">

                        <p
                          className="
                            text-sm
                            font-semibold
                            leading-6
                            text-chakrin-heading
                            transition-colors
                            duration-300
                            group-hover:text-chakrin-primary
                            sm:text-base
                          "
                        >
                          {point.text}
                        </p>

                        {/* <span
                          className="
                            mt-1
                            inline-flex
                            items-center
                            gap-1
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[1.5px]
                            text-chakrin-primary
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                            sm:text-[11px]
                          "
                        >
                          View Details
                          <FiArrowRight />
                        </span> */}

                      </div>

                    </div>

                  </motion.button>

                ))}

              </div>

            </motion.div>


            {/* =====================================================
                RIGHT IMAGE
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
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


      {/* =========================================================
          DETAIL MODAL
      ========================================================= */}

      <AnimatePresence>

        {selectedPoint && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => setSelectedPoint(null)}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-chakrin-heading/70
              p-4
              backdrop-blur-sm
              sm:p-6
            "
          >

            {/* =================================================
                MODAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-xl
                overflow-hidden
                rounded-3xl
                border
                border-chakrin-border
                bg-white
                shadow-2xl
              "
            >

              {/* Top Gradient */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                "
              />


              {/* Close Button */}

              <button
                type="button"
                onClick={() => setSelectedPoint(null)}
                aria-label="Close details"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-chakrin-border
                  bg-chakrin-secondary-light
                  text-chakrin-heading
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-chakrin-primary
                  hover:text-white
                  sm:right-5
                  sm:top-5
                "
              >
                <FiX size={20} />
              </button>


              {/* Modal Content */}

              <div className="p-6 pt-10 sm:p-8 sm:pt-12 md:p-10 md:pt-12">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-chakrin-secondary-light
                    text-2xl
                    text-chakrin-primary
                    shadow-sm
                    sm:h-16
                    sm:w-16
                    sm:text-3xl
                  "
                >
                  {selectedPoint.icon}
                </div>


                {/* Title */}

                <h3
                  className="
                    mt-5
                    pr-10
                    text-2xl
                    font-bold
                    leading-tight
                    text-chakrin-heading
                    sm:text-3xl
                  "
                >
                  {selectedPoint.title}
                </h3>


                {/* Accent */}

                <div
                  className="
                    mt-4
                    h-[3px]
                    w-16
                    rounded-full
                    bg-gradient-to-r
                    from-chakrin-primary
                    to-chakrin-secondary
                  "
                />


                {/* Description */}

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-chakrin-text
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {selectedPoint.details}
                </p>


                {/* Bottom Note */}

                <div
                  className="
                    mt-7
                    rounded-2xl
                    border
                    border-chakrin-border
                    bg-chakrin-secondary-light
                    px-4
                    py-3
                    text-xs
                    font-medium
                    leading-5
                    text-chakrin-text
                    sm:px-5
                    sm:py-4
                    sm:text-sm
                  "
                >
                  Chakrin Digital Textiles — Quality, Precision & Innovation.
                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default WhyChooseUs;