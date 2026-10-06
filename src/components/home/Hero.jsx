import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HeroBg from "../../assets/hero banner.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#160D17]">

      {/* ================= BACKGROUND IMAGE ================= */}

      <motion.img
        src={HeroBg}
        alt="Chakrin Digital Textiles Factory"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          md:object-center
        "
      />

      {/* ================= OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#160D17]/90
          via-[#160D17]/65
          to-[#160D17]/10
          sm:from-[#160D17]/85
          sm:via-[#160D17]/55
          sm:to-transparent
        "
      />

      {/* Mobile readability overlay */}

      <div
        className="
          absolute
          inset-0
          bg-[#160D17]/20
          sm:hidden
        "
      />

      {/* ================= PINK GLOW ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-chakrin-primary/20
          blur-[110px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div
          className="
            flex
            min-h-[calc(100vh-82px)]
            items-center
            py-20
            sm:py-24
            lg:py-20
          "
        >

          <div className="w-full max-w-3xl">

            {/* ================= HEADING ================= */}

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              World Class
              <br />

              Textile{" "}

              <motion.span
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className="
                  inline-block
                  bg-gradient-to-r
                  from-chakrin-primary
                  to-chakrin-secondary
                  bg-clip-text
                  text-transparent
                "
              >
                Printing
              </motion.span>
            </motion.h1>


            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-gray-200
                sm:mt-6
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
            >
              Delivering advanced textile printing machines with unmatched
              quality, speed and precision for industries worldwide.
            </motion.p>


            {/* ================= BUTTON ================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-8 sm:mt-10"
            >
              <button
                onClick={() => navigate("/contact")}
                className="
                  group
                  flex
                  w-fit
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-chakrin-secondary/60
                  bg-white/5
                  px-6
                  py-3
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-chakrin-primary
                  hover:bg-chakrin-primary
                  hover:shadow-xl
                  hover:shadow-chakrin-primary/25
                  sm:px-8
                  sm:py-4
                "
              >
                Contact Us

                <FiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </motion.div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FADE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#160D17]/25
          to-transparent
        "
      />

    </section>
  );
};

export default Hero;