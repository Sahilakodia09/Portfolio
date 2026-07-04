"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    "Built and shipped 9+ production apps for Android & iOS using React Native",
    "Integrated Firebase Cloud Messaging for push notifications & real-time updates across every app",
    "Implemented Redux Toolkit + Redux Persist for predictable, offline-first state management",
    "Integrated Razorpay & Stripe payment gateways for secure in-app payments",
    "Owned the full release pipeline - Google Play Console & App Store Connect",
    "Implemented QR code flows, secure authentication, and role-based access across multiple apps",
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-zinc-900 px-6 sm:px-10 md:px-20 py-16 md:py-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="max-w-4xl w-full bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start sm:items-center gap-4 mb-6 flex-col sm:flex-row">
          <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-7 h-7 text-indigo-500" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Android and iOS Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              JDPC Global Pvt. Ltd. &middot; Jaipur, India
            </p>
            <p className="text-sm text-indigo-500 font-medium mt-1">
              June 2023 - Present
            </p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
          3 years of hands-on experience developing and maintaining production
          Android & iOS apps with React Native - delivering smooth UI, real-time
          systems, and secure payment flows for real users at scale.
        </p>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {highlights.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}