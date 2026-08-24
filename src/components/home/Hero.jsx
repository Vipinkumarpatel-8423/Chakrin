import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HeroBg from "../../assets/h1_slide-1.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#160D17]/75"></div>

      {/* Chakrin Pink / Magenta Glow */}
      <div className=" absolute
      -left-40
      top-1/2
      h-[450px]
      w-[450px]
      -translate-y-1/2
      rounded-full
      bg-chakrin-primary/20
      blur-[120px]"></div>

      {/* Soft Pink Glow */}
      {/* <div
        className="
      absolute
      -right-40
      bottom-0
      h-[400px]
      w-[400px]
      rounded-full
      bg-chakrin-secondary/10
      blur-[120px]
    "
      ></div> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="min-h-screen flex items-center">

          <div className="max-w-3xl">

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-4xl
            sm:text-5xl
            md:text-7xl
            xl:text-8xl
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-white">
              World Class
              <br />
              Textile
              <span className="text-transparent bg-clip-text bg-gradient-to-r
    from-chakrin-primary
    to-chakrin-secondary">
                {" "}
                Printing
              </span>
            </motion.h1>

            <p className="mt-6
            max-w-xl
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-gray-300">
              Delivering advanced textile printing machines with unmatched
              quality, speed and precision for industries worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className=" rounded-full
              bg-gradient-to-r
              from-chakrin-primary
              to-chakrin-secondary
              px-7
              sm:px-8
              py-3.5
              sm:py-4
              font-semibold
              text-white
              shadow-xl
              shadow-chakrin-primary/20
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-chakrin-primary/30
              cursor-pointer">
                Explore Products
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-chakrin-secondary/50
              px-7
              sm:px-8
              py-3.5
              sm:py-4
              font-semibold
              text-white
              backdrop-blur-md
              bg-white/5
              transition-all
              duration-300
              hover:bg-chakrin-primary
              hover:border-chakrin-primary
              hover:shadow-lg
              hover:shadow-chakrin-primary/20
              cursor-pointer">
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