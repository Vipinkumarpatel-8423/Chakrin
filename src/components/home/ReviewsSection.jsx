import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../../data/reviews/testimonials";

import { FaGoogle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  return (
    // <section className="pb-24 bg-[#F7F8FC] bg-gradient-to-b from-white to-gray-50">
    <section className="py-8 md:py-10 lg:pb-24 bg-[#F7F8FC] bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* <div className="max-w-7xl mx-auto px-5"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <span className="uppercase tracking-[5px] text-orange-500 text-sm font-semibold">
            Testimonials
          </span>

          {/* <h2 className="mt-4 text-4xl lg:text-5xl font-bold"> */}
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            What Our Clients Say
          </h2>

          {/* <p className="mt-5 text-gray-500 max-w-2xl mx-auto"> */}
          <p className="mt-5 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-7 px-2">
            Trusted by textile manufacturers across India for quality,
            innovation and exceptional customer service.
          </p>

        </motion.div>

        {/* <div className="grid lg:grid-cols-4 gap-10 items-start"> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-start">

          {/* Google Rating */}

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white shadow-xl border p-6 sm:p-8 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="flex items-center gap-3">

              <FaGoogle className="text-4xl text-blue-500" />

              <div>

                <h3 className="font-bold text-xl">
                  Chakrin Digital
                </h3>

                <p className="text-gray-500">
                  Textile Solutions
                </p>

              </div>

            </div>

            <div className="flex mt-6 text-yellow-400 gap-1">

              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}

            </div>

            {/* <h2 className="text-5xl font-bold mt-5"> */}
            <h2 className="text-4xl sm:text-5xl font-bold mt-5">
              4.9
            </h2>

            <p className="text-gray-500 mt-2">
              Based on 250+ Reviews
            </p>

            <button className="mt-8 w-full rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] py-3 text-white font-semibold">
              Write Review
            </button>

          </motion.div>

          {/* Reviews */}

          {/* <div className="lg:col-span-3"> */}
          <div className="lg:col-span-3 w-full overflow-hidden">

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
              }}
              loop
              spaceBetween={25}

              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //   },
              //   1200: {
              //     slidesPerView: 3,
              //   },
              // }}

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
                    className="rounded-3xl bg-white shadow-xl p-6 sm:p-8 h-full min-h-[280px] flex flex-col justify-between"
                  >

                    <div className="flex text-yellow-400 mb-5">

                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}

                    </div>

                    <p className="text-gray-600 leading-7 italic text-sm sm:text-base">
                      "{item.review}"
                    </p>

                    <div className="flex items-center gap-4 mt-8">

                      <img
                        src={item.image}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                        alt=""
                      />

                      <div>

                        <h4 className="font-bold text-sm sm:text-base">
                          {item.name}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-500">
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