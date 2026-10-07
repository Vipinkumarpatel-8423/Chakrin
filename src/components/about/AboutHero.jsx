import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

import aboutBg from "../../assets/about/about-banner.jpg";
import textileIllustration from "../../assets/textile-illustration.png";
import Counter from "../Common/Counter";

const stats = [
  {
    number: "4",
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

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ================= BACKGROUND ================= */}

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
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />

      {/* ================= THEME GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-chakrin-primary/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-chakrin-secondary/15
          blur-3xl
        "
      />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex min-h-[160px] items-center md:min-h-[170px] lg:min-h-[180px]">
            <div className="max-w-3xl select-none">
              {/* Label */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  inline-block
                  rounded-full
                  border
                  border-chakrin-secondary/40
                  bg-chakrin-primary/10
                  px-5
                  py-2
                  text-sm
                  uppercase
                  tracking-[4px]
                  text-chakrin-secondary
                  backdrop-blur-md
                "
              >
                About Chakrin
              </motion.span>

              {/* Breadcrumb */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  text-sm
                "
              >
                <Link
                  to="/"
                  className="
                    flex
                    items-center
                    gap-2
                    text-white
                    duration-300
                    hover:text-chakrin-secondary
                  "
                >
                  <FiHome />
                  Home
                </Link>

                <FiChevronRight className="text-chakrin-secondary" />

                <span className="font-semibold text-chakrin-secondary">
                  About Us
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TEXTILE ILLUSTRATION
          CENTERED ABOVE STATS
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          justify-center
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            flex
            w-full
            max-w-[360px]
            items-center
            justify-center
            sm:max-w-[500px]
            md:max-w-[620px]
            lg:max-w-[720px]
            xl:max-w-[780px]
          "
        >
          {/* Soft Glow Behind Illustration */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-chakrin-primary/20
              blur-3xl
              sm:h-32
            "
          />

          {/* Continuous Left → Right Animation */}

          {/* <motion.img
            src={textileIllustration}
            alt="Textile manufacturing and printing process"
            animate={{
              x: [-22, 22, -22],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              h-auto
              w-full
              max-w-[340px]
              object-contain
              sm:max-w-[480px]
              md:max-w-[600px]
              lg:max-w-[700px]
              xl:max-w-[760px]
              drop-shadow-[0_10px_20px_rgba(166,61,130,0.18)]
            "
          /> */}

          <motion.img
            src={textileIllustration}
            alt="Textile manufacturing and printing process"
            animate={{
              x: [-22, 22, -22],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    relative
    z-10
    h-auto
    w-full
    max-w-[340px]
    object-contain

    opacity-70
    brightness-75
    contrast-90

    sm:max-w-[480px]
    md:max-w-[600px]
    lg:max-w-[700px]
    xl:max-w-[760px]

    drop-shadow-[0_8px_18px_rgba(166,61,130,0.12)]
  "
          />
        </motion.div>
      </div>

      {/* =====================================================
          FLOATING STATS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-20
          mx-auto
          max-w-6xl
          px-5
          select-none
        "
      >
        <div className="lg:-mt-2 -mt-2">
          <div
            className="
              rounded-3xl
              border
              border-chakrin-secondary/30
              bg-chakrin-primary/10
              shadow-2xl
              backdrop-blur-2xl
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    backgroundColor: "rgba(166, 61, 130, 0.12)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`
                    px-6
                    py-8
                    text-center

                    ${
                      index !== stats.length - 1
                        ? "border-chakrin-secondary/20 sm:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Number */}

                  <h2
                    className="
                      text-4xl
                      font-bold
                      text-white
                      lg:text-5xl
                    "
                  >
                    <Counter
                      value={parseInt(item.number)}
                      suffix={item.suffix}
                    />
                  </h2>

                  {/* Title */}

                  <p
                    className="
                      mt-3
                      text-sm
                      text-white/80
                      sm:text-base
                    "
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
