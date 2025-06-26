"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import QuestionnaireModal from "@/components/QuestionnaireModal";

export default function Hero() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (service && location) {
      setShowModal(true);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white h-screen flex items-center px-6">
      <div className="w-full text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        >
          Find Trusted Local Services
        </motion.h1>

        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6 h-[48px]"
        >
          <Typewriter
            words={[
              "Home Repairs",
              "Wedding Photography",
              "Yoga Training",
              "Event Planners",
              "Tutoring",
              "Personal Chefs",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 text-lg mb-10 px-4 md:px-40"
        >
          Tell us what you need and where — we’ll connect you with the right
          professional.
        </motion.p>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 px-4"
        >
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="What service do you need?"
            className="w-full md:w-[280px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Postcode or City"
            className="w-full md:w-[200px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <QuestionnaireModal
          service={service}
          location={location}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
