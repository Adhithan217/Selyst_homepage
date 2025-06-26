"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
  service: string;
  location: string;
}

const questions = [
  {
    question: "What type of service do you need?",
    options: ["One-time", "Recurring", "Emergency"],
  },
  {
    question: "When do you need the service?",
    options: ["Today", "This week", "Next week", "Just browsing"],
  },
  {
    question: "What is your budget range?",
    options: ["< ₹1,000", "₹1,000 – ₹5,000", "₹5,000+"],
  },
  {
    question: "Do you prefer a local professional?",
    options: ["Yes", "No", "Doesn’t matter"],
  },
  {
    question: "How would you like to be contacted?",
    options: ["Phone", "Email", "WhatsApp"],
  },
];

export default function QuestionnaireModal({
  onClose,
  service,
  location,
}: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const current = questions[step];
  const total = questions.length;
  const percent = Math.round(((step + 1) / total) * 100);

  const handleAnswer = (option: string) => {
    const updated = [...answers];
    updated[step] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      console.log("Answers submitted:", { service, location, answers });
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Let’s understand your needs
        </h2>
        <p className="text-gray-500 mb-4">
          You're looking for <strong>{service}</strong> in{" "}
          <strong>{location}</strong>
        </p>

        {/* Progress Tracker */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-1">
            Question {step + 1} of {total}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Question Block */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{current.question}</h3>
          <div className="flex flex-col gap-3">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`w-full text-left px-4 py-3 rounded-md border ${
                  answers[step] === opt
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                } transition`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!answers[step]}
            className="px-6 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            {step === total - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
