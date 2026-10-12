
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.png";

const WebsiteLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let hideTimer;
    let fallbackTimer;
    let startTimer;

    const startedAt = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, 600 - elapsed);

      hideTimer = setTimeout(() => {
        setVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    // Slow connections par loader ko indefinitely visible mat rakho.
    fallbackTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      window.removeEventListener("load", hideLoader);
      clearTimeout(hideTimer);
      clearTimeout(fallbackTimer);
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#100810]"
          aria-label="Loading Chakrin Digital Textiles"
          role="status"
        >
          {/* Subtle brand glow */}
          <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-pink-600/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative flex w-full flex-col items-center px-6">
            {/* Animated circular ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[230px] w-[230px] rounded-full border border-pink-400/20 border-t-pink-400 sm:h-[290px] sm:w-[290px]"
            />

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Chakrin Digital Textiles"
              fetchPriority="high"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-44 max-w-[70vw] object-contain sm:w-56"
            />

            {/* Loading text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="relative z-10 mt-7 text-xs font-medium tracking-[0.3em] text-pink-100 sm:text-sm"
            >
              LOADING
            </motion.p>

            {/* Progress indicator */}
            <div className="mt-4 h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-200"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsiteLoader;
