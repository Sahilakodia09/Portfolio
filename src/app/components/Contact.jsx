"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-8 md:mb-12 text-base sm:text-lg px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind or just want to say hi?  
        Feel free to reach out — I'd love to connect!
      </motion.p>

      {/* Contact Options */}
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-14 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="mailto:sahilakodiya@gmail.com"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300"
          aria-label="Email"
        >
          <FaEnvelope className="text-xl sm:text-2xl text-indigo-500" />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl sm:text-2xl text-indigo-500" />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition-transform duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl sm:text-2xl text-indigo-500" />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-md sm:max-w-lg bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 mx-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4 sm:gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500 text-sm sm:text-base resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}