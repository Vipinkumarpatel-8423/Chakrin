import { motion } from "framer-motion";
import video from "../../assets/videos/textile-video.mp4";
import poster from "../../assets/poster.jpg";

const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* Video */}

      <motion.video
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[650px] object-cover"
      >
        <source src={video} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}

      {/* <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-5">

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >

            <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-5 py-2 text-sm text-orange-300 border border-orange-400/30">
              Digital Textile Technology
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Experience Our
              <span className="text-orange-400">
                {" "}Advanced Manufacturing
              </span>
            </h2>

            <p className="mt-6 text-gray-200 leading-8 max-w-xl">
              Explore our cutting-edge digital textile printing machines
              delivering precision, speed and unmatched fabric quality.
            </p>

            <button className="mt-8 rounded-full bg-gradient-to-r from-[#F04F5A] to-[#FFB300] px-8 py-4 text-white font-semibold hover:scale-105 transition">
              Watch Our Process
            </button>

          </motion.div>

        </div>

      </div> */}

    </section>
  );
};

export default VideoSection;