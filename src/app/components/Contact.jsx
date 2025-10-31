"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-zinc-900 px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-12 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind or just want to say hi?  
        Feel free to reach out — I’d love to connect!
      </motion.p>

      {/* Contact Options */}
      <motion.div
        className="flex gap-8 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="mailto:sahilakodiya@gmail.com"
          className="p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition"
        >
          <FaEnvelope className="text-2xl text-indigo-500" />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition"
        >
          <FaGithub className="text-2xl text-indigo-500" />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="p-4 bg-white dark:bg-zinc-800 rounded-full shadow hover:scale-110 transition"
        >
          <FaLinkedin className="text-2xl text-indigo-500" />
        </a>
      </motion.div>

      {/* Contact Form (Optional) */}
      <motion.form
        className="w-full max-w-lg bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-indigo-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}
