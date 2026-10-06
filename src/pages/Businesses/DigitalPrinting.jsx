import { motion } from "framer-motion";
import { Link ,useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaPrint,
  FaPalette,
  FaLayerGroup,
  FaArrowLeft,
} from "react-icons/fa";

import digitalPrintingImage from "../../assets/business/fabric-new.jpg";

const DigitalPrinting = () => {
   const navigate = useNavigate();
  const features = [
    {
      icon: <FaPrint />,
      title: "High-Precision Printing",
      text: "Advanced digital textile printing solutions engineered for sharp details, accurate reproduction and consistent production quality.",
    },
    {
      icon: <FaPalette />,
      title: "Colour Accuracy",
      text: "Achieve rich, vibrant and consistent colours with precise digital printing technology across diverse textile applications.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Flexible Production",
      text: "Suitable for sampling, customized designs, short runs and scalable production with greater flexibility and efficiency.",
    },
  ];

  const benefits = [
    "High-resolution digital textile printing",
    "Consistent colour reproduction",
    "Sharp details and fine pattern definition",
    "Suitable for customized textile designs",
    "Efficient short-run and bulk production",
    "Reduced setup and production flexibility",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-16 lg:py-5">

      {/* Background Decorative Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-chakrin-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Back Button */}

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
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-chakrin-secondary-light px-4 py-2 text-[11px] font-bold uppercase tracking-[3px] text-chakrin-primary sm:text-xs">
            Digital Textile Printing
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-chakrin-heading sm:text-4xl md:text-5xl lg:text-6xl">
            Advanced{" "}
            <span className="bg-gradient-to-r from-chakrin-primary to-chakrin-secondary bg-clip-text text-transparent">
              Digital Textile
            </span>{" "}
            Printing Solutions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
            High-performance digital textile printing solutions designed to
            deliver precise colours, sharp details and consistent print
            quality for modern textile manufacturing and customized
            applications.
          </p>
        </motion.div>


        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            {/* Small Label */}

            <span className="inline-flex items-center rounded-full bg-chakrin-secondary-light px-4 py-2 text-xs font-semibold text-chakrin-primary sm:text-sm">
              Precision • Colour • Performance
            </span>


            {/* Heading */}

            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-chakrin-heading sm:text-3xl lg:text-4xl">
              Transform Textile Designs Into
              <span className="block">
                <span className="text-chakrin-primary">
                  High-Quality Prints
                </span>
              </span>
            </h2>


            {/* Description */}

            <p className="mt-5 text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
              Digital textile printing enables manufacturers and textile
              businesses to bring intricate designs, vibrant colours and
              customized patterns directly onto fabric with exceptional
              precision. Our solutions are designed to support modern textile
              production with flexibility, consistency and efficient workflow.
            </p>

            <p className="mt-4 text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
              From sampling and customized collections to production-scale
              requirements, digital printing provides greater design freedom
              while maintaining reliable print quality across every run.
            </p>


            {/* =========================
                BENEFITS
            ========================== */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
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
                Discuss Your Requirement

                <FaArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </motion.div>


          {/* =========================
              RIGHT IMAGE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >

            <div className="relative mx-auto w-full max-w-xl">

              {/* Decorative Border */}

              <div
                className="
                  absolute
                  -right-2
                  -top-2
                  h-full
                  w-full
                  rounded-[2rem]
                  border-2
                  border-chakrin-border
                  sm:-right-4
                  sm:-top-4
                "
              />


              {/* Image Wrapper */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-chakrin-secondary-light
                  shadow-[0_20px_60px_rgba(166,61,130,0.14)]
                "
              >

                <img
                  src={digitalPrintingImage}
                  alt="Digital Textile Printing"
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
                    lg:h-[540px]
                  "
                />


                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-chakrin-heading/60 via-transparent to-transparent" />


                {/* Floating Label */}

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
                    Digital Textile Technology
                  </p>

                  <p className="mt-1 text-sm font-bold text-chakrin-heading sm:text-base">
                    Precision • Quality • Innovation
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================
            FEATURE CARDS
        ========================== */}

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

          {features.map((feature, index) => (
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
                p-6
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


              {/* Text */}

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

export default DigitalPrinting;