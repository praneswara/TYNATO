import React from "react";

const About = () => (
  <div className="p-10 space-y-16 max-w-6xl mx-auto text-gray-800 leading-relaxed">
    {/* Header Section */}
    <section className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-gray-900">
        About Us – <span className="text-indigo-600">TYNATO</span>
      </h1>
      <p className="text-lg max-w-4xl mx-auto">
        At <strong>TYNATO</strong>, we believe every business has the potential
        to operate on a global stage. What differentiates us is not only our
        ability to innovate but also our commitment to execution at scale.
        Founded with the vision of bridging business and technology, TYNATO has
        become a trusted partner for organizations across Dubai, the USA, India,
        and West Africa.
      </p>
      <p className="text-lg max-w-4xl mx-auto">
        We go beyond providing services — we build ecosystems where businesses
        thrive. From digital growth strategies to AI-powered platforms, from
        healthcare IT to advanced cybersecurity and blockchain, our mission is
        to deliver solutions that enable enterprises to scale smarter, faster,
        and more securely.
      </p>
    </section>

    {/* Identity Section */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Our Identity
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 shadow-md rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            A Global Mindset
          </h3>
          <p>
            We serve clients across continents while respecting the nuances of
            local markets, ensuring every solution is both globally scalable and
            locally relevant.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            A Technology Edge
          </h3>
          <p>
            From AI and Blockchain to IoT and Cloud, we transform emerging
            technologies into practical solutions that create measurable impact
            for businesses.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            A People-First Approach
          </h3>
          <p>
            Behind every system we design are people. We prioritize strong
            partnerships, user-centric design, and solutions that empower both
            teams and customers.
          </p>
        </div>
      </div>
    </section>

    {/* Purpose Section */}
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Our Purpose</h2>
      <p className="text-lg max-w-3xl mx-auto">
        We exist to transform how businesses grow, scale, and sustain themselves
        in the digital era. Our purpose is clear and unwavering:
      </p>
      <p className="text-2xl font-semibold text-indigo-600 max-w-3xl mx-auto">
        To empower enterprises with digital-first solutions that convert
        challenges into opportunities and vision into measurable results.
      </p>
    </section>

    {/* Journey Section */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Our Journey So Far
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p>
            Launched with the vision of cross-border collaboration, creating a
            bridge between innovation and business impact.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p>
            Expanded across industries — including digital transformation,
            healthcare, enterprise technology, and cybersecurity.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p>
            Built a strong, diverse network of clients across UAE, USA, India,
            and Africa, earning trust through results.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p>
            Continuing to innovate and scale, positioning TYNATO as a global
            solutions provider for the future economy.
          </p>
        </div>
      </div>
    </section>

    {/* Why TYNATO Section */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Why Choose TYNATO?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 shadow-md rounded-xl">
          <h3 className="text-lg font-semibold text-indigo-600">
            Global Presence, Local Expertise
          </h3>
          <p>
            We combine international scale with deep local insights, enabling us
            to design solutions that resonate with every market we serve.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-xl">
          <h3 className="text-lg font-semibold text-indigo-600">
            End-to-End Solutions
          </h3>
          <p>
            From digital growth to enterprise security, TYNATO provides a
            comprehensive suite of services under one roof.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-xl">
          <h3 className="text-lg font-semibold text-indigo-600">
            Trusted by Enterprises Worldwide
          </h3>
          <p>
            Our long-standing relationships with clients across multiple regions
            reflect our reliability, consistency, and results.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-xl">
          <h3 className="text-lg font-semibold text-indigo-600">
            Future-Ready Innovation
          </h3>
          <p>
            We invest in research, innovation, and next-generation technologies
            to ensure our clients stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>

    {/* Closing Statement */}
    <section className="text-center py-10">
      <p className="text-2xl font-bold text-gray-900">
        At TYNATO, we are not just shaping businesses —{" "}
        <span className="text-indigo-600">we are shaping the future.</span>
      </p>
    </section>
  </div>
);

export default About;
