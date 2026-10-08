import { motion } from "framer-motion";
import video from "../../assets/about-video/about-video.mp4";
import poster from "../../assets/poster.jpg";

const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* Video */}
      <motion.video
        initial={{ scale: 1.03 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="
          w-full
          h-[280px]
          sm:h-[380px]
          md:h-[500px]
          lg:h-[650px]
          object-cover
        "
      >
        <source src={video} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

    </section>
  );
};

export default VideoSection;