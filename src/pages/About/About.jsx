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

        {/* Theme Glow */}

        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-chakrin-primary/20 blur-3xl"></div>

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-chakrin-secondary/15 blur-3xl"></div>

        {/* Content */}

        <div className="relative z-10">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <div className="min-h-[340px] md:min-h-[420px] lg:min-h-[320px] flex items-center">

              <div className="max-w-3xl select-none">

                {/* Label */}

                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
              inline-block
              rounded-full
              border
              border-chakrin-secondary/40
              bg-chakrin-primary/10
              backdrop-blur-md
              px-5
              py-2
              text-sm
              tracking-[4px]
              uppercase
              text-chakrin-secondary
            "
                >
                  About Chakrin
                </motion.span>

                {/* Breadcrumb */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 flex flex-wrap items-center gap-3 text-sm"
                >

                  <Link
                    to="/"
                    className="
                flex
                items-center
                gap-2
                text-white
                hover:text-chakrin-secondary
                duration-300
              "
                  >
                    <FiHome />
                    Home
                  </Link>

                  <FiChevronRight className="text-chakrin-secondary" />

                  <span className="text-chakrin-secondary font-semibold select-none">
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 max-w-6xl mx-auto px-5 select-none"
        >

          <div className="lg:-mt-16 -mt-10">

            <div
              className="
          rounded-3xl
          border
          border-chakrin-secondary/30
          bg-chakrin-primary/10
          backdrop-blur-2xl
          shadow-2xl
        "
            >

              <div className="grid grid-cols-1 sm:grid-cols-3">

                {stats.map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      backgroundColor: "rgba(166, 61, 130, 0.12)",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                py-8
                px-6
                text-center
                ${index !== stats.length - 1
                        ? "sm:border-r border-chakrin-secondary/20"
                        : ""
                      }
              `}
                  >

                    {/* Number */}

                    <h2 className="
                text-4xl
                lg:text-5xl
                font-bold
                text-white
              ">
                      <Counter
                        value={parseInt(item.number)}
                        suffix={item.suffix}
                      />
                    </h2>

                    {/* Title */}

                    <p className="
                mt-3
                text-white/80
                text-sm
                sm:text-base
              ">
                      {item.title}
                    </p>

                  </motion.div>

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