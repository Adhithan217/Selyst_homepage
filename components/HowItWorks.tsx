"use client";

import { motion } from "framer-motion";
import { FaSearch, FaQuestionCircle, FaLock } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: "Tell Us What You Need",
    description: "Customers select their service and location to get started.",
  },
  {
    icon: <FaQuestionCircle className="text-blue-600 text-3xl" />,
    title: "Answer a Few Questions",
    description: "We ask 5–7 quick questions to better understand the request.",
  },
  {
    icon: <FaLock className="text-blue-600 text-3xl" />,
    title: "Professionals Unlock & Respond",
    description: "Professionals pay to unlock contact info and reach out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
