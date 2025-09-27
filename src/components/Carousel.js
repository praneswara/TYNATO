import React, { useState, useEffect } from "react";

const slides = [
  {
    image: process.env.PUBLIC_URL + "/images/tynato1.jpg",
    title: "Welcome to TYNATO",
    description: "We bring innovation with technology.",
    buttonText: "Learn More",
    buttonLink: "/TYNATO/#/about",
  },
  {
    image: process.env.PUBLIC_URL + "/images/tynato2.jpg",
    title: "Our Services",
    description: "We provide AI, Cloud, and Cybersecurity solutions.",
    buttonText: "Explore Services",
    buttonLink: "/TYNATO/#/services",
  },
  {
    image: process.env.PUBLIC_URL + "/images/tynato3.jpg",
    title: "Join Our Team",
    description: "Grow your career with TYNATO.",
    buttonText: "View Openings",
    buttonLink: "/TYNATO/#/careers",
  },
  {
    image: process.env.PUBLIC_URL + "/images/tynato2.jpg",
    title: "Contact Us",
    description: "Reach Our Team To Grow Your Business",
    buttonText: "Contact Us",
    buttonLink: "TYNATO/#/contact",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Image */}
      <img
        src={slides[current].image}
        alt="carousel"
        className="w-full h-96 object-cover rounded-lg shadow"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="text-4xl font-bold mb-4">{slides[current].title}</h2>
        <p className="text-lg mb-6">{slides[current].description}</p>
        <a
          href={slides[current].buttonLink}
          className="px-6 py-2 text-gray-900 bg-white hover:text-white hover:bg-gray-900 rounded-lg"
        >
          {slides[current].buttonText}
        </a>
      </div>
    </div>
  );
};

export default Carousel;
