import {
  animate,
  motion,
  useMotionValue,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
};

export default Counter;