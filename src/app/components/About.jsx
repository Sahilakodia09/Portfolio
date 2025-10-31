"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-zinc-900 px-6 sm:px-10 md:px-20 py-16 md:py-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-2/3 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6">
            Hey! I’m <span className="font-semibold text-black dark:text-white">Sahil Akodiya</span>, a passionate{" "}
            <span className="text-indigo-500">Front-end Developer</span> and{" "}
            <span className="text-indigo-500">React Native Engineer</span>.
          </p>
          <p className="mb-6">
            I love crafting beautiful interfaces and seamless mobile experiences using technologies like{" "}
            <span className="font-medium">React.js, Next.js, and React Native</span>.
          </p>
          <p>
            Outside of coding, you’ll often find me at the gym, editing gaming videos, or learning something new 🚀
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Tech Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            HTML • CSS • Bootstrap • JavaScript • React • React Native • Next.js
          </p>
        </motion.div>
      </div>
    </section>
  );
}
