"use client";

import { motion } from "framer-motion";

export default function ForProfessionals() {
  return (
    <section className="px-6 py-16 bg-white text-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are you a professional?
          </h2>
          <p className="mb-4 text-gray-600">
            Join Selyst and connect with customers actively looking for your
            services. Whether you're a photographer, trainer, cleaner, or
            consultant — we help grow your business with real leads.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Access real-time leads in your area</li>
            <li>Flexible subscription & pay-per-lead model</li>
            <li>Build your profile and reputation</li>
          </ul>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition">
            Join as a Professional
          </button>
        </motion.div>

        {/* Image content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src="/pexels-olly-3757371.jpg"
            alt="For Professionals"
            className="w-full h-[60vh] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
