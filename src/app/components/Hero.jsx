"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden"
    >
      {/* Left Section with Tilt on Desktop */}
      <div
        className="flex flex-col justify-center items-start bg-gray-200 text-black w-full md:w-1/2 px-8 sm:px-10 md:px-20 py-16 md:py-0 relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
        }}
      >
        <motion.h3
          className="text-base sm:text-lg font-medium mb-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sahil Akodiya
        </motion.h1>

        <motion.h2
          className="text-gray-500 text-base sm:text-lg md:text-xl mb-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Front-end Developer / React Native Dev
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="mailto:yourmail@gmail.com"
            className="p-3 bg-white rounded shadow hover:scale-110 transition"
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="p-3 bg-white rounded shadow hover:scale-110 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="p-3 bg-white rounded shadow hover:scale-110 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center mt-10 md:mt-0">
        <motion.img
          src="/images/sahil.png"
          alt="Sahil Akodiya"
          className="object-contain w-3/4 sm:w-2/3 md:w-4/5 max-h-[80%] rounded-lg"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
