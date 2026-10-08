import { motion } from "framer-motion";
import video from "../../assets/about-video/about-video.mp4";
import poster from "../../assets/poster.jpg";

const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* Video */}
      <motion.video
        initial={{ scale: 1.01 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        playbackRate={1}
        className="
          block
          w-full
          h-auto
          max-h-[650px]
          object-contain
        "
      >
        <source src={video} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

    </section>
  );
};

export default VideoSection;