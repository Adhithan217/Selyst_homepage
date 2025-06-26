"use client";

import {
  FaHome,
  FaHeart,
  FaUserFriends,
  FaSpa,
  FaTools,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { label: "Home", icon: <FaHome className="text-2xl text-blue-600" /> },
  { label: "Wedding", icon: <FaHeart className="text-2xl text-pink-500" /> },
  {
    label: "Events",
    icon: <FaUserFriends className="text-2xl text-purple-500" />,
  },
  { label: "Wellness", icon: <FaSpa className="text-2xl text-green-500" /> },
  { label: "Repairs", icon: <FaTools className="text-2xl text-yellow-500" /> },
  { label: "Lessons", icon: <FaBook className="text-2xl text-indigo-500" /> },
];

export default function PopularServices() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Popular Services
        </h2>
        <p className="text-gray-600 mt-2">
          Quickly connect with top professionals across categories
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 transition p-4 rounded-lg shadow-sm cursor-pointer"
          >
            {service.icon}
            <span className="mt-2 text-sm font-medium text-gray-700">
              {service.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
