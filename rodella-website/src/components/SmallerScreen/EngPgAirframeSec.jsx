import Navbar from "../Navbar";
import DesignImg2 from "./../../assets/images/fixed-wing1.png";
import { ArrowUp } from "lucide-react";

const EngPageAirframeSection = () => {

    return (
        <div className="bg-black pt-2">
            <Navbar />
            <section className="lg:pt-30 py-10">
                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Airframe Integration</h1>
                    <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="lg:px-20 max-w-full mt-10 px-3">
                        <img src={DesignImg2} className="lg:h-150 w-full object-cover rounded-lg" alt="Airframe Integration Image"></img>
                    </div>
                    <div className="lg:px-20 my-10 px-3">

                        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg">Component Placement & Mounting</h2>
                                <ul className="list-disc ml-5 lg:text-xl text-neutral-400 mt-5">
                                    <li>Strategic Placement:</li>
                                    <li>Secure Mounting:</li>
                                    <li>Vibration Isolation:</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg lg:mt-0 md:mt-0 mt-5">Wiring and Connections</h2>
                                <ul className="list-disc ml-5 lg:text-xl text-neutral-400 mt-5">
                                    <li>Clean Wiring</li>
                                    <li>Secure Connections</li>
                                    <li>Cable Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row md:flex-row justify-between mt-10">
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg">Payload Integration</h2>
                                <ul className="list-disc ml-5 lg:text-xl text-neutral-400 mt-5">
                                    <li>Payload Mounting</li>
                                    <li>Payload Power and Data Connections</li>
                                    <li>Payload Integration with Flight Controller</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg lg:mt-0 md:mt-0 mt-5">Testing and Validation</h2>
                                <ul className="list-disc ml-5 lg:text-xl text-neutral-400 mt-5">
                                    <li>Ground Testing</li>
                                    <li>Vibration Testing</li>
                                    <li>Flight Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full flex items-center justify-center cursor-pointer" onClick={() => scrollToSection(section0Ref)}>
                        <h2 className="text-white lg:text-3xl text-lg text-center mt-30 border-[2px] inline-flex px-6 py-3 rounded-full items-center justify-center">
                            Go Back
                            <ArrowUp size={30} color="white" />
                        </h2>
                    </div> */}
                </section>
        </div>
    )
}

export default EngPageAirframeSection;