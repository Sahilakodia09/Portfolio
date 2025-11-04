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
            Hi there! I'm <span className="font-semibold text-black dark:text-white">Sahil Akodiya</span>, a front-end developer who loves turning ideas into clean, working code. I've been building stuff with web technologies for a while now, and honestly, I just enjoy making things that look good and work well.
          </p>
          <p className="mb-6">
            My main tools are <span className="font-medium">React.js and React Native</span> - I use them for pretty much everything these days. For styling, I usually reach for <span className="font-medium">HTML, CSS, and Bootstrap</span> when I need to move fast, and I'm getting comfortable with <span className="font-medium">Tailwind CSS</span> too. I've also started working with <span className="font-medium">Next.js</span> for some projects and really like how it handles things.
          </p>
          <p>
            When I'm not coding, I'm usually learning new stuff or working on personal projects. I believe good code should be simple and readable, and I try to keep things straightforward in my work. Always looking to improve and take on new challenges!
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            What I Work With
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            React • React Native • JavaScript • HTML • CSS • Bootstrap • Next.js • Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}