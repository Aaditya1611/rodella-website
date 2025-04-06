import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import Products from "../constants/Products";
import { motion } from "framer-motion";


const OtherCrafts = () => {

    const { id } = useParams();
    const drone = Products.find((p) => p.id === parseInt(id))


    return (
        <div> {/* Removed h-screen here */}
            <section className="pt-2"></section>
            <Navbar />
            <div className="min-h-screen relative flex justify-center items-center">
                <img
                    src={drone.MainBGImg}
                    className="h-full absolute inset-0 object-cover -z-50 w-full scale-110"
                    alt="Fixed Wing Drone"
                />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-neutral-300 text-7xl font-bold">{drone.name}</h1>
                    <p className="text-white text-lg text-center mt-4">Explore the skies</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-20 sm:mt-12 px-6 sm:px-10 lg:px-20">
                {[
                    { label: "Longer Flight Time", value: drone.FlightTime },
                    { label: "Transmission Range", value: drone.TransmissionRange },
                    { label: "High-res Live Feed", value: drone.Camera },
                    { label: "Payload", value: drone.Payload },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="text-center flex flex-col pt-4 sm:pt-0 sm:border-l sm:border-neutral-300 first:border-l-0"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white font-bold text-lg sm:text-xl lg:text-4xl mb-2 sm:mb-4">
                            {item.value}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-neutral-300 text-sm sm:text-base lg:text-xl">
                            {item.label}
                        </motion.p>
                    </div>
                ))}
            </div>

            <div className="lg:px-50 lg:py-20 min-h-screen px-5">
                <div className="flex lg:flex-row gap-20 lg:items-center lg:justify-center flex-col">

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white lg:text-lg text-sm lg:w-1/2 text-wrap">{drone.description}
                    </motion.p>

                    <img src={drone.Isometric} className="scale-125 lg:w-1/2"></img>
                </div>
                <div className="flex lg:flex-row justify-center gap-20 items-center flex-col md:flex-row">
                    <div >
                        <img src={drone.IsoTop} className="lg:h-[650px] scale-125"></img>
                    </div>
                    <div >
                        <img src={drone.IsoFront} className="lg:h-[650px] scale-125 rotate-90"></img>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row min-h-screen lg:px-50 py-20 flex-col">
                <div className="flex flex-col lg:w-1/2 h-full text-white p-5">
                    <motion.div 
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                     className="text-white flex flex-col lg:pr-10">
                        <h1 className="lg:text-[30px] font-sans text-white mb-4 sm:text-sm">Technical Overview</h1>
                        <table className="min-w-full border-collapse border-b border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail1}</td>
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetailsValue1}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail2}</td>
                                    <td className="px-5 py-5 lg:text-lg">{drone.TechnicalDetailsValue2}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail3}</td>
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetailsValue3}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail4}</td>
                                    <td className="px-5 py-5 lg:ext-lg sm: text-sm">{drone.TechnicalDetailsValue4}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail5}</td>
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetailsValue5}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail6}</td>
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetailsValue6}</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetail7}</td>
                                    <td className="px-5 py-5 lg:text-lg sm: text-sm">{drone.TechnicalDetailsValue7}</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
                <div className="w-full h-full">
                    <img src={drone.OtherImg} className="object-cover w-full h-full scale-125" alt="Drone" />
                </div>
            </div>
        </div >
    );
};

export default OtherCrafts;