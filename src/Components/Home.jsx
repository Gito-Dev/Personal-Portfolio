import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "About" },
    { id: "tab2", label: "Projects" },
    { id: "tab3", label: "Contact" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <div>About Content</div>;
      case "tab2":
        return <div>Projects Content</div>;
      case "tab3":
        return <div>Contact Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen p-4">
      <div className="flex flex-col md:flex-row h-full gap-4">
        {/* sidebar */}
        <div className="w-full md:w-1/4 h-1/4 md:h-full group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20 ">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative flex flex-col h-full w-full p-6 text-gray-800">
            <div className="w-full flex items-center gap-4">
              <button
                className="w-8 h-8 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
              <h1 className="text-balance text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent sm:text-4xl drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]">
                Gito Dev
              </h1>
            </div>

            {/* Profile Info Section */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-medium text-gray-200">
                Frontend Developer
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Turning lines of code into smooth, engaging, and unforgettable
                experiences.
              </p>
              <div className="flex items-center flex-wrap text-sm text-gray-400">
                <div className="flex items-center whitespace-nowrap">
                  <span>21 y/o</span>
                  <span className="text-[#e84644] mx-2">|</span>
                  <span>Based in Bulgaria</span>
                  <span className="text-[#e84644] mx-2">|</span>
                  <span>Cs Student</span>
                </div>
              </div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-[#e84644]/30">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
                  View Resume
                </span>
              </button>

              {/* About Me Section */}
              <h2 className="text-xl font-medium text-gray-200 mt-8 mb-4">
                About Me
              </h2>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-[#e84644] text-lg">•</span>
                  <p>
                    Frontend Developer , learning my way to full Stack
                    Developer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#e84644] text-lg">•</span>
                  <p>
                    Specialized in crafting responsive and Creative user
                    interfaces using mainly React and modern web technologies.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#e84644] text-lg">•</span>
                  <p>
                    Deeply enthusiastic to learn new Technologies and Methods
                  </p>
                </div>
              </div>

              {/* Contact & Social Links */}
              <h2 className="text-xl font-medium text-gray-200 mt-8 mb-4">
                Contact Me
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://tiktok.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
                  >
                    <FaTiktok size={20} />
                  </a>
                </div>
              </div>
              {/* end of contact section */}
            </div>
          </div>
        </div>

        {/* content center  */}
        <div className="grow h-3/4 md:h-full group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative flex flex-col h-full w-full p-6">
            {/* Tabs Container */}
            <div className="flex justify-center items-center gap-2 mb-6">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 border border-transparent hover:text-[#e84644] ${
                      activeTab === tab.id ? "text-[#e84644]" : "text-gray-400"
                    }`}
                  >
                    {tab.label}
                  </button>
                  {index < tabs.length - 1 && (
                    <span className="text-[#e84644]">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
