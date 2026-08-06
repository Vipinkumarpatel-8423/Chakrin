import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

import aboutBg from "../../assets/about/about-banner.jpg"; // Change your image path
import AboutSection from "../../components/home/AboutSection";
import Counter from "../../components/Common/Counter";
import VideoSection from "../../components/home/VideoSection";
import WorkingProcess from "../../components/about/WorkingProcess";
import TeamSection from "../../components/about/TeamSection";

const stats = [
  {
    number: "15",
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: "250",
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: "99",
    suffix: "%",
    title: "Client Satisfaction",
  },
];

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden">

        {/* Background */}

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <img
            src={aboutBg}
            alt="About Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40"></div>

        {/* Content */}

        <div className="relative z-10">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <div className="min-h-[340px] md:min-h-[420px] lg:min-h-[320px] flex items-center">

              <div className="max-w-3xl">

                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: .6 }}
                  className="inline-block rounded-full border border-orange-400/40 bg-white/10 backdrop-blur-md px-5 py-2 text-sm tracking-[4px] uppercase text-orange-300"
                >
                  About Chakrin
                </motion.span>

                {/* <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .2, duration: .8 }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight"
              >
                Transforming
                <br />

                Textile Innovation

                <span className="block bg-gradient-to-r from-[#F04F5A] via-[#FF7A3D] to-[#FFB300] bg-clip-text text-transparent">
                  Into Excellence
                </span>

              </motion.h1> */}

                {/* <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .4 }}
                className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-8"
              >
                Chakrin Digital Textiles specializes in advanced textile
                printing technology, innovative machinery and precision-driven
                manufacturing solutions, delivering world-class quality for the
                modern textile industry.
              </motion.p> */}

                {/* Breadcrumb */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: .6 }}
                  className="mt-8 flex flex-wrap items-center gap-3 text-sm"
                >
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-white hover:text-orange-400 duration-300"
                  >
                    <FiHome />
                    Home
                  </Link>

                  <FiChevronRight className="text-orange-400" />

                  <span className="text-orange-400 font-semibold">
                    About Us
                  </span>

                </motion.div>

              </div>

            </div>

          </div>

        </div>

        {/* Floating Stats */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative z-20 max-w-6xl mx-auto px-5"
        >

          <div className="lg:-mt-16 -mt-10">

            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">

              <div className="grid grid-cols-1 sm:grid-cols-3">

                {stats.map((item, index) => (

                  <div
                    key={index}
                    className={`py-8 px-6 text-center ${index !== stats.length - 1
                      ? "sm:border-r border-white/20"
                      : ""
                      }`}
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      {/* {item.number} */}
                      <Counter value={parseInt(item.number)} suffix={item.suffix} />
                    </h2>

                    <p className="mt-3 text-gray-200">
                      {item.title}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>


      </section>
      <AboutSection />
      <TeamSection />
      <VideoSection />
      <WorkingProcess />
    </>
  );
};

export default About;