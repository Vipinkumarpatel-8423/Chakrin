import { motion } from "framer-motion";
import {
  FaPalette,
  FaPrint,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

const process = [
  {
    id: "01",
    icon: <FaPalette />,
    title: "Design & Consultation",
    desc: "We understand your requirements, fabric type, artwork and provide the best digital textile printing solution.",
  },
  {
    id: "02",
    icon: <FaPrint />,
    title: "Precision Printing",
    desc: "Advanced digital textile printing machines ensure vibrant colors, sharp details and premium quality output.",
  },
  {
    id: "03",
    icon: <FaCheckCircle />,
    title: "Quality Inspection",
    desc: "Every fabric passes through strict quality checks before packaging to maintain international standards.",
  },
  {
    id: "04",
    icon: <FaTruck />,
    title: "Packaging & Delivery",
    desc: "Products are carefully packed and delivered safely with complete customer support and timely dispatch.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WorkingProcess = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background Shape */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-100 blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[4px] text-orange-600">
            Working Process
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How We Deliver
            <span className="bg-gradient-to-r from-[#F04F5A] to-[#FFB300] bg-clip-text text-transparent">
              {" "}
              Premium Textile Solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Our streamlined workflow ensures quality, precision and timely
            delivery from concept to finished textile products.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
        >
          {process.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              whileHover={{
                y: -10,
              }}
              className="group relative rounded-3xl border border-gray-100 bg-white p-7 shadow-lg transition-all duration-300 hover:border-orange-300 hover:shadow-2xl"
            >
              {/* Number */}

              <span className="absolute right-6 top-6 text-5xl font-extrabold text-gray-100 transition group-hover:text-orange-100">
                {step.id}
              </span>

              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F04F5A] to-[#FFB300] text-2xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="mt-7 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Line */}

              <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] transition-all duration-500 group-hover:w-full"></div>

              {/* Description */}

              <p className="mt-5 text-[15px] leading-7 text-gray-500">
                {step.desc}
              </p>

              {/* Connector Line Desktop */}

              {index !== process.length - 1 && (
                <div className="absolute top-14 -right-4 hidden xl:block h-[2px] w-8 bg-gradient-to-r from-orange-300 to-red-300"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcess;