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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-30 -z-10"
          src={gcsVideo}
          muted
          autoPlay
          loop
          playsInline
        ></video>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Ground Control Station
            </h1>
            <p className="text-2xl sm:text-3xl text-neutral-300 mt-6 tracking-wide">
              Mission-Critical Flight Simplified
            </p>
          </div>
        </div>
      </section>

      {/* New Flight Data Management Infographic Section */}
      <section className="py-20 relative overflow-hidden">
        {/* <img
          src={imgess}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
          alt="background"
        /> */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
          >
            Flight Data Management
          </motion.h2>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-1">
              {dataManagementFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="relative bg-[#0A192F]/80 backdrop-blur-sm p-6 rounded-lg text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-neutral-300 mb-8 backdrop-blur-sm">
              Our advanced cloud-based system ensures your mission data is
              always secure, accessible, and shareable across your entire team.
              Enhance operational efficiency by leveraging historical data and
              proven flight parameters.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Enhanced Reliability",
                "Team Collaboration",
                "Mission Efficiency",
              ].map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-[#0A192F]/80 backdrop-blur-sm p-4 rounded-lg"
                >
                  <h4 className="text-white font-bold mb-2">{title}</h4>
                  <p className="text-sm text-neutral-300">
                    {index === 0 &&
                      "Redundant cloud backup ensures no data loss"}
                    {index === 1 &&
                      "Share mission data instantly with team members"}
                    {index === 2 && "Duplicate successful flight parameters"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Background Decorative Elements */}
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-blue-400 rounded-full opacity-10"></div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        {/* <img
          src={imgess}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          alt="background"
        /> */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="py-20 relative min-h-screen flex items-center">
        {/* Background Image */}
        <img
          src={imgess}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
          alt="Drone operator planning"
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Industrial Applications
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Our GCS Pro revolutionizes drone operations across industries.
                With just a few taps, create complex flight routes and execute
                missions with unprecedented precision and reliability. Perfect
                for professionals who demand excellence in every flight.
              </p>
            </motion.div>

            {/* Industry Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
                    className="bg-[#0A192F]/80 backdrop-blur-sm p-6 rounded-lg text-center 
                                border border-transparent hover:border-blue-500 transition-all duration-300
                                h-full flex flex-col items-center justify-between min-h-[200px]"
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-16 h-16 rounded-full bg-blue-500/10 
                                  flex items-center justify-center group-hover:bg-blue-500/20 
                                  transition-all duration-300 mb-4"
                    >
                      <span className="text-3xl">{app.icon}</span>
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-white font-bold text-lg mb-2">
                        {app.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-blue-400 text-sm sm:text-base">
                  Compatible with all major drone platforms and cameras
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
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
            className="absolute top-1/4 left-10 w-32 h-32 border border-blue-400 rounded-full"
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
            className="absolute bottom-1/4 right-10 w-48 h-48 border border-blue-400 rounded-full"
          />
        </div>
      </section>
    </div>
  );
};

export default GCS;
