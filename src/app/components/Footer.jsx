"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-10 px-6 md:px-20">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo / Text */}
        <h3 className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Sahil Akodiya
        </h3>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        Built with ❤️ using Next.js, TailwindCSS & Framer Motion
      </div>
    </footer>
  );
}
