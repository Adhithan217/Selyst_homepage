"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Meera Patel",
    location: "Bengaluru",
    quote:
      "Selyst helped me find a personal chef within hours. The questions made it super easy!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rahul Deshmukh",
    location: "Pune",
    quote:
      "I was able to grow my freelance business by accessing real leads through Selyst.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Divya Sharma",
    location: "Delhi",
    quote:
      "Very smooth experience. Found a yoga trainer for my mom with just a few clicks!",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "Amit Kapoor",
    location: "Hyderabad",
    quote:
      "Reliable platform for both customers and service providers. Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-2">
          Loved by customers and professionals alike
        </p>
      </div>

      <motion.div
        ref={carouselRef}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] md:min-w-[350px] bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
