import { motion } from "framer-motion";
import illustration from "../../assets/textile-illustration.png";
import Counter from "../Common/Counter";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Years Of Experience",
    desc: "Decades of experience in delivering impactful digital textile solutions.",
  },
  {
    number: 690,
    suffix: "K",
    title: "Meters Monthly Output",
    desc: "High production capacity with advanced digital textile technology.",
  },
  {
    number: 3640,
    title: "Factory Floor Space",
    desc: "Modern infrastructure designed for efficient manufacturing.",
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Building long-term relationships through quality and trust.",
  },
];

const StatsSection = () => {
  return (
    <section
      className="
        relative
        py-16
        lg:py-20
        bg-chakrin-secondary-light
        overflow-hidden
        select-none
      "
    >

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-chakrin-primary/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-80
          w-80
          rounded-full
          bg-chakrin-secondary/10
          blur-3xl
        "
      />


      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Animated Illustration */}

        <div className="flex justify-center mb-16 overflow-hidden">

          <motion.img
            src={illustration}
            alt="Textile Illustration"
            className="
              w-full
              max-w-[650px]
              md:w-[700px]
              object-contain
            "
            animate={{
              x: [-80, 80, -80],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>


        {/* Stats */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-8
          "
        >

          {stats.map((item, index) => (

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
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                rounded-3xl
                bg-white
                border
                border-chakrin-border
                p-7
                lg:p-8
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-500
              "
            >

              {/* Top Accent */}

              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary-dark
                  via-chakrin-primary
                  to-chakrin-secondary
                  opacity-70
                  group-hover:opacity-100
                  transition
                "
              />


              {/* Number */}

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  font-extrabold
                  tracking-tight
                  text-chakrin-primary-dark
                "
              >
                <Counter
                  value={item.number}
                  suffix={item.suffix}
                />
              </h2>


              {/* Title */}

              <h4
                className="
                  mt-4
                  font-semibold
                  text-lg
                  text-chakrin-heading
                "
              >
                {item.title}
              </h4>


              {/* Animated Line */}

              <div
                className="
                  mt-4
                  h-[2px]
                  w-16
                  rounded-full
                  bg-gradient-to-r
                  from-chakrin-primary-dark
                  to-chakrin-secondary
                  group-hover:w-full
                  duration-500
                "
              />


              {/* Description */}

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-chakrin-text
                  leading-7
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;