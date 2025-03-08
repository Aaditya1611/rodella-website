import Navbar from "../Navbar";
import PrototypeImg1 from "./../../assets/images/design.jpg";
import PrototypeImg2 from "./../../assets/images/MQ650LV.jpg";
import PrototypeImg3 from "./../../assets/images/fixed-wing2.jpg";

const EngPagePrototypeSection = () => {

    return (
        <div className="bg-black pt-2">
            <Navbar />
            <section className="lg:pt-30 py-10">
                <h1 className="text-3xl text-center text-white underline lg:text-5xl">Prototyping</h1>
                {/* <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">With the facility of advanced composites, plastic and metal fabrication, See your design come to life</p> */}
                <p className="text-neutral-400 lg:text-xl text-lg mt-10 px-3">
                    During the Prototyping phase our drones go through multiple stages of testing and quality checks to enusre
                    long-lasting reliable performance across all the conditions.
                    All the maximum performance parameters are checked during this test.
                    The products are pushed to extreme tests to determine the maximum operational abilities of each drone
                </p>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-30 md:grid-cols-2 px-3">
                    <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                        <img src={PrototypeImg1} className="h-130 object-cover rounded-lg" alt="Prototype Image 1"></img>
                        <h1 className="text-2xl text-neutral-300 mt-5">Prototype Construction</h1>
                        {/* <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p> */}
                    </div>
                    <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                        <img src={PrototypeImg1} className="h-130 object-cover rounded-lg" alt="Prototype Image 2"></img>
                        <h1 className="text-2xl text-neutral-300 mt-5">Component testing</h1>
                        {/* <p className="text-xl text-neutral-300 mt-5 text-center">Each individual components (motors, ESCs, batteries) are tested vigorously for performance and reliability.</p> */}
                    </div>
                    <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                        <img src={PrototypeImg2} className="h-130 object-cover rounded-lg" alt="Prototype Image 3"></img>
                        <h1 className="text-2xl text-neutral-300 mt-5">Ground testing</h1>
                        {/* <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p> */}
                    </div>
                    <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                        <img src={PrototypeImg3} className="h-130 object-cover rounded-lg" alt="Prototype Image 4"></img>
                        <h1 className="text-2xl text-neutral-300 mt-5">Flight testing</h1>
                        {/* <p className="text-xl text-neutral-300 mt-5 text-center">Multiple flight tests are conducted in controlled environment to evaluate stability, performance and control of the aircraft</p> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EngPagePrototypeSection;