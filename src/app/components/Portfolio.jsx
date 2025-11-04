"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E flat Book",
    desc: "A society management app I built to digitize everything - from adding tenants and visitors to handling complaints and online rent payments. It's got real-time notifications using Firebase Cloud Messaging, and visitors can share QR codes for entry. Basically makes society life way easier.",
    img: "/images/EflatBook.jpeg",
    link: "https://github.com/yourgithub/eflat-book",
  },
  {
    title: "E flat Book Guard",
    desc: "This is the guard side of the society app. Guards get real-time notifications, can translate Hindi to English with a button, allow visitors and vehicles by scanning QR codes, and check all visitor history. Built with Firebase for the real-time stuff - makes security management pretty smooth.",
    img: "/images/Guard.jpeg",
    link: "https://github.com/yourgithub/eflat-book-guard",
  },
  {
    title: "Roc The Block",
    desc: "An events platform showing what's happening around American neighborhoods. You can browse events and locations, book tickets, and register directly from the app. It's all about helping people discover and join local events easily.",
    img: "/images/roc-the-block.jpeg", // You might want to update this image
    link: "https://github.com/yourgithub/roc-the-block",
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
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex-1 p-4 flex items-center justify-center bg-gray-200 dark:bg-zinc-700 min-h-[200px]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto max-h-[180px] object-contain rounded-lg"
              />
            </div>
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
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-medium cursor-pointer"
              >
                Check it out →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}