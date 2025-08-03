import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        A brief overview of my professional experience and the role I held at the organization I worked with.
        </p>
      </div>

      {/* Experience Cards Centered */}
      <div className="flex flex-col items-center gap-12">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="w-full max-w-2xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* Flex container for image and text */}
            <div className="flex items-center space-x-6">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role and Company */}
              <div className="flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-400">{experience.desc}</p>

            {/* Skills */}
            {experience.skills && experience.skills.length > 0 && (
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
