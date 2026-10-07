import { motion } from "framer-motion";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import contactBg from "../../assets/contact/contact-bg.jpeg";
import textileIllustration from "../../assets/textile-illustration.png";

const ContactHero = () => {
  return (
    <section className="relative mb-12 min-h-[300px] overflow-hidden sm:mb-16 sm:min-h-[360px] lg:mb-20 lg:min-h-[430px]">

      {/* ================= BACKGROUND IMAGE ================= */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={contactBg}
          alt="Contact Chakrin Digital"
          className="h-full w-full object-cover"
        />
      </motion.div>


      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/75" />


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


      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[300px]
          flex-col
          items-center
          justify-center
          px-5
          pt-8
          text-center
          sm:min-h-[360px]
          sm:pt-10
          lg:min-h-[430px]
          lg:pt-12
        "
      >

        {/* ================= TITLE + BREADCRUMB ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Title */}

          <h1
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Contact
          </h1>


          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-white
              sm:text-xs
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
                hover:text-chakrin-primary
              "
            >
              <FiHome />
              Home
            </Link>

            <FiChevronRight
              size={14}
              className="text-chakrin-primary"
            />

            <span className="font-semibold text-chakrin-primary">
              Contact
            </span>

          </motion.div>

        </motion.div>


        {/* =====================================================
            TEXTILE ILLUSTRATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-5
            flex
            w-full
            max-w-[300px]
            items-center
            justify-center
            sm:mt-7
            sm:max-w-[430px]
            md:max-w-[550px]
            lg:mt-8
            lg:max-w-[680px]
            xl:max-w-[760px]
          "
        >

          {/* Soft Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-20
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-chakrin-primary/15
              blur-3xl
              sm:h-28
            "
          />


          {/* Moving Illustration */}

          <motion.img
            src={textileIllustration}
            alt="Textile manufacturing and printing process"
            animate={{
              x: [-18, 18, -18],
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
              object-contain

              opacity-60
              brightness-75
              contrast-90

              drop-shadow-[0_8px_18px_rgba(166,61,130,0.12)]
            "
          />

        </motion.div>

      </div>

    </section>
  );
};

export default ContactHero;