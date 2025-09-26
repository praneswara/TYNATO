import React from "react";
import careerData from "../data/careerData";

const CareerDetail = ({ jobId }) => {
  const job = careerData[jobId];

  if (!job) {
    return <div className="p-10 text-center">Job not found.</div>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <img src={job.image} alt={job.title} className="h-40 mx-auto" />
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        {job.title}
      </h1>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {job.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="text-center">
        <a
          href={`mailto:${job.email}?subject=Application for ${job.title}`}
          className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareerDetail;
