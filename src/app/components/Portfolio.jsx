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
  {
    title: "Tea Of Jax",
    desc: "A restaurant ordering app where you can browse the menu, add stuff to your cart, and track your order right from checkout to delivery. I integrated Razorpay for secure payments and Firebase notifications so you always know your order status - no more wondering where your food is.",
    img: "/images/TeaOfJax.webp",
    link: "https://play.google.com/store/apps/details?id=com.teaofjax&pcampaignid=web_share",
  },
  {
    title: "Queen77",
    desc: "A live results app that shows draw outcomes in real time. The tricky part was building a timezone-safe scheduling system so the countdown and reset timing stay accurate no matter where you are. Also added Firebase auth and local notifications so you never miss a result.",
    img: "/images/queen.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.tharway.queen77&pcampaignid=web_share",
  },
  {
    title: "Bird Sort",
    desc: "A colorful bird-sorting puzzle game I built with PixiJS - 100 levels of smooth, canvas-based animations. I designed a proper difficulty-tiered star rating system instead of a generic formula, and optimized rendering so it runs smoothly even on lower-end phones.",
    img: "/images/BIrd.webp",
    link: "https://play.google.com/store/apps/details?id=com.jdpcbirdsort&pcampaignid=web_share",
  },
  {
    title: "Slot Game",
    desc: "A casino-style slot machine game built with PixiJS - animated reels, win celebrations, the whole spin sequence feel. It handles real-time balance updates and wallet sync with the backend, all while keeping the animations buttery smooth.",
    img: "/images/slot.png",
    link: "https://icy-moss-0a36e5d10.7.azurestaticapps.net",
  },
  {
    title: "GacorGame",
    desc: "A fast, responsive web-based gaming dashboard built with React.js, optimized to run smoothly right in the browser. Handles real-time balance updates, wallet sync, and secure API communication behind the scenes.",
    img: "/images/gacore.png",
    link: null,
  },
  {
    title: "Poker Desk",
    desc: "A real-time multiplayer poker game I'm currently building with React Native and a Socket.IO backend - live table state, turn sequencing, multi-round gameplay. The fun part was engineering custom card-dealing and chip-bet animations with Reanimated, plus connection-recovery logic so gameplay stays smooth even on flaky networks.",
    img: "/images/poker.jpeg",
    link: null,
    // badge: "In Development",
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
              {project.badge && (
                <span className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.badge}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.desc}
              </p>
              <div className="mt-auto">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline font-medium cursor-pointer"
                  >
                    Check it out →
                  </a>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 font-medium">
                    {/* Coming soon */}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}