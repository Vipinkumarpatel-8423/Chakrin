import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import bg from "../../assets/gallery/bg.jpg";

import g1 from "../../assets/gallery/g1.jpg";
import g2 from "../../assets/gallery/g2.jpg";
import g3 from "../../assets/gallery/g3.jpg";
import g4 from "../../assets/gallery/g4.jpg";
import g5 from "../../assets/gallery/g5.jpg";
import g6 from "../../assets/gallery/g6.jpg";

import { motion } from "framer-motion";

const images = [g1, g2, g3, g4, g5, g6];

const GalleryShowcase = () => {
  return (
    <section className="relative bg-white mb-32 md:mb-40 lg:mb-48">

      {/* Background Area */}
      <div className="relative h-[380px] md:h-[520px] lg:h-[500px] overflow-hidden">

        {/* Background */}
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 12 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col pt-10 justify-start items-center px-5">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          >
            Moments at Chakrin
          </motion.h2>

          <p className="mt-5 text-center text-gray-300 max-w-2xl">
            Our achievements, events and successful journey.
          </p>

        </div>

      </div>

      {/* Floating Slider */}

      <div className="absolute left-0 right-0 -bottom-24 md:-bottom-28 lg:-bottom-36 z-20">

        <div className="max-w-7xl mx-auto px-5">

          <Swiper
            modules={[Autoplay]}
            loop
            speed={4500}
            spaceBetween={25}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >

            {images.map((img, index) => (

              <SwiperSlide key={index}>

                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  transition={{ duration: .3 }}
                  className="overflow-hidden shadow-2xl bg-white"
                >

                  <img
                    src={img}
                    alt=""
                    className="h-[220px] md:h-[260px] lg:h-[280px] w-full object-cover transition duration-500 "
                  />

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default GalleryShowcase;