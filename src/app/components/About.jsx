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
            Hi there! I'm <span className="font-semibold text-black dark:text-white">Sahil Akodiya</span>, a Frontend & React Native Developer with 3 years of experience building and shipping production apps for Android and iOS. I've worked across society management platforms, dating apps, real-time games, and payment-driven ordering apps - and I still enjoy the moment an idea turns into clean, working code.
          </p>
          <p className="mb-6">
            My core stack is <span className="font-medium">React Native and React.js</span>, backed by <span className="font-medium">Redux Toolkit, Firebase, and RESTful APIs</span> for state management and real-time features like push notifications and live chat. For game and animation-heavy work, I build with <span className="font-medium">PixiJS</span>, and for payments I integrate <span className="font-medium">Razorpay and Stripe</span>. I've taken multiple apps end-to-end - from architecture through Google Play Console and App Store Connect release.
          </p>
          <p>
            When I'm not shipping features, I'm usually deep in animation systems or sprite pipelines for game projects, or picking apart a tricky socket bug. I care about performance and readable code, and I'm always looking for the next hard problem to solve.
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
            React Native • React.js • PixiJS • Redux Toolkit • Firebase • Razorpay • Stripe • REST APIs • JavaScript • Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}