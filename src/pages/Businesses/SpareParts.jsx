import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaTint,
  FaPrint,
  FaLayerGroup,
  FaIndustry,
  FaPalette,
} from "react-icons/fa";

import sparePartsImage from "../../assets/business/paper.jpg";

const SpareParts = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <FaTint />,
      title: "Ready For Dyeing",
      text: "Prepared textile solutions designed to support consistent dye absorption, colour development and efficient downstream processing.",
    },
    {
      icon: <FaPrint />,
      title: "Ready For Printing",
      text: "Print-ready textile surfaces developed to provide reliable colour reproduction, sharp detailing and consistent print performance.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Consistent Quality",
      text: "Textile preparation focused on uniformity, dependable processing and consistent results across different production requirements.",
    },
  ];

  const benefits = [
    "Textiles prepared for dyeing applications",
    "Print-ready fabric solutions",
    "Consistent fabric surface and quality",
    "Improved colour absorption and reproduction",
    "Suitable for customized textile requirements",
    "Efficient preparation for downstream processing",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-5 md:py-5 lg:py-5">

      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}

      <div className="pointer-events-none absolute -right-40 -top-32 h-72 w-72 rounded-full bg-chakrin-primary/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-chakrin-secondary/10 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            BACK TO BUSINESSES
        ========================== */}

        <div className="mb-8 sm:mb-10">

          <button
            onClick={() => navigate(-1)}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-chakrin-border
              bg-white
              px-4
              py-2.5
              text-xs
              font-semibold
              text-chakrin-heading
              shadow-sm
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-chakrin-primary
              hover:bg-chakrin-primary
              hover:text-white
              hover:shadow-lg
              sm:px-5
              sm:py-3
              sm:text-sm
            "
          >

            <FaArrowLeft
              className="
                text-chakrin-primary
                transition-transform
                duration-300
                group-hover:-translate-x-1
                group-hover:text-white
              "
            />

            <span>Back to Businesses</span>

          </button>

        </div>


        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-20"
        >

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-chakrin-secondary-light
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[2.5px]
              text-chakrin-primary
              sm:text-xs
              sm:tracking-[3px]
            "
          >
            Textile Processing Solutions
          </span>


          <h1
            className="
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-chakrin-heading
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Ready For Dyeing{" "}
            <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
              & Ready For Printing
            </span>
          </h1>


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
            Quality-focused textile solutions prepared for efficient dyeing
            and printing processes, helping manufacturers achieve consistent
            colour development, print quality and reliable production
            performance.
          </p>

        </motion.div>


        {/* =========================
            MAIN SHOWCASE
        ========================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-20
          "
        >

          {/* =========================
              IMAGE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >

            {/* Decorative Frame */}

            <div
              className="
                absolute
                -left-3
                -top-3
                h-full
                w-full
                rounded-[1.75rem]
                border-2
                border-chakrin-border
                sm:-left-5
                sm:-top-5
                sm:rounded-[2rem]
              "
            />


            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                bg-chakrin-secondary-light
                shadow-[0_20px_60px_rgba(166,61,130,0.14)]
                sm:rounded-[2rem]
              "
            >

              <img
                src={sparePartsImage}
                alt="Ready For Dyeing and Ready For Printing Textile Solutions"
                className="
                  h-[280px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                  sm:h-[380px]
                  md:h-[450px]
                  lg:h-[500px]
                  xl:h-[540px]
                "
              />


              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-chakrin-heading/70
                  via-chakrin-heading/10
                  to-transparent
                "
              />


              {/* Floating Industry Badge */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/20
                  bg-chakrin-heading/60
                  px-3
                  py-2.5
                  text-white
                  backdrop-blur-md
                  sm:left-6
                  sm:top-6
                  sm:px-4
                  sm:py-3
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-chakrin-primary
                    to-chakrin-secondary
                    text-sm
                    text-white
                    shadow-lg
                  "
                >
                  <FaIndustry />
                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[2px] text-white/70 sm:text-[10px]">
                    Textile Processing
                  </p>

                  <p className="text-xs font-semibold sm:text-sm">
                    Dyeing & Printing
                  </p>

                </div>

              </div>


              {/* Bottom Info */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/90
                  p-4
                  shadow-xl
                  backdrop-blur-md
                  sm:bottom-6
                  sm:left-6
                  sm:right-auto
                  sm:min-w-[275px]
                  sm:p-5
                "
              >

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-chakrin-primary sm:text-xs">
                  Prepared For Performance
                </p>

                <p className="mt-1 text-sm font-bold text-chakrin-heading sm:text-base">
                  Quality • Consistency • Efficiency
                </p>

              </div>

            </div>

          </motion.div>


          {/* =========================
              RIGHT CONTENT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >

            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-chakrin-border
                bg-chakrin-secondary-light
                px-4
                py-2
                text-xs
                font-semibold
                text-chakrin-primary
                sm:text-sm
              "
            >

              <FaPalette />

              Ready For Dyeing & Printing

            </div>


            {/* Heading */}

            <h2
              className="
                mt-5
                text-2xl
                font-extrabold
                leading-tight
                text-chakrin-heading
                sm:text-3xl
                lg:text-4xl
              "
            >
              Prepared For Better
              <span className="block">
                <span className="text-chakrin-primary">
                  Colour & Print Performance
                </span>
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-chakrin-text
                sm:text-base
                sm:leading-8
              "
            >
              Our Ready For Dyeing and Ready For Printing solutions are
              developed to support textile manufacturers with fabrics and
              textile materials prepared for efficient downstream processing.
              The focus is on consistency, surface quality and dependable
              performance during dyeing and printing applications.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-chakrin-text
                sm:text-base
                sm:leading-8
              "
            >
              By preparing textiles appropriately for their intended process,
              manufacturers can achieve more consistent colour development,
              cleaner print definition and improved production efficiency
              across different textile applications.
            </p>


            {/* =========================
                BENEFITS
            ========================== */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle
                    className="
                      mt-1
                      shrink-0
                      text-chakrin-primary
                    "
                  />

                  <span className="text-sm leading-6 text-chakrin-text">
                    {benefit}
                  </span>

                </motion.div>
              ))}

            </div>


            {/* =========================
                CTA
            ========================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-chakrin-primary/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-chakrin-primary/25
                  sm:px-8
                "
              >
                Discuss Your Requirement

                <FaArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </motion.div>

        </div>


        {/* =========================
            FEATURE CARDS
        ========================== */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:mt-16
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-chakrin-border
                bg-chakrin-secondary-light
                p-5
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white
                hover:shadow-[0_20px_45px_rgba(166,61,130,0.10)]
                sm:p-7
              "
            >

              {/* Card Number */}

              <span
                className="
                  absolute
                  right-5
                  top-3
                  text-5xl
                  font-black
                  text-chakrin-primary/5
                  transition-colors
                  duration-300
                  group-hover:text-chakrin-primary/10
                "
              >
                0{index + 1}
              </span>


              {/* Icon */}

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-chakrin-primary
                  to-chakrin-secondary
                  text-lg
                  text-white
                  shadow-md
                  shadow-chakrin-primary/20
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>


              {/* Title */}

              <h3
                className="
                  relative
                  mt-5
                  text-lg
                  font-bold
                  text-chakrin-heading
                "
              >
                {item.title}
              </h3>


              {/* Description */}

              <p
                className="
                  relative
                  mt-2
                  text-sm
                  leading-6
                  text-chakrin-text
                "
              >
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SpareParts;