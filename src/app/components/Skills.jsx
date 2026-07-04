"use client";
import { motion } from "framer-motion";
import { Smartphone, Zap, Gamepad2, Layers, CreditCard, Rocket } from "lucide-react";

export default function Skills() {
  const skills = [
    { 
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />, 
      title: "React Native Development", 
      desc: "Building and shipping production Android & iOS apps with React Native - smooth UI, optimized navigation, and responsive layouts." 
    },
    { 
      icon: <Zap className="w-8 h-8 text-indigo-500" />, 
      title: "Real-Time Systems", 
      desc: "Live chat, push notifications, and real-time updates using Firebase Cloud Messaging, Firestore, and Socket.IO." 
    },
    { 
      icon: <Gamepad2 className="w-8 h-8 text-indigo-500" />, 
      title: "Game & Animation", 
      desc: "Canvas-based games and animation systems built with PixiJS and React Native Reanimated." 
    },
    { 
      icon: <Layers className="w-8 h-8 text-indigo-500" />, 
      title: "State Management", 
      desc: "Predictable, offline-first state using Redux Toolkit, Redux Persist, and AsyncStorage." 
    },
    { 
      icon: <CreditCard className="w-8 h-8 text-indigo-500" />, 
      title: "Payments & Auth", 
      desc: "Secure in-app payments with Razorpay and Stripe, plus Firebase Authentication and Google Sign In." 
    },
    { 
      icon: <Rocket className="w-8 h-8 text-indigo-500" />, 
      title: "Release & Performance", 
      desc: "Owning apps end-to-end through Google Play Console and App Store Connect, with a focus on performance optimization." 
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-zinc-900 px-6 sm:px-10 md:px-20 py-16 md:py-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What I Do
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center mb-4">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}