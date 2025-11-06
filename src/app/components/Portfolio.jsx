"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "eflatbook",
    desc: "A society management app I built to digitize everything - from adding tenants and visitors to handling complaints and online rent payments. It's got real-time notifications using Firebase Cloud Messaging, and visitors can share QR codes for entry. Basically makes society life way easier.",
    img: "/images/EflatBook.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.eflatbook&pcampaignid=web_share",
  },
  {
    title: "eflatbook Guard",
    desc: "This is the guard side of the society app. Guards get real-time notifications, can translate Hindi to English with a button, allow visitors and vehicles by scanning QR codes, and check all visitor history. Built with Firebase for the real-time stuff - makes security management pretty smooth.",
    img: "/images/Guard.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.eflatbook.guard&pcampaignid=web_share",
  },
  {
    title: "Milan",
    desc: "A US-based dating app where your perfect match is just a swipe away. I built it with real-time chat and notifications using Firebase, subscription plans for premium features, advanced filters to find people based on your preferences, and lots of other cool dating app features.",
    img: "/images/milan.png",
    link: "https://play.google.com/store/apps/details?id=com.Milan&pcampaignid=web_share",
  },
  {
    title: "Roc The Block",
    desc: "An events platform showing what's happening around American neighborhoods. You can browse events and locations, book tickets, and register directly from the app. It's all about helping people discover and join local events easily.",
    img: "/images/roc-the-block.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.roctheblockinc&pcampaignid=web_share",
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
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col"
          >
            <div className="relative w-full h-[300px] bg-gray-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
              <img
                src={project.img}
                alt={project.title}
                className="w-auto h-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
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