import React from "react";
import { navigate } from "../components/Router"; // use your router navigate
import servicesData from "../data/servicesData";

const Services = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.keys(servicesData).map((key) => {
          const service = servicesData[key];
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-6 shadow hover:shadow-xl hover:bg-gray-900 hover:text-white transition cursor-pointer"
              onClick={() => navigate(`service/${key}`)}
            >
              <img
                src={service.bannerImage}
                alt={service.title}
                className="h-24 mb-4"
              />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
