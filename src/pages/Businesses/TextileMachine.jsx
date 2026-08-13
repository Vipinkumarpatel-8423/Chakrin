import { motion } from "framer-motion";
import {
  FaCogs,
  FaIndustry,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaTachometerAlt,
  FaBolt,
} from "react-icons/fa";

import textileMachineImage from "../../assets/business/textile-machine.jpg";

const TextileMachine = () => {
  const machineFeatures = [
    {
      icon: <FaCogs />,
      title: "Advanced Technology",
      text: "Modern textile machinery designed for precision, efficiency and reliable performance.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "High Performance",
      text: "Optimized machines that help improve production speed while maintaining consistent quality.",
    },
    {
      icon: <FaTools />,
      title: "Easy Maintenance",
      text: "Reliable machine construction with practical maintenance and service support.",
    },
  ];

  const benefits = [
    "High production efficiency",
    "Precision textile processing",
    "Reliable machine performance",
    "Energy-efficient operation",
    "Easy maintenance and servicing",
    "Suitable for modern textile production",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F9FB] py-6 sm:py-8 lg:py-10">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#F04F5A] sm:text-sm">
            Textile Machinery
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Powerful Machines.
            <span className="block bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
              Smarter Production.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore advanced textile machinery engineered to improve
            production efficiency, precision and overall manufacturing
            performance.
          </p>
        </motion.div>

        {/* Main Machine Showcase */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Decorative Frame */}

            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-orange-300/70 sm:-bottom-5 sm:-left-5" />

            <div className="relative overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl">

              <img
                src={textileMachineImage}
                alt="Advanced Textile Machine"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px] lg:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Machine Badge */}

              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white backdrop-blur-md sm:left-7 sm:top-7">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300]">
                  <FaIndustry />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-300">
                    Industry
                  </p>

                  <p className="text-sm font-semibold">
                    Textile Machinery
                  </p>
                </div>

              </div>

              {/* Bottom Info */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[270px]">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#F04F5A]">
                  Built For Performance
                </p>

                <p className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                  Precision • Efficiency • Reliability
                </p>

              </div>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-orange-600 shadow-sm sm:text-sm">
              <FaBolt />
              Next-Generation Textile Machinery
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Machinery That Keeps
              <span className="block">
                Your Production{" "}
                <span className="text-[#F04F5A]">
                  Moving Forward
                </span>
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              We provide dependable textile machinery solutions for modern
              manufacturing environments. Our focus is on combining advanced
              technology with practical performance to help textile
              businesses achieve better productivity and consistent output.
            </p>

            {/* Benefits */}

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
                Enquire About Machines

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

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
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
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

export default TextileMachine;