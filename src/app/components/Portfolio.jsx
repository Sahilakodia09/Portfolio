"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gym Fitness App",
    desc: "A full-featured fitness tracker built with React Native & Firebase, supporting workouts, diets, and progress tracking.",
    img: "/images/gymapp.png",
    link: "https://github.com/yourgithub/gymapp",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio site built using Next.js, TailwindCSS, and Framer Motion.",
    img: "/images/portfolio.png",
    link: "https://yourportfolio.vercel.app",
  },
  {
    title: "E-Commerce Store",
    desc: "A React-based e-commerce platform with cart, product filtering, and secure checkout.",
    img: "/images/ecommerce.png",
    link: "https://github.com/yourgithub/ecommerce",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-zinc-900 px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="text-indigo-500 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
