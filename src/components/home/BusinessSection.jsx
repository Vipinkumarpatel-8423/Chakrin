import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import fabric from "../../assets/business/fabric.jpg";
import machine from "../../assets/business/machine.jpg";
import paper from "../../assets/business/paper.jpg";
import businessData from "../../data/business/BusinessData";

// const businesses = [
//   {
//     title: "Digital Textile Printing",
//     subtitle: "Advanced Fabric Printing",
//     description:
//       "High-speed digital textile printing machines delivering exceptional color accuracy, precision and productivity for industrial applications.",
//     image: fabric,
//   },
//   {
//     title: "Textile Machinery",
//     subtitle: "World Class Equipment",
//     description:
//       "Innovative textile machinery engineered for superior performance, efficiency and long-term reliability in modern manufacturing.",
//     image: machine,
//   },
//   {
//     title: "Sublimation Paper",
//     subtitle: "Premium Transfer Paper",
//     description:
//       "High-quality sublimation paper ensuring vibrant color transfer, sharp image quality and excellent durability.",
//     image: paper,
//   },
// ];

const BusinessSection = () => {
  return (
    <section className="pt-10 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Businesses
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Complete Textile Solutions
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
            From digital textile printing to advanced machinery and premium
            sublimation paper, Chakrin delivers complete industrial textile
            solutions.
          </p>

        </div>

        {businessData.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-14 items-center mb-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
          >

            {/* Image */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`${index % 2 === 1 ? "lg:order-2" : ""
                } overflow-hidden rounded-3xl shadow-2xl`}
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-[320px] md:h-[420px] object-cover hover:scale-110 duration-700"
              />

            </motion.div>

            {/* Content */}

            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>

              <span className="text-orange-500 uppercase font-semibold tracking-widest">
                {item.subtitle}
              </span>

              <h3 className="mt-3 text-3xl lg:text-4xl font-bold">
                {item.title}
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                {item.description}
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-7 py-3 text-white font-semibold hover:scale-105 transition">

                Learn More

                <FiArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default BusinessSection;