import React from "react";
import { Router } from "../components/Router";
import servicesData from "../data/servicesData";

const ServiceDetail = () => {
  return (
    <Router>
      {({ params }) => {
        const serviceKey = params[0];
        const service = servicesData[serviceKey];

        if (!service)
          return <p className="text-center p-10">Service not found</p>;

        return (
          <div className="p-10 max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold">{service.title}</h1>
            </div>

            {/* Alternating Sections */}
            <div className="space-y-20">
              {service.sections.map((section, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  >
                    {isEven ? (
                      <>
                        {/* Image Left */}
                        <div className="w-full h-[350px]">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        {/* Text Right */}
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">
                            {section.title}
                          </h2>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left */}
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">
                            {section.title}
                          </h2>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                        {/* Image Right */}
                        <div className="w-full h-[350px]">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </Router>
  );
};

export default ServiceDetail;
