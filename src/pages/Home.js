import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  // Counters state
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const targetProjects = 120;
    const targetClients = 75;
    const targetCountries = 20;
    const speed = 30;

    const interval = setInterval(() => {
      setProjects((prev) => (prev < targetProjects ? prev + 1 : prev));
      setClients((prev) => (prev < targetClients ? prev + 1 : prev));
      setCountries((prev) => (prev < targetCountries ? prev + 1 : prev));
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24">
      {/* Carousel */}
      <section className="relative">
        <Carousel />
      </section>

      {/* Welcome Section */}
      <section className="text-center max-w-5xl mx-auto space-y-6 px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome to TYNATO
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          At TYNATO, we believe the future belongs to businesses that adapt,
          innovate, and scale globally. With our headquarters in Dubai and
          presence in the USA, India, and West Africa, we are building a
          borderless ecosystem that connects businesses, technology, and people.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          TYNATO is more than just a technology company – we are a strategic
          growth partner. From empowering startups to optimizing enterprises,
          our expertise covers:
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700 text-lg">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            Digital Marketing & Global Lead Generation
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            AI & Automation-Driven Business Solutions
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            Custom Website & Mobile App Development
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            Blockchain, Cloud, & Cybersecurity Services
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            Healthcare IT & EMR Platforms
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
            Supply Chain & Smart Inventory Management
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6 text-center">
          We combine creativity, technology, and data to deliver results that
          matter.
        </p>
      </section>

      {/* Global Vision */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Global Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a connected business world, where companies can expand
          beyond borders, operate smarter, and scale securely.
        </p>
        <div className="space-y-2">
          <p className="text-lg text-gray-700 font-semibold">
            Mission: To empower businesses with innovative tools and strategies
            that unlock growth potential.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Vision: To become a global leader in digital transformation with
            trust, technology, and impact at the core.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Values: Innovation | Integrity | Partnership | Growth
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What Makes TYNATO Different?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          {[
            "Global Reach, Local Impact – Serving clients in UAE, USA, India, West Africa, and beyond.",
            "End-to-End Expertise – From strategy to execution, everything under one roof.",
            "Cutting-Edge Technology – AI, Blockchain, IoT, and Cloud solutions for future-ready businesses.",
            "Proven Results – Measurable growth, stronger security, and smarter operations.",
            "Client First – Every project is designed to fit your unique goals, not just templates.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services at a Glance
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          {[
            "Digital Marketing & Branding – SEO, paid ads, social media, and lead generation.",
            "Technology & Development – Websites, mobile apps, portals, and enterprise platforms.",
            "Cybersecurity & Cloud – Secure your business with next-gen protection.",
            "AI & Data Intelligence – Automation, chatbots, analytics, and predictive insights.",
            "Healthcare & EMR – Digitizing hospitals, prescriptions, and patient care systems.",
            "Supply Chain Solutions – Blockchain-powered inventory and logistics management.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Counters */}
      <section className="flex justify-center mt-16 gap-16 text-center">
        <div>
          <h2 className="text-4xl font-bold text-indigo-600">{projects}+</h2>
          <p className="text-gray-700 font-medium">Projects Completed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-600">{clients}+</h2>
          <p className="text-gray-700 font-medium">Clients Served</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-600">{countries}+</h2>
          <p className="text-gray-700 font-medium">Countries Reached</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
