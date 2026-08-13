// DigitalPrinting.jsx

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaPrint,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";

import digitalPrintingImage from "../../assets/business/digital-printing.jpg";

const DigitalPrinting = () => {
  const features = [
    {
      icon: <FaPrint />,
      title: "Advanced Printing",
      text: "High-performance digital printing technology for detailed and consistent textile output.",
    },
    {
      icon: <FaPalette />,
      title: "Rich Colours",
      text: "Sharp details, vibrant colours and excellent print clarity across a wide range of fabrics.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Flexible Production",
      text: "Ideal for samples, short runs, customized designs and large-scale textile production.",
    },
  ];

  const benefits = [
    "High-resolution textile printing",
    "Excellent colour accuracy",
    "Custom designs and patterns",
    "Suitable for short & large production runs",
    "Consistent print quality",
    "Advanced digital printing solutions",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">

      {/* Decorative Background */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          {/* <span className="text-xs font-semibold uppercase tracking-[4px] text-[#F04F5A] sm:text-sm">
            Our Business
          </span> */}

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Digital{" "}
            <span className="bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
              Printing
            </span>{" "}
            Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Transform your textile designs into high-quality prints with
            advanced digital printing technology built for precision,
            flexibility and exceptional results.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
              Premium Textile Printing
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Bring Your Designs
              <span className="block">
                To Life With{" "}
                <span className="text-[#F04F5A]">
                  Digital Precision
                </span>
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Our digital printing solutions are designed to deliver
              exceptional quality, vibrant colours and precise detailing.
              From customized designs to production-ready textile printing,
              we help businesses achieve consistent and professional results.
            </p>

            {/* Benefits */}

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
                  <FaCheckCircle className="mt-1 shrink-0 text-[#F04F5A]" />

                  <span className="text-sm leading-6 text-gray-600">
                    {benefit}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:px-8"
              >
                Discuss Your Requirement

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >

            <div className="relative">

              {/* Image Accent */}

              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border-2 border-orange-200 sm:-right-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl">

                <img
                  src={digitalPrintingImage}
                  alt="Digital Textile Printing"
                  className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px] lg:h-[520px]"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating Label */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[250px]">

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F04F5A]">
                    Digital Textile Technology
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                    Precision • Quality • Innovation
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

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
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-7"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F04F5A] to-[#FFB300] text-lg text-white shadow-md">
                {feature.icon}
              </div>

              <h4 className="mt-5 text-lg font-bold text-gray-900">
                {feature.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
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