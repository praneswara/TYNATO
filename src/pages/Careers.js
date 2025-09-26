// src/pages/Careers.js
import React from "react";
import careerData from "../data/careerData";

const internshipOpenings = Object.keys(careerData).map((key) => ({
  id: key,
  title: careerData[key].title,
  image: careerData[key].image,
}));

const Careers = () => (
  <div className="p-10 space-y-12">
    <header className="text-center space-y-4">
      <h1 className="text-5xl font-bold text-gray-900">
        Your Career at TYNATO
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Explore opportunities and grow with us.
      </p>
    </header>

    {/* Internship cards */}
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {internshipOpenings.map((internship) => (
        <div
          key={internship.id}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition cursor-pointer text-center"
          onClick={() => (window.location.hash = `#/career/${internship.id}`)}
        >
          <img
            src={internship.image}
            alt={internship.title}
            className="h-32 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-900">
            {internship.title}
          </h2>
        </div>
      ))}
    </section>

    {/* Extra company sections */}
    <section className="mt-16 space-y-16 text-center px-6">
      {/* The TYNATO Way */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The TYNATO Way
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          At TYNATO, we don’t just build technology — we build possibilities.
          Our journey is driven by{" "}
          <span className="font-semibold">innovation</span>,
          <span className="font-semibold">collaboration</span>, and
          <span className="font-semibold">inspiration</span>. Every idea
          matters, every voice counts, and together, we transform bold visions
          into impactful realities.
        </p>
      </div>

      {/* Life at TYNATO */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Life at TYNATO
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          Working at TYNATO means being part of a close-knit family where
          <span className="font-semibold">growth</span> is constant,
          <span className="font-semibold">fun</span> is encouraged, and
          <span className="font-semibold">teamwork</span> is the foundation. We
          celebrate small wins, learn from challenges, and create memories
          through hackathons, team outings, and global collaborations.
        </p>
      </div>

      {/* Key Technologies */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key Technologies
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          From cutting-edge frameworks to future-ready platforms, we work with
          tools that shape tomorrow:
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6 text-gray-800">
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">React</li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            Node.js
          </li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">Python</li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            AI / ML
          </li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            Cloud Platforms
          </li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">DevOps</li>
        </ul>
      </div>

      {/* Where We Can Take You */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Where We Can Take You
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          Your career with TYNATO isn’t just a job — it’s a launchpad. Whether
          you’re looking to explore{" "}
          <span className="font-semibold">local opportunities</span>, work on{" "}
          <span className="font-semibold">global projects</span>, or expand your
          expertise into{" "}
          <span className="font-semibold">emerging technologies</span>, we’re
          here to open doors and support your journey every step of the way.
        </p>
      </div>
    </section>
  </div>
);

export default Careers;
