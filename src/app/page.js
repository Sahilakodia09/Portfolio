import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
