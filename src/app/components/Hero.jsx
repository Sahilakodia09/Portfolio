"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden pt-16 md:pt-0 rounded-2xl shadow-xl bg-black/90"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center md:items-start bg-gray-200 text-black w-full md:w-1/2 px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-0 relative md:clip-hero">
        <motion.h3
          className="text-base sm:text-lg font-medium mb-2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sahil Akodiya
        </motion.h1>

        <motion.h2
          className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-center md:text-left"
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
            href="https://mail.google.com/mail/?view=cm&to=sahilakodiya09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow hover:scale-110 transition-transform duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/Sahilakodia09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahilakodiya09/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center py-8 md:py-0">
        <motion.img
          src="/images/sahil.png"
          alt="Sahil Akodiya"
          className="object-cover w-[60%] h-full max-h-[400px] md:max-h-[80%] rounded-2xl border-4 border-white/20 shadow-2xl mt-15"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>

      <style jsx>{`
        .md\\:clip-hero {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
