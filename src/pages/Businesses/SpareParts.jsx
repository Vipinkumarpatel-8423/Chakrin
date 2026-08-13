import { motion } from "framer-motion";
import {
  FaTools,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
  FaWrench,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

import sparePartsImage from "../../assets/business/spare-parts.jpg";

const SpareParts = () => {
  const highlights = [
    {
      icon: <FaCogs />,
      title: "Quality Components",
      text: "Reliable and carefully selected components designed for dependable textile machinery performance.",
    },
    {
      icon: <FaWrench />,
      title: "Easy Replacement",
      text: "Precisely compatible parts that make maintenance and replacement quicker and more convenient.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliable Performance",
      text: "Durable components built to support smooth and consistent machine operation.",
    },
  ];

  const benefits = [
    "Wide range of textile machine spare parts",
    "Quality-tested components",
    "Parts for regular maintenance",
    "Reliable machine compatibility",
    "Reduced machine downtime",
    "Technical assistance and support",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[-150px] h-[400px] w-[400px] rounded-full bg-red-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          {/* <span className="text-xs font-semibold uppercase tracking-[4px] text-[#F04F5A] sm:text-sm">
            Spare Parts
          </span> */}

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            The Right Parts For
            <span className="block bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
              Reliable Performance
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Keep your textile machinery running smoothly with dependable
            spare parts designed for maintenance, replacement and long-term
            machine performance.
          </p>
        </motion.div>

        {/* Main Showcase */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Decorative Shape */}

            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-gradient-to-br from-[#F04F5A]/20 to-[#FFB300]/20 sm:-left-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src={sparePartsImage}
                alt="Textile Machine Spare Parts"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Floating Box */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[260px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F04F5A] to-[#FFB300] text-white">
                    <FaBoxOpen />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F04F5A]">
                      Parts & Components
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                      Built For Your Machines
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
              <FaTools />
              Complete Spare Parts Support
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Minimize Downtime.
              <span className="block">
                Maximize{" "}
                <span className="text-[#F04F5A]">
                  Productivity.
                </span>
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              The right spare part at the right time can make a major
              difference to your production. We help textile businesses
              maintain their machines with dependable components and
              practical support.
            </p>

            {/* Benefits */}

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
                  <FaCheckCircle className="mt-1 shrink-0 text-[#F04F5A]" />

                  <span className="text-sm leading-6 text-gray-600">
                    {benefit}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:px-8"
              >
                Request Spare Parts

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

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
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-[#F8F9FB] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-7"
            >

              {/* Card Number */}

              <span className="absolute right-5 top-4 text-5xl font-black text-gray-100 transition-colors duration-300 group-hover:text-orange-50">
                0{index + 1}
              </span>

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F04F5A] to-[#FFB300] text-lg text-white shadow-md">
                {item.icon}
              </div>

              <h4 className="relative mt-5 text-lg font-bold text-gray-900">
                {item.title}
              </h4>

              <p className="relative mt-2 text-sm leading-6 text-gray-500">
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