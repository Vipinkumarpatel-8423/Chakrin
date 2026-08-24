import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../../data/reviews/testimonials";

import { FaGoogle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  return (
    <section className="relative overflow-hidden bg-chakrin-secondary-light py-8 md:py-10 lg:pb-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-chakrin-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-chakrin-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-14 lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[5px] text-chakrin-primary">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-chakrin-heading sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-chakrin-text sm:text-base">
            Trusted by textile manufacturers across India for quality,
            innovation and exceptional customer service.
          </p>
        </motion.div>


        {/* Main Content */}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4 lg:gap-10">

          {/* Google Rating */}

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mx-auto
              w-full
              max-w-md
              rounded-3xl
              border
              border-chakrin-border
              bg-white
              p-6
              shadow-[0_15px_40px_rgba(166,61,130,0.08)]
              sm:p-8
              lg:max-w-none
            "
          >

            {/* Google Header */}

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chakrin-secondary-light">
                <FaGoogle className="text-3xl text-chakrin-primary" />
              </div>

              <div>

                <h3 className="text-xl font-bold text-chakrin-heading">
                  Chakrin Digital
                </h3>

                <p className="text-sm text-chakrin-text">
                  Textile Solutions
                </p>

              </div>

            </div>


            {/* Stars */}

            <div className="mt-6 flex gap-1 text-chakrin-secondary">

              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}

            </div>


            {/* Rating */}

            <h2 className="mt-5 text-4xl font-extrabold text-chakrin-heading sm:text-5xl">
              4.9
            </h2>

            <p className="mt-2 text-sm text-chakrin-text">
              Based on 250+ Reviews
            </p>


            {/* Review Button */}

            <button
              className="
                mt-8
                w-full
                rounded-full
                bg-gradient-to-r
                from-chakrin-primary
                to-chakrin-secondary
                py-3
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
              Write Review
            </button>

          </motion.div>


          {/* Reviews Slider */}

          <div className="w-full overflow-hidden lg:col-span-3">

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              spaceBetween={25}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 1.3,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
            >

              {testimonials.map((item, index) => (

                <SwiperSlide key={index}>

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      flex
                      h-full
                      min-h-[280px]
                      flex-col
                      justify-between
                      rounded-3xl
                      border
                      border-chakrin-border
                      bg-white
                      p-6
                      shadow-[0_15px_40px_rgba(166,61,130,0.07)]
                      transition-shadow
                      duration-300
                      hover:shadow-[0_20px_45px_rgba(166,61,130,0.13)]
                      sm:p-8
                    "
                  >

                    {/* Stars */}

                    <div className="mb-5 flex gap-1 text-chakrin-secondary">

                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}

                    </div>


                    {/* Review */}

                    <p className="text-sm leading-7 text-chakrin-text italic sm:text-base">
                      "{item.review}"
                    </p>


                    {/* Client */}

                    <div className="mt-8 flex items-center gap-4">

                      <div className="relative">

                        <img
                          src={item.image}
                          className="
                            h-12
                            w-12
                            flex-shrink-0
                            rounded-full
                            border-2
                            border-chakrin-border
                            object-cover
                            sm:h-14
                            sm:w-14
                          "
                          alt={item.name}
                        />

                        {/* Small Accent */}

                        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-chakrin-secondary ring-2 ring-white" />

                      </div>


                      <div>

                        <h4 className="text-sm font-bold text-chakrin-heading sm:text-base">
                          {item.name}
                        </h4>

                        <p className="text-xs text-chakrin-text sm:text-sm">
                          {item.company}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReviewsSection;