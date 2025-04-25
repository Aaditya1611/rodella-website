import Navbar from "../components/Navbar";
import AirCraftData from "../constants/AircraftData";
import MultirotorProducts from "../constants/MultirotorProducts";
import FixedWingProducts from "../constants/FixedWingProducts";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon, Squares2X2Icon, ShieldCheckIcon, Cog8ToothIcon, AdjustmentsHorizontalIcon, WrenchScrewdriverIcon, BoltIcon, CubeIcon, UserGroupIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import SAPproducts from "./../constants/Products"
import { Link } from "react-router-dom";
import { useReducer } from "react";
import ContactUs from "./ContactUs";
import firstImage from "./../assets/images/fixed-wing2.jpg"


const Aircrafts = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [animationClass, setAnimationClass] = useState('fade-in');

  const [hoveredId, setHoveredId] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredId(id)
    }, 300);
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null)
    }, 1000);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationClass('fade-out');
  //     setTimeout(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % AirCraftData.length);
  //       setAnimationClass('fade-in');
  //     }, 800); // Animation duration
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [AirCraftData.length]);

  return (
    <div >
      <section className="pt-2">
        <Navbar />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-25 min-h-screen relative">
        <h1 className="lg:text-6xl text-white text-center md:text-5xl text-3xl underline">Standard Aeriel Platform</h1>
        <div className="flex lg:flex-row lg:gap-5 flex-col">
          <div className="text-neutral-200 lg:w-1/2 py-10">
            <h1 className="lg:text-7xl font-bold mt-12 text-3xl">
              Essential Policy
            </h1>
            <span className="lg:text-7xl font-bold block pt-4 text-3xl">
              for our
            </span>
            <span className="lg:text-7xl text-3xl font-bold block py-4">
              Custom
            </span>
            <span className="lg:text-7xl text-3xl font-bold">
              Ariel Platform.
            </span>
            <p className="text-xl mt-7 text-neutral-400">Drones play a vital role in today's world by enhancing efficiency, safety, and accessibility across
              industries.</p>
            <p className="text-xl mt-3 text-neutral-400 mb-8">
              Connect with us so we can deliver customised drone solutions as per your needs.
            </p>
            <Link className="bg-neutral-300 p-4 text-black rounded-2xl w-fit gap-2 flex flex-row items-center justify-center" to={"/contact"}>
              Contact Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="lg:w-1/2 lg:py-10">
            <img src={firstImage}
              alt="SAP main image"
              className="lg:mt-12 h-full rounded-2xl bg-neutral-950"
            />
          </div>
        </div>
      </section>

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
              ✅Pre-Flight Hardware Checks
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              ✅Software & Firmware Testing
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              ✅Ground Control & Communication
            </p>
            <p className="lg:text-xl text-base text-white hover:text-neutral-400 transition duration-300">
              ✅Flight Testing
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
              Volume Production
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eaque reprehenderit error consequatur necessitatibus tenetur. Sed repellendus dignissimos molestias dolor!
            </p>
          </div>
          <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <ShieldCheckIcon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Reliabilty
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eaque reprehenderit error consequatur necessitatibus tenetur. Sed repellendus dignissimos molestias dolor!
            </p>
          </div>
          <div className="bg-neutral-800 p-3 rounded-lg transition-all hover:shadow-2xl shadow-neutral-700 transform hover:scale-102 duration-400">
            <CubeIcon className="w-30 h-30 mb-5 text-white" />
            <h1 className="font-bold text-white ml-3">
              Robust Build
            </h1>
            <p className="text-neutral-300 mt-5 ml-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eaque reprehenderit error consequatur necessitatibus tenetur. Sed repellendus dignissimos molestias dolor!
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

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="lg:w-1/2">
          <h1 className="text-neutral-400 underline text-xl">
            About rodella's SAP
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
              <GlobeAltIcon className="lg:w-12, lg:h-12 h-10 w-10" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold lg:text-3xl text-xl">Made for the Future, Today</h1>
              <p className="text-neutral-400 text-base lg:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis minus non, minima doloremque ducimus quibusdam porro totam quas quis sequi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-2 underline">
          Explore our products

        </h1>
        <h2 className="text-neutral-400 mt-4 sm:mt-5 text-base sm:text-lg max-w-3xl">
          We specialize in crafting custom drone solutions as per your requirements,
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {SAPproducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center shadow-lg bg-neutral-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/othercrafts/${item.id}`} className="w-full">
                <img
                  src={hoveredId === item.id ? item.IsoTop : item.MainBGImg}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover bg-neutral-800 transition-opacity duration-300"
                />
                <h1 className="text-white text-lg sm:text-xl text-center my-6">
                  {item.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="min-h-screen relative pt-2">
      <Navbar />
        <img
          src={AirCraftData[currentImageIndex].AircraftPageImg}
          className={`absolute top-0 left-0 w-full h-full -z-50 object-cover brightness-70 transition-opacity ${animationClass}`}
          alt="Aircraft showcase"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col h-full justify-between">
          <div>
          <h1 className="text-4xl sm:text-6xl lg:text-9xl bg-gradient-to-b text-white bg-clip-text text-center mt-8 sm:mt-12 lg:mt-20 font-bold">
            Let&apos;s fly higher
          </h1>

          <Link
            to={`/aircrafts/${AirCraftData[currentImageIndex].id}`}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-black bg-neutral-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full opacity-70 flex items-center hover:opacity-80 transition-opacity">
              {AirCraftData[currentImageIndex].name}
              <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 ml-2" />
            </p>
          </Link>

          <p className="text-base sm:text-lg lg:text-xl text-center text-neutral-300 max-w-2xl mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat est maiores!
          </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              {
                label: "Longer Flight Time",
                value: AirCraftData[currentImageIndex].FlightTime,
              },
              {
                label: "Transmission Range",
                value: AirCraftData[currentImageIndex].Range,
              },
              {
                label: "High-res Live Feed",
                value: AirCraftData[currentImageIndex].LiveFeed,
              },
              {
                label: "Payload",
                value: AirCraftData[currentImageIndex].Payload,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col pt-4 sm:pt-0 sm:border-l sm:border-neutral-300 first:border-l-0"
                // sm:border-l sm:border-neutral-300 first:border-l-0
              >
                <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-4">
                  {item.value}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base lg:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            We have a wide range of custom based drone solutions
          </h1>
           <h2 className="text-base sm:text-lg lg:text-xl text-neutral-300 mt-4">
            As of now we excel at 2 categories of drones
          </h2> 
           <div className="text-sm sm:text-base text-neutral-300 mt-6 border-2 rounded-full p-3 sm:p-4 flex items-center w-fit">
            <p>Go ahead and take a look for yourself</p>
            <ArrowDownIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
          </div> 
        </div>
      </section> */}
      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-2 underline text-center">
          Fixed Wings
        </h1>
        <h2 className="text-neutral-400 text-center mt-4 sm:mt-5 text-base sm:text-lg max-w-3xl mx-auto">
          We specialize in crafting custom-based fixed-wing drone solutions,
          tailored precisely to your unique needs.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {FixedWingProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-neutral-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/fixedwing/${item.id}`} className="w-full">
                <img
                  src={item.AircraftPageImg}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <h1 className="text-white text-lg sm:text-xl text-center my-6">
                  {item.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Aircrafts;
