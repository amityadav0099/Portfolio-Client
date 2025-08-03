import React, { useState } from "react";
import { projects } from "../../constants";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDriveModal, setShowDriveModal] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowDriveModal(false);
  };

  const handleDriveOpen = () => {
    setShowDriveModal(true);
  };

  return (
    <section
      id="project"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {[0, 1, 2].includes(selectedProject.id) && (
                  <div className="flex justify-center">
                    <button
                      onClick={handleDriveOpen}
                      className="bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                    >
                      View
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Drive Modal */}
      {showDriveModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="px-4 pb-6 overflow-hidden">
              {selectedProject.id === 0 && (
                <iframe
                  src="https://drive.google.com/embeddedfolderview?id=1-ZqC0uylpW8DHAhwEu2XT82LLpKbgZyH#grid"
                  className="w-full h-[500px] rounded-xl border-0"
                  allow="autoplay"
                ></iframe>
              )}
              {selectedProject.id === 1 && (
                <iframe
                  src="https://drive.google.com/embeddedfolderview?id=1-g3GBdcSMn_6gxnKVqR1A-3kcHFO-7DZ#grid"
                  className="w-full h-[500px] rounded-xl border-0"
                  allow="autoplay"
                ></iframe>
              )}
              {selectedProject.id === 2 && (
                <iframe
                  src="https://drive.google.com/embeddedfolderview?id=1-b73vkjDES8WmeglG3kR4hFZnsF-tTXl#grid"
                  className="w-full h-[500px] rounded-xl border-0"
                  allow="autoplay"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
