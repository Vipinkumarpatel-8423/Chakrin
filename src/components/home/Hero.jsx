// import { FiArrowRight } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import HeroBg from "../../assets/hero banner.png";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#160D17]">

//       {/* ================= BACKGROUND IMAGE ================= */}

//       <motion.img
//         src={HeroBg}
//         alt="Chakrin Digital Textiles Factory"
//         initial={{ scale: 1.05 }}
//         animate={{ scale: 1 }}
//         transition={{
//           duration: 10,
//           ease: "easeOut",
//         }}
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           object-cover
//           object-center
//           md:object-center
//         "
//       />

//       {/* ================= OVERLAY ================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-[#160D17]/90
//           via-[#160D17]/65
//           to-[#160D17]/10
//           sm:from-[#160D17]/85
//           sm:via-[#160D17]/55
//           sm:to-transparent
//         "
//       />

//       {/* Mobile readability overlay */}

//       <div
//         className="
//           absolute
//           inset-0
//           bg-[#160D17]/20
//           sm:hidden
//         "
//       />

//       {/* ================= PINK GLOW ================= */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="
//           pointer-events-none
//           absolute
//           -left-40
//           top-1/2
//           h-[350px]
//           w-[350px]
//           -translate-y-1/2
//           rounded-full
//           bg-chakrin-primary/20
//           blur-[110px]
//           sm:h-[450px]
//           sm:w-[450px]
//         "
//       />

//       {/* ================= CONTENT ================= */}

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//         <div
//           className="
//             flex
//             min-h-[calc(100vh-82px)]
//             items-center
//             py-20
//             sm:py-24
//             lg:py-20
//           "
//         >

//           <div className="w-full max-w-3xl">

//             {/* ================= HEADING ================= */}

//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//               }}
//               className="
//                 text-4xl
//                 font-extrabold
//                 leading-[1.08]
//                 tracking-tight
//                 text-white
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-7xl
//                 xl:text-8xl
//               "
//             >
//               World Class
//               <br />

//               Textile{" "}

//               <motion.span
//                 initial={{ opacity: 0, x: 25 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.25,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   inline-block
//                   bg-gradient-to-r
//                   from-chakrin-primary
//                   to-chakrin-secondary
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Printing
//               </motion.span>
//             </motion.h1>


//             {/* ================= DESCRIPTION ================= */}

//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.45,
//               }}
//               className="
//                 mt-5
//                 max-w-xl
//                 text-sm
//                 leading-6
//                 text-gray-200
//                 sm:mt-6
//                 sm:text-base
//                 sm:leading-7
//                 lg:text-lg
//                 lg:leading-8
//               "
//             >
//               Delivering advanced textile printing machines with unmatched
//               quality, speed and precision for industries worldwide.
//             </motion.p>


//             {/* ================= BUTTON ================= */}

//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.65,
//               }}
//               className="mt-8 sm:mt-10"
//             >
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="
//                   group
//                   flex
//                   w-fit
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-chakrin-secondary/60
//                   bg-white/5
//                   px-6
//                   py-3
//                   font-semibold
//                   text-white
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-chakrin-primary
//                   hover:bg-chakrin-primary
//                   hover:shadow-xl
//                   hover:shadow-chakrin-primary/25
//                   sm:px-8
//                   sm:py-4
//                 "
//               >
//                 Contact Us

//                 <FiArrowRight
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </button>
//             </motion.div>

//           </div>

//         </div>

//       </div>


//       {/* ================= BOTTOM FADE ================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-0
//           right-0
//           h-24
//           bg-gradient-to-t
//           from-[#160D17]/25
//           to-transparent
//         "
//       />

//     </section>
//   );
// };

// export default Hero;





import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ================= HERO IMAGES =================

import heroImage1 from "../../assets/hero/hero-textile-1.png";
import heroImage2 from "../../assets/hero/hero-textile-2.png";
import heroImage3 from "../../assets/hero/hero-textile-3.png";
import heroImage4 from "../../assets/hero/hero-textile-4.png";

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
];

const Hero = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(slider);
  }, []);

  // ================= NEXT =================

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  // ================= PREVIOUS =================

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#160D17]">

      {/* =====================================================
          BACKGROUND SLIDER
      ====================================================== */}

      <div className="absolute inset-0">

        <AnimatePresence mode="sync">

          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt="Chakrin Digital Textiles Factory"
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
                ease: "easeOut",
              },
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              sm:object-center
            "
          />

        </AnimatePresence>

      </div>


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#160D17]/95
          via-[#160D17]/70
          to-[#160D17]/25
          sm:from-[#160D17]/90
          sm:via-[#160D17]/60
          sm:to-[#160D17]/15
        "
      />


      {/* =====================================================
          PINK THEME OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-chakrin-primary/20
          via-transparent
          to-chakrin-secondary/10
        "
      />


      {/* =====================================================
          MOBILE READABILITY OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#160D17]/25
          sm:hidden
        "
      />


      {/* =====================================================
          ANIMATED PINK GLOW
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
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


      {/* =====================================================
          RIGHT GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-chakrin-secondary/15
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

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
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
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
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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


      {/* =====================================================
          SLIDER CONTROLS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-25
          z-20
          flex
          items-center
          gap-3
          sm:bottom-8
          sm:right-30
          lg:right-40
        "
      >

        {/* Previous */}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/20
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-chakrin-secondary
            hover:bg-chakrin-primary
          "
        >
          <FiChevronLeft size={18} />
        </button>


        {/* Indicators */}

        <div className="flex items-center gap-2">

          {heroImages.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${
                  currentSlide === index
                    ? "w-8 bg-chakrin-secondary"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }
              `}
            />

          ))}

        </div>


        {/* Next */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/20
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-chakrin-secondary
            hover:bg-chakrin-primary
          "
        >
          <FiChevronRight size={18} />
        </button>

      </div>


      {/* =====================================================
          SLIDE NUMBER
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-5
          z-20
          hidden
          items-center
          gap-3
          text-white/70
          sm:flex
          lg:left-8
        "
      >

        <span className="text-xs font-semibold tracking-[3px]">
          0{currentSlide + 1}
        </span>

        <div className="h-px w-10 bg-white/30" />

        <span className="text-[10px] uppercase tracking-[2px] text-white/50">
          Chakrin
        </span>

      </div>


      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#160D17]/40
          to-transparent
        "
      />

    </section>
  );
};

export default Hero;