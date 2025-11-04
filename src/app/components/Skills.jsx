"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Cpu, Layers, Rocket } from "lucide-react";

export default function Skills() {
  const skills = [
    { 
      icon: <Code2 className="w-8 h-8 text-indigo-500" />, 
      title: "React Development", 
      desc: "Building interactive components and applications using React.js and Next.js." 
    },
    { 
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />, 
      title: "Mobile Apps", 
      desc: "Creating cross-platform mobile applications with React Native." 
    },
    { 
      icon: <Globe className="w-8 h-8 text-indigo-500" />, 
      title: "Web Fundamentals", 
      desc: "Solid foundation in HTML, CSS, and JavaScript for building web interfaces." 
    },
    { 
      icon: <Layers className="w-8 h-8 text-indigo-500" />, 
      title: "Styling & Design", 
      desc: "Working with Bootstrap for rapid development and learning Tailwind CSS." 
    },
    { 
      icon: <Cpu className="w-8 h-8 text-indigo-500" />, 
      title: "Clean Code", 
      desc: "Focus on writing simple, readable, and maintainable code." 
    },
    { 
      icon: <Rocket className="w-8 h-8 text-indigo-500" />, 
      title: "Always Learning", 
      desc: "Continuously exploring new technologies and improving my skills." 
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