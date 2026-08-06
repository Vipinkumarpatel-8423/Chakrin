import { motion } from "framer-motion";
import illustration from "../../assets/textile-illustration.png";
import Counter from "../Common/Counter";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Years Of Experience",
    desc: "Decades of experience in delivering impactful digital textile solutions.",
  },
  {
    number: 690,
    suffix: "K",
    title: "Meters Monthly Output",
    desc: "High production capacity with advanced digital textile technology.",
  },
  {
    number: 3640,
    title: "Factory Floor Space",
    desc: "Modern infrastructure designed for efficient manufacturing.",
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Building long-term relationships through quality and trust.",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        {/* Animated Illustration */}

        <div className="flex justify-center mb-16 overflow-hidden">

          <motion.img
            src={illustration}
            alt="Textile Illustration"
            className="max-w-full md:w-[700px]"
            animate={{
              x: [-80, 80, -80],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: .7,
              }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >

              <h2 className="text-5xl font-extrabold text-gray-900">
                {/* {item.number} */}
                <Counter
                  value={item.number}
                  suffix={item.suffix}
                // duration={2.5}
                />

              </h2>

              <h4 className="mt-4 font-semibold text-lg">
                {item.title}
              </h4>

              <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-[#F04F5A] to-[#FFB300] group-hover:w-full duration-500"></div>

              <p className="mt-5 text-gray-500 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;