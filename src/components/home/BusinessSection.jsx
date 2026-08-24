import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import businessData from "../../data/business/BusinessData";

const BusinessSection = () => {
  return (
    <section className="relative overflow-hidden bg-chakrin-secondary-light py-16 lg:py-24">

      {/* Background Decorative Glow */}

      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-chakrin-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >

          <span className="text-xs font-semibold uppercase tracking-[4px] text-chakrin-primary">
            Our Businesses
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-chakrin-heading sm:text-4xl md:text-5xl">
            Complete Textile Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-chakrin-text sm:text-base">
            From digital textile printing to advanced machinery and premium
            sublimation paper, Chakrin delivers complete industrial textile
            solutions.
          </p>

        </motion.div>


        {/* Business Items */}

        <div className="space-y-16 lg:space-y-24">

          {businessData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >

              {/* Image */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative overflow-hidden rounded-[28px]
                  border border-chakrin-border
                  bg-white
                  shadow-[0_15px_40px_rgba(166,61,130,0.08)]
                  ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                `}
              >

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-chakrin-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[280px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-110
                    sm:h-[360px]
                    lg:h-[420px]
                  "
                />

              </motion.div>


              {/* Content */}

              <div
                className={`
                  ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                `}
              >

                {/* Number */}

                <div className="mb-5 flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-chakrin-primary text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-12 bg-chakrin-border" />

                  <span className="text-xs font-semibold uppercase tracking-[3px] text-chakrin-primary">
                    {item.subtitle}
                  </span>

                </div>


                {/* Title */}

                <h3 className="text-3xl font-extrabold leading-tight text-chakrin-heading sm:text-4xl">
                  {item.title}
                </h3>


                {/* Accent */}

                <div className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-chakrin-primary to-chakrin-secondary" />


                {/* Description */}

                <p className="mt-6 text-sm leading-7 text-chakrin-text sm:text-base sm:leading-8">
                  {item.description}
                </p>


                {/* Button */}

                <button
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-chakrin-primary
                    to-chakrin-secondary
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-chakrin-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-chakrin-primary/25
                  "
                >

                  Learn More

                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BusinessSection;