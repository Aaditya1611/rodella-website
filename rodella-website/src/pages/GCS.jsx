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
     

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden pt-2">
      <Navbar />
      <div className="flex items-center h-full">
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

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#112240]/80 backdrop-blur-sm rounded-lg p-8 sm:p-12 border border-blue-500/20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Need a Custom Build GCS ?
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your specific requirements and create a tailored
                Ground Control Solution for your drone operations.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg 
                         bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300
                         transform hover:scale-105 group"
              >
                Contact Us
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  
                </motion.span>
              </Link>
            </motion.div>

           
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default GCS;
