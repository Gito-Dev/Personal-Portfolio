import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import fuzetools from "../assets/project1.png";

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative w-full sm:w-[300px] h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full rounded-2xl border border-white/20 bg-[#1a1a1a] bg-opacity-40 overflow-hidden">
            <div className="relative h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Updated overlay with full coverage and better gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20">
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 1).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-[#e84644]/20 text-[#e84644] rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 w-full">
                    <button className="w-full px-4 py-2 bg-[#e84644] text-white rounded-lg hover:bg-[#e84644]/90 transition-all text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full rounded-2xl border border-white/20 bg-[#1a1a1a] bg-opacity-40 p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">
              {project.title}
            </h3>
            <div className="space-y-4">
              <h4 className="text-base font-medium text-gray-200">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-[#e84644]/20 text-[#e84644] rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <h4 className="text-base font-medium text-gray-200 mb-2">
                  Description
                </h4>
                <p className="text-gray-400 text-xs">{project.description}</p>
              </div>
            </div>
            <div className="mt-auto w-full">
              <div className="flex gap-4 justify-center mb-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#e84644] transition-colors text-xs"
                  >
                    <FaGlobe size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#e84644] transition-colors text-xs"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="w-full px-4 py-2 bg-[#e84644] text-white rounded-lg hover:bg-[#e84644]/90 transition-all text-sm"
              >
                Flip Back
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "FuzeTools",
      description:
        "Developer utility suite featuring QR code generation, color palette tools, and more. Built with Vite and React for optimal performance.",
      image: fuzetools,
      technologies: ["Tools App", "React", "Vite", "TailwindCSS", "JavaScript"],
      website: "https://fuzetools.vercel.app",
      github: "https://github.com/yourusername/fuzetools",
    },
    // Add more projects here
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
