import Navbar from "../components/Navbar";
import { useState } from "react";
import SAP6 from "../components/SAP6";
import SAP7 from "../components/SAP7";
import SAP9 from "../components/SAP9";
import { motion } from "framer-motion";
import firstImage from "./../assets/images/fixed-wing2.jpg";
import { ArrowRightIcon, Squares2X2Icon, ShieldCheckIcon, Cog8ToothIcon, UserGroupIcon, GlobeAltIcon, WrenchScrewdriverIcon, CubeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Aircrafts = () => {
  const [selectedSAP, setSelectedSAP] = useState('sap6');
  const [imageLoaded, setImageLoaded] = useState(false);

  const selectButton = (active) =>
    `selectx px-4 py-2 rounded-lg m-1 cursor-pointer text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
      active ? 'bg-[#4CAF50] text-black shadow-lg' : 'bg-[#1a1a1a] text-[#4CAF50] border border-[#444] hover:border-[#4CAF50]'
    }`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <section className="pt-2">
        <Navbar />
      </section>



<motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] text-[#eee] font-sans relative"
      >
        <div className="absolute inset-0 bg-black" style={{ zIndex: 0 }} />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-white mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">Standard Aeriel Platform Specifications</h1>
            <div className="flex justify-center gap-4">
              <button
                className={`text-white bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 px-6 py-3 rounded-md text-lg sm:text-xl text-center opacity-90 hover:opacity-100 ${
                  selectedSAP === 'sap6' ? 'ring-2 ring-[#fff]' : ''
                }`}
                onClick={() => {
                  setSelectedSAP('sap6');
                  setImageLoaded(false);
                }}
              >
                SAP-6
              </button>
              <button
                className={`text-white bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 px-6 py-3 rounded-md text-lg sm:text-xl text-center opacity-90 hover:opacity-100 ${
                  selectedSAP === 'sap7' ? 'ring-2 ring-[#fff]' : ''
                }`}
                onClick={() => {
                  setSelectedSAP('sap7');
                  setImageLoaded(false);
                }}
              >
                SAP-7
              </button>
              <button
                className={`text-white bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 px-6 py-3 rounded-md text-lg sm:text-xl text-center opacity-90 hover:opacity-100 ${
                  selectedSAP === 'sap9' ? 'ring-2 ring-[#fff]' : ''
                }`}
                onClick={() => {
                  setSelectedSAP('sap9');
                  setImageLoaded(false);
                }}
              >
                SAP-9
              </button>
            </div>
          </motion.div>
          
          <div className="relative" style={{ zIndex: 2 }}>
            {selectedSAP === 'sap6' ? (
              <SAP6 onImageLoad={handleImageLoad} imageLoaded={imageLoaded} />
            ) : selectedSAP === 'sap7' ? (
              <SAP7 onImageLoad={handleImageLoad} imageLoaded={imageLoaded} />
            ) : (
              <SAP9 onImageLoad={handleImageLoad} imageLoaded={imageLoaded} />
            )}
          </div>
        </div>
      </motion.div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div>
          <h1 className="text-neutral-400 text-xl text-center underline">
            Quality is Our Priority
          </h1>
          <p className="lg:text-4xl md:text-2xl text-xl text-bold text-white text-center pt-5 pb-10">
            Our products go through levels of testing before delivery.
          </p>
          <div className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between">
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              Pre-Flight Hardware Checks
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              Software & Firmware Testing
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              Ground Control & Communication
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              Flight Testing
            </p>
          </div>
        </div>
      </section>

      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-neutral-400 text-xl text-center py-5 underline">
          Our Design philosophy
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:p-10">
          <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <Squares2X2Icon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Highly Customisable
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              With such robust flying machanism you can have diverse variety of payloads. We offer a range of customisation options to meet your specific needs.
            </p>
          </div>
          <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <ShieldCheckIcon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Reliabilty
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              each product has been tensively tested and they have survived the test of time. each product boost the time a slight time of 500 + hours to ensure that it is reliable and durable.
            </p>
          </div>
          <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <CubeIcon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Robust Build
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
               Our airframes made out of high quality composite materials and are designed to withstand the harsh conditions of the environment.
              </p>
            </div>
            <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <WrenchScrewdriverIcon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Highly Customisable
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eaque reprehenderit error consequatur necessitatibus tenetur. Sed repellendus dignissimos molestias dolor!
            </p>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="lg:w-1/2">
          <h1 className="text-neutral-400 underline text-xl">
            About rodella&apos;s SAP
          </h1>
          <p className="lg:text-5xl text-3xl font-semibold text-white mt-5">
            The Comprehensive Solution for Your Needs.
          </p>
          <p className="text-lg text-neutral-400 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ab fugit saepe incidunt hic quibusdam! Tenetur exercitationem eaque,
            atque voluptas vitae eius at nemo ratione
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row lg:items-center items-start  gap-5">
            <div className="lg:w-25 lg:h-25 rounded-full bg-neutral-800 justify-center items-center flex text-white">
              <UserGroupIcon className="lg:w-12 lg:h-12 w-10 h-10" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold lg:text-3xl text-xl">Designed by highly Professional team</h1>
              <p className="text-neutral-400 text-base lg:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis minus non, minima doloremque ducimus quibusdam porro totam quas quis sequi.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row lg:items-center items-start gap-5">
            <div className="lg:w-25 lg:h-25 rounded-full bg-neutral-800 justify-center items-center flex text-white">
              <Cog8ToothIcon className="lg:w-12 lg:h-12 w-10 h-10" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold lg:text-3xl text-xl">Tailored for Your Needs</h1>
              <p className="text-neutral-400 text-base lg:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis minus non, minima doloremque ducimus quibusdam porro totam quas quis sequi.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row lg:items-center items-start gap-5">
            <div className="lg:w-25 lg:h-25 rounded-full bg-neutral-800 justify-center items-center flex text-white">
              <GlobeAltIcon className="lg:w-12 lg:h-12 h-10 w-10" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold lg:text-3xl text-xl">Made for the Future, Today</h1>
              <p className="text-neutral-400 text-base lg:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis minus non, minima doloremque ducimus quibusdam porro totam quas quis sequi.</p>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default Aircrafts;