"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden pt-16 md:pt-0 bg-black text-white"
    >
      {/* Right Section for mobile (image on top) */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center md:order-2">
        <motion.img
          src="/images/sahil.png"
          alt="Sahil Akodiya"
          className="object-cover w-full md:w-[80%] h-[70vh] md:h-[80%] rounded-none md:rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Dark overlay text for mobile */}
        <div className="absolute bottom-0 left-0 w-full bg-black/70 px-6 py-6 md:hidden">
          <h3 className="text-sm text-gray-300">Hi, I am</h3>
          <h1 className="text-2xl font-bold">Sahil Akodiya</h1>
          <h2 className="text-sm text-gray-400 mb-4">
            Front-end Developer / React Native Dev
          </h2>

          <div className="flex space-x-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=sahilakodiya09@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-black rounded-full shadow hover:scale-110 transition-transform duration-300"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="https://github.com/Sahilakodia09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-black rounded-full shadow hover:scale-110 transition-transform duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahilakodiya09/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-black rounded-full shadow hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Left Section for desktop */}
      <div className="hidden md:flex flex-col justify-center items-start bg-gray-200 text-black w-full md:w-1/2 px-16 lg:px-20 relative clip-hero">
        <motion.h3
          className="text-lg font-medium mb-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          className="text-6xl font-extrabold mb-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sahil Akodiya
        </motion.h1>

        <motion.h2
          className="text-gray-600 text-xl mb-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Front-end Developer / React Native Dev
        </motion.h2>

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
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/Sahilakodia09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahilakodiya09/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-hero {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
