import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { directors } from "../../data/directors";

const TeamSection = () => {
  return (
    <section className="pb-24 bg-gradient-to-b from-white to-gray-100">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[5px] text-orange-500 text-sm font-semibold">
            Leadership
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Meet Our Leadership Team
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            Experienced leaders driving innovation, quality and excellence
            in textile printing technology.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {directors.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden  hover:border-orange-400 duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[340px] object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 duration-500" />

                {/* Social */}

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 duration-500">

                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300 cursor-pointer">
                    <FaFacebookF />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300 cursor-pointer">
                    <FaInstagram />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300 cursor-pointer">
                    <FaLinkedinIn />
                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-7 text-center">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-2 inline-block rounded-full bg-orange-100 text-orange-600 px-4 py-1 text-sm font-medium">
                  {item.role}
                </p>

                {/* <p className="mt-5 text-gray-500 leading-7">
                  {item.desc}
                </p> */}

                {/* <button className="mt-7 font-semibold text-orange-500 hover:text-red-500 duration-300">
                  View Profile →
                </button> */}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TeamSection;