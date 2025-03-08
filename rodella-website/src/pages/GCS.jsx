import { useState } from "react";
import Navbar from "../components/Navbar";
import gcsimage from "../assets/images/QGroundControl.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import imgess from "../assets/images/fixed-wing1.png";
import { motion } from "framer-motion";
import gcsVideo from "../assets/videos/GCS-Working.mp4";

const features = [
  {
    id: 1,
    title: "Flight Data Management",
    description:
      "Back up flight data securely on the cloud, giving missions higher reliability and accuracy. Reference historical information on flight missions, aircrafts, members, and flight logs.",
    icon: "📊",
  },
  {
    id: 2,
    title: "Fleet and Pilot Management",
    description:
      "Manage pilots and drones through the creation of teams, making missions more coordinated. Designate roles with different permissions to improve communication.",
    icon: "👥",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "Improve efficiency by tracking individual projects and streamlining the management process. Grant access to project status on a per-project basis.",
    icon: "📋",
  },
  {
    id: 4,
    title: "3D Map Planning",
    description:
      "Generate efficient flight paths automatically after setting required flight zones and camera parameters. Create detailed 3D maps with precision.",
    icon: "🗺️",
  },
];

const useCases = [
  {
    title: "Architecture",
    description: "Create detailed 3D models of buildings and structures",
  },
  {
    title: "Precision Agriculture",
    description: "Plan and execute efficient crop monitoring missions",
  },
  {
    title: "Electrical Inspections",
    description: "Conduct thorough infrastructure inspections",
  },
  {
    title: "Search and Rescue",
    description: "Plan and coordinate emergency response missions",
  },
];

// Add new section after Hero and before Features Grid
const dataManagementFeatures = [
  {
    id: 1,
    icon: "☁️",
    title: "Secure Cloud Backup",
    description: "All flight data securely stored and encrypted in the cloud",
  },
  {
    id: 2,
    icon: "📱",
    title: "Multi-Device Sync",
    description: "Seamless synchronization across all team devices",
  },
  {
    id: 3,
    icon: "📊",
    title: "Historical Data",
    description: "Access complete mission history and analytics",
  },
  {
    id: 4,
    icon: "🔄",
    title: "Mission Duplication",
    description: "Easily duplicate successful flight parameters",
  },
];

const industrialApplications = [
  {
    icon: "🏗️",
    title: "Architecture",
    description: "Create detailed 3D models and site surveys",
  },
  {
    icon: "🌾",
    title: "Precision Agriculture",
    description: "Monitor crop health and plan irrigation",
  },
  {
    icon: "⚡",
    title: "Electrical Inspections",
    description: "Inspect power lines and infrastructure",
  },
  {
    icon: "📸",
    title: "Aerial Imaging",
    description: "Capture high-resolution aerial photography",
  },
  {
    icon: "🎯",
    title: "Safety Control",
    description: "Monitor and inspect safety conditions",
  },
  {
    icon: "🆘",
    title: "Search and Rescue",
    description: "Coordinate emergency response missions",
  },
];

const GCS = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-30 -z-10"
          src={gcsVideo}
          muted
          autoPlay
          loop
          playsInline
        ></video>
        <div className="w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-wide text-white font-bold animate-fade-in">
              Ground Control Station
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 mt-4 sm:mt-6 tracking-wide">
              Mission-Critical Flight Simplified
            </p>
          </div>
        </div>
      </section>

      {/* New Flight Data Management Infographic Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 sm:mb-16"
          >
            Flight Data Management
          </motion.h2>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {dataManagementFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="relative bg-[#0A192F]/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center h-full"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 sm:mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#112240]/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg h-full"
              >
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                Industrial Applications
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Our GCS Pro revolutionizes drone operations across industries.
                With just a few taps, create complex flight routes and execute
                missions with unprecedented precision and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {industrialApplications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <div
                    className="bg-[#0A192F]/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center 
                                border border-transparent hover:border-blue-500 transition-all duration-300
                                h-full flex flex-col items-center justify-between min-h-[180px] sm:min-h-[200px]"
                  >
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 
                                  flex items-center justify-center group-hover:bg-blue-500/20 
                                  transition-all duration-300 mb-4"
                    >
                      <span className="text-2xl sm:text-3xl">{app.icon}</span>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">
                        {app.title}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm hidden sm:block">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 sm:mt-16 text-center"
            >
              <div className="inline-block bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-blue-400 text-sm sm:text-base">
                  Compatible with all major drone platforms and cameras
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GCS;
