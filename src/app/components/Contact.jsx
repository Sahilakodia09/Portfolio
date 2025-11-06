"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-zinc-900 px-4 sm:px-6 md:px-20 py-16 md:py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-8 md:mb-12 text-base sm:text-lg px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm always open to discussing new opportunities and interesting projects. 
        Let's create something amazing together!
      </motion.p>

      {/* Contact Options */}
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-14 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="tel:+919588298528"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300 flex flex-col items-center"
          aria-label="Phone"
        >
          <FaPhone className="text-xl sm:text-2xl text-indigo-500 mb-1" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Call</span>
        </a>
        <a
          href="mailto:sahilakodiya09@gmail.com"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300 flex flex-col items-center"
          aria-label="Email"
        >
          <FaEnvelope className="text-xl sm:text-2xl text-indigo-500 mb-1" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Email</span>
        </a>
        <a
          href="https://github.com/Sahilakodia09"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300 flex flex-col items-center"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl sm:text-2xl text-indigo-500 mb-1" />
          <span className="text-xs text-gray-600 dark:text-gray-400">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sahilakodiya09/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300 flex flex-col items-center"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl sm:text-2xl text-indigo-500 mb-1" />
          <span className="text-xs text-gray-600 dark:text-gray-400">LinkedIn</span>
        </a>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
          <strong>Phone:</strong> +91 95882 98528
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          <strong>Email:</strong> sahilakodiya09@gmail.com
        </p>
      </motion.div>
    </section>
  );
}