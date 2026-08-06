import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import HeroBg from "../../assets/h1_slide-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Orange Glow */}
      <div className="absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="min-h-screen flex items-center">

          <div className="max-w-3xl">

            {/* <span className="inline-block rounded-full border border-orange-400/40 bg-white/10 px-5 py-2 text-sm font-medium text-orange-300 backdrop-blur">
              Leading Textile Machinery Manufacturer
            </span> */}

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-5xl md:text-7xl xl:text-8xl font-extrabold leading-tight text-white">
              World Class
              <br />
              Textile
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04F5A] via-[#FF7A3D] to-[#FFB300]">
                {" "}
                Printing
              </span>
            </motion.h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Delivering advanced textile printing machines with unmatched
              quality, speed and precision for industries worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105">
                Explore Products
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white hover:text-black transition">
                Contact Us
                <FiArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Card */}

      {/* <div className="absolute bottom-10 right-10 hidden lg:block">

        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-6">

          <h2 className="text-5xl font-bold text-white">
            15+
          </h2>

          <p className="mt-2 text-gray-300">
            Years of Industry Experience
          </p>

        </div>

      </div> */}

    </section>
  );
};

export default Hero;