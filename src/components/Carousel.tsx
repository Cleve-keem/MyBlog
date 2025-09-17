import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // cleanup
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // prevent duplicates
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="overflow-hidden w-[800px] mx-auto relative">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -((images.length - 1) * 800), right: 0 }}
        animate={{ x: -current * 800 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onDragStart={stopAutoSlide}
        onDragEnd={startAutoSlide}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="w-[800px] h-[400px] object-cover"
          />
        ))}
      </motion.div>

      {/* Dots */}
    </div>
  );
}
