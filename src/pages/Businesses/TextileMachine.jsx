import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCogs,
  FaIndustry,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaTachometerAlt,
  FaBolt,
} from "react-icons/fa";

import textileMachineImage from "../../assets/business/machine.jpg";

const TextileMachine = () => {
  const navigate = useNavigate();

  const machineFeatures = [
    {
      icon: <FaCogs />,
      title: "Advanced Engineering",
      text: "Modern textile machinery engineered for precision, dependable operation and consistent manufacturing performance.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Production Efficiency",
      text: "Designed to support efficient production workflows, improved output and consistent processing quality.",
    },
    {
      icon: <FaTools />,
      title: "Reliable Operation",
      text: "Robust machine solutions built for dependable performance, practical maintenance and long-term industrial use.",
    },
  ];

  const benefits = [
    "High-efficiency textile production",
    "Precision-oriented machine performance",
    "Consistent processing and output quality",
    "Reliable operation for industrial applications",
    "Practical maintenance and servicing",
    "Solutions for modern textile manufacturing",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-5 md:py-7 lg:py-5">

      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-chakrin-primary/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-chakrin-secondary/10 blur-3xl sm:h-96 sm:w-96" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            BACK BUTTON
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
      text-sm
      font-semibold
      text-chakrin-heading
      shadow-sm
      transition-all
      duration-300
      hover:-translate-x-1
      hover:border-chakrin-primary
      hover:text-chakrin-primary
      hover:shadow-md
      sm:px-5
    "
  >
    <FaArrowLeft
      className="
        text-chakrin-primary
        transition-transform
        duration-300
        group-hover:-translate-x-1
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

          <span className="inline-flex items-center rounded-full bg-chakrin-secondary-light px-4 py-2 text-[11px] font-bold uppercase tracking-[3px] text-chakrin-primary sm:text-xs">
            Textile Machinery
          </span>


          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-chakrin-heading sm:text-4xl md:text-5xl lg:text-6xl">
            Advanced Machinery for{" "}
            <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
              Modern Textile Production
            </span>
          </h1>


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
            Reliable textile machinery solutions designed to support
            efficient production, precision processing and consistent
            performance across modern textile manufacturing environments.
          </p>

        </motion.div>


        {/* =========================
            MAIN MACHINE SHOWCASE
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* =========================
              IMAGE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >

            {/* Decorative Frame */}

            <div
              className="
                absolute
                -bottom-3
                -left-3
                h-full
                w-full
                rounded-[1.75rem]
                border-2
                border-chakrin-border
                sm:-bottom-4
                sm:-left-4
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
                src={textileMachineImage}
                alt="Advanced Textile Machinery"
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

              <div className="absolute inset-0 bg-gradient-to-t from-chakrin-heading/70 via-chakrin-heading/10 to-transparent" />


              {/* Machine Badge */}

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
                    Industry
                  </p>

                  <p className="text-xs font-semibold sm:text-sm">
                    Textile Machinery
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
                  sm:min-w-[270px]
                  sm:p-5
                "
              >

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-chakrin-primary sm:text-xs">
                  Built For Industrial Performance
                </p>

                <p className="mt-1 text-sm font-bold text-chakrin-heading sm:text-base">
                  Precision • Efficiency • Reliability
                </p>

              </div>

            </div>

          </motion.div>


          {/* =========================
              CONTENT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >

            {/* Small Label */}

            <span
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
              <FaBolt />
              Advanced Textile Machinery
            </span>


            {/* Heading */}

            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-chakrin-heading sm:text-3xl lg:text-4xl">
              Machinery Designed For
              <span className="block">
                <span className="text-chakrin-primary">
                  Efficient Textile Production
                </span>
              </span>
            </h2>


            {/* Description */}

            <p className="mt-5 text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
              Modern textile manufacturing demands machinery that can deliver
              precision, productivity and dependable performance. Our textile
              machinery solutions are designed to support manufacturers with
              efficient production processes and consistent operational
              results.
            </p>

            <p className="mt-4 text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
              From production efficiency and precise textile processing to
              reliable day-to-day operation, our solutions are built to meet
              the evolving requirements of contemporary textile manufacturing.
            </p>


            {/* =========================
                BENEFITS
            ========================== */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle className="mt-1 shrink-0 text-chakrin-primary" />

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
                Enquire About Machinery

                <FaArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </motion.div>

        </div>


        {/* =========================
            FEATURE CARDS
        ========================== */}

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

          {machineFeatures.map((feature, index) => (
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

              {/* Icon */}

              <div
                className="
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
                {feature.icon}
              </div>


              {/* Title */}

              <h3 className="mt-5 text-lg font-bold text-chakrin-heading">
                {feature.title}
              </h3>


              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-chakrin-text">
                {feature.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TextileMachine;